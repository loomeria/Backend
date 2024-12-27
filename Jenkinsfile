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
      def envVars = ''

      if (env.BRANCH_NAME == 'main') {
        dockerComposeFile = 'docker-compose.production.yml'
        envVars = """
        export PRODUCTION_DATABASE_URL=${PRODUCTION_DATABASE_URL}
        export PRODUCTION_GOOGLE_CLIENT_ID=${PRODUCTION_GOOGLE_CLIENT_ID}
        export PRODUCTION_GOOGLE_CLIENT_SECRET=${PRODUCTION_GOOGLE_CLIENT_SECRET}
        export PRODUCTION_GOOGLE_CALLBACK_URL=${PRODUCTION_GOOGLE_CALLBACK_URL}
        """
      } else if (env.BRANCH_NAME == 'develop') {
        dockerComposeFile = 'docker-compose.staging.yml'
        envVars = """
        export STAGING_DATABASE_URL=${STAGING_DATABASE_URL}
        export STAGING_GOOGLE_CLIENT_ID=${STAGING_GOOGLE_CLIENT_ID}
        export STAGING_GOOGLE_CLIENT_SECRET=${STAGING_GOOGLE_CLIENT_SECRET}
        export STAGING_GOOGLE_CALLBACK_URL=${STAGING_GOOGLE_CALLBACK_URL}
        """
      } else {
        error "Unsupported branch: ${env.BRANCH_NAME}"
      }

      sh """
        ${envVars}
        docker compose -f ${dockerComposeFile} up -d
      """
    }
  }
}
