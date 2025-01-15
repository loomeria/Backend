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
    nodejs('NodeJS') {
      sh 'npm run test'
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
      nodejs('NodeJS') {
        def scannerHome = tool 'SonarScanner'
         withSonarQubeEnv() {
           sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }
  }

  stage('Docker Build') {
    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
      def dockerImageTag = ''

      if (env.BRANCH_NAME == 'main') {
        dockerImageTag = 'loomeria-bp'
      } else if (env.BRANCH_NAME == 'staging') {
        dockerImageTag = 'loomeria-bs'
      } else {
        error "Unsupported branch: ${env.BRANCH_NAME}"
      }

      sh """
      docker build -t ${dockerImageTag}:latest .
      """
    }
  }

  stage('Docker Run') {
    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
      def dockerComposeFile = ''
      def dockerEnvVars = []
      def containerName = ''

      if (env.BRANCH_NAME == 'main') {
        dockerComposeFile = 'docker-compose.production.yml'
        containerName = 'loomeria-bp'
        withCredentials([
          string(credentialsId: 'PRODUCTION_DATABASE_URL', variable: 'DATABASE_URL'),
          string(credentialsId: 'PRODUCTION_GOOGLE_CLIENT_ID', variable: 'GOOGLE_CLIENT_ID'),
          string(credentialsId: 'PRODUCTION_GOOGLE_SECRET', variable: 'GOOGLE_SECRET'),
          string(credentialsId: 'PRODUCTION_GOOGLE_CALLBACK_URL', variable: 'GOOGLE_CALLBACK_URL')
        ]) {
          dockerEnvVars = [
            "DATABASE_URL=${DATABASE_URL}",
            "GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}",
            "GOOGLE_SECRET=${GOOGLE_SECRET}",
            "GOOGLE_CALLBACK_URL=${GOOGLE_CALLBACK_URL}"
          ]
        }
      } else if (env.BRANCH_NAME == 'staging') {
        dockerComposeFile = 'docker-compose.staging.yml'
        containerName = 'loomeria-bs'
        withCredentials([
          string(credentialsId: 'STAGING_DATABASE_URL', variable: 'DATABASE_URL'),
          string(credentialsId: 'STAGING_GOOGLE_CLIENT_ID', variable: 'GOOGLE_CLIENT_ID'),
          string(credentialsId: 'STAGING_GOOGLE_SECRET', variable: 'GOOGLE_SECRET'),
          string(credentialsId: 'STAGING_GOOGLE_CALLBACK_URL', variable: 'GOOGLE_CALLBACK_URL')
        ]) {
          dockerEnvVars = [
            "DATABASE_URL=${DATABASE_URL}",
            "GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}",
            "GOOGLE_SECRET=${GOOGLE_SECRET}",
            "GOOGLE_CALLBACK_URL=${GOOGLE_CALLBACK_URL}"
          ]
        }
      } else {
        error "Unsupported branch: ${env.BRANCH_NAME}"
      }

      withEnv(dockerEnvVars) {
        sh """
        if docker ps -a --format \'{{.Names}}\' | grep -q "^${containerName}\$"; then
          echo "Container ${containerName} exists. Stopping and removing it..."
          docker stop ${containerName} && docker rm ${containerName} || true
        fi

        echo "Starting container ${containerName}..."
        docker compose -f ${dockerComposeFile} up -d
        """
      }
    }
  }
}
