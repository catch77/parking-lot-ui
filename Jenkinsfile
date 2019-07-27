pipeline {
  agent any

  stages {
    stage('Prepare') {
      steps {
        nvm('v10.16.0') {
          sh "npm install -g yarn"
          sh 'yarn install'
        }

      }
    }
    stage('Test') {
      steps {
        nvm('v10.16.0') {
          sh 'yarn run test:unit'
        }
      }
    }
    stage('Deliver') {
      steps {
        nvm('v10.16.0') {
          sh 'yarn run build'
          sh 'chmod +x scripts/deliver.sh'
          sh 'scripts/deliver.sh'
        }
      }
    }
  }
}
