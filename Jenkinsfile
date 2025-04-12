pipeline {
  agent any

  environment {
    FRONTEND_REPO = 'https://github.com/Lin-Jacob/TerpNotesFE'
    BACKEND_REPO = 'https://github.com/olaniyisalami/TerpNotesBE'
  }

  stages {
    stage('Clone Repos') {
      steps {
        dir('frontend') {
          git branch: 'main', url: "${FRONTEND_REPO}"
        }
        dir('backend') {
          git branch: 'main', url: "${BACKEND_REPO}"
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Copy to Backend') {
      steps {
        sh 'rm -rf backend/public/*'
        sh 'cp -r frontend/out/* backend/public/'
      }
    }

    stage('Run Backend') {
      steps {
        dir('backend') {
          sh 'pip install -r requirements.txt'
          sh 'pkill -f flask || true'
          sh 'nohup flask run --host=0.0.0.0 &'
        }
      }
    }
  }
}
