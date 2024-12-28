node {
  stage('SCM') {
    checkout scm
  }

  stage('Install Dependencies') {
    nodejs('NodeJS') {
      sh 'npm install'
    }
  }

  stage('Run Tests') {
    catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
      nodejs('NodeJS') {
        sh 'npm run test'
      }
    }
  }

  stage('Run Coverage') {
    catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
      nodejs('NodeJS') {
        sh 'npm run test:cov'
      }
    }
  }

  stage('SonarQube Analysis') {
    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
      def scannerHome = tool 'SonarScanner'
      withSonarQubeEnv() {
        sh "${scannerHome}/bin/sonar-scanner"
      }
    }
  }

  stage('Docker Build') {
    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
      def dockerBuildCmd = ''

      if (env.BRANCH_NAME == 'main') {
        dockerBuildCmd = 'loomeria-bp'
      } else if (env.BRANCH_NAME == 'develop') {
        dockerBuildCmd = 'loomeria-bs'
      } else {
        error "Unsupported branch: ${env.BRANCH_NAME}"
      }

      sh """
      docker build -t ${dockerBuildCmd}:latest .
      """
    }
  }

  stage('Docker Replace and Run') {
    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
      def dockerComposeFile = ''
      def databaseUrl = ''
      def googleClientId = ''
      def googleClientSecret = ''
      def googleCallbackUrl = ''

      if (env.BRANCH_NAME == 'main') {
        databaseUrl = credentials('PRODUCTION_DATABASE_URL')
        googleClientId = credentials('PRODUCTION_GOOGLE_CLIENT_ID')
        googleClientSecret = credentials('PRODUCTION_GOOGLE_CLIENT_SECRET')
        googleCallbackUrl = credentials('PRODUCTION_GOOGLE_CALLBACK_URL')
        dockerComposeFile = 'docker-compose.production.yml'
      } else if (env.BRANCH_NAME == 'develop') {
        databaseUrl = credentials('STAGING_DATABASE_URL')
        googleClientId = credentials('STAGING_GOOGLE_CLIENT_ID')
        googleClientSecret = credentials('STAGING_GOOGLE_CLIENT_SECRET')
        googleCallbackUrl = credentials('STAGING_GOOGLE_CALLBACK_URL')
        dockerComposeFile = 'docker-compose.staging.yml'
      } else {
        error "Unsupported branch: ${env.BRANCH_NAME}"
      }

      sh """
      docker compose -f ${dockerComposeFile} \
        --build-arg DATABASE_URL=${databaseUrl} \
        --build-arg GOOGLE_CLIENT_ID=${googleClientId} \
        --build-arg GOOGLE_CLIENT_SECRET=${googleClientSecret} \
        --build-arg GOOGLE_CALLBACK_URL=${googleCallbackUrl} \
        up -d
      """
    }
  }
}
