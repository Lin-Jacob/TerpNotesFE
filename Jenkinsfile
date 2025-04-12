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
            git branch: 'main', url: "${FRONTEND_REPO}", credentialsId: 'c689c071-d359-4002-89fc-3675bb89bf0f'
        }
        dir('backend') {
            git branch: 'main', url: "${BACKEND_REPO}", credentialsId: 'c689c071-d359-4002-89fc-3675bb89bf0f'
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
        sh 'pkill -f app.py || true'
        sh 'nohup python3 app.py &'
        }
    }
    }
  }
}
