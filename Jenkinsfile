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
    def scannerHome = tool 'SonarScanner'
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }

  stage('Docker Build') {
    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
      sh 'docker build -t loomeria-backend:latest .'
    }
  }

  stage('Docker Replace and Run') {
    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
      def containerName = 'loomeria-backend'

      sh """
        if [ \$(docker ps -aq -f name=${containerName}) ]; then
          docker rm -f ${containerName}
        fi
      """

      sh """
        docker run -d --name ${containerName} \
          --network cloudflare \
          --ip 172.20.0.30 \
          loomeria-backend:latest
      """
    }
  }
}
