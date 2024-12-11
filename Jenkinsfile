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
    nodejs('NodeJS') {
      sh 'npm run test:cov'
    }
  }

  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}
