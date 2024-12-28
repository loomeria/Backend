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

      if (env.BRANCH_NAME == 'main') {
        dockerComposeFile = 'docker-compose.production.yml'
        withCredentials([
          string(credentialsId: 'PRODUCTION_DATABASE_URL', variable: 'DATABASE_URL'),
          string(credentialsId: 'PRODUCTION_GOOGLE_CLIENT_ID', variable: 'GOOGLE_CLIENT_ID'),
          string(credentialsId: 'PRODUCTION_GOOGLE_SECRET', variable: 'GOOGLE_SECRET'),
          string(credentialsId: 'PRODUCTION_GOOGLE_CALLBACK_URL', variable: 'GOOGLE_CALLBACK_URL')
        ]) {
          sh """
          docker compose -f ${dockerComposeFile} \
            --build-arg DATABASE_URL=${DATABASE_URL} \
            --build-arg GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID} \
            --build-arg GOOGLE_SECRET=${GOOGLE_SECRET} \
            --build-arg GOOGLE_CALLBACK_URL=${GOOGLE_CALLBACK_URL} \
            up -d
          """
        }
      } else if (env.BRANCH_NAME == 'develop') {
        dockerComposeFile = 'docker-compose.staging.yml'
        withCredentials([
          string(credentialsId: 'STAGING_DATABASE_URL', variable: 'DATABASE_URL'),
          string(credentialsId: 'STAGING_GOOGLE_CLIENT_ID', variable: 'GOOGLE_CLIENT_ID'),
          string(credentialsId: 'STAGING_GOOGLE_SECRET', variable: 'GOOGLE_SECRET'),
          string(credentialsId: 'STAGING_GOOGLE_CALLBACK_URL', variable: 'GOOGLE_CALLBACK_URL')
        ]) {
          sh """
          docker compose -f ${dockerComposeFile} \
            --build-arg DATABASE_URL=${DATABASE_URL} \
            --build-arg GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID} \
            --build-arg GOOGLE_SECRET=${GOOGLE_SECRET} \
            --build-arg GOOGLE_CALLBACK_URL=${GOOGLE_CALLBACK_URL} \
            up -d
          """
        }
      } else {
        error "Unsupported branch: ${env.BRANCH_NAME}"
      }
    }
  }
}
