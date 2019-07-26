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
          sh 'chmod +x scripts/kill.sh'
          sh 'scripts/kill.sh'
          sh 'nohup node ./node_modules/serve/bin/serve.js -c 0 -s dist -p 5000 &'
        }
      }
    }
  }
}
