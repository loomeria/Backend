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
      } else if (env.BRANCH_NAME == 'develop') {
        dockerComposeFile = 'docker-compose.staging.yml'
      } else {
        error "Unsupported branch: ${env.BRANCH_NAME}"
      }

      sh """
        docker compose -f ${dockerComposeFile} up -d
      """
    }
  }
}
