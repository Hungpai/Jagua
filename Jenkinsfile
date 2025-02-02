pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Hungpai/Jagua.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'ng test --no-watch --browsers ChromeHeadless'
            }
        }
        stage('Build Angular app') {
            steps {
                bat 'ng build'
            }
        }
        stage('Deploy to S3') {
            steps {
                bat """
                aws s3 sync dist\\minna-no-nihongo\\browser s3://jagua.hungpy.de --delete
                aws cloudfront create-invalidation --distribution-id E2ELMYHZOC0J9L --paths /*
                """
            }
        }
    }
    post {
        success {
            echo 'Deployment to S3 successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}