node {
    stage('Revisión'){
        checkout scm
    }
    stage('Instalación de dependencias'){
        bat 'npm install'
    }
    stage('Construir'){
        bat 'npm run build'
    }
    stage('Mover al servidor'){
        bat 'xcopy C:/ProgramData/Jenkins/.jenkins/workspace/angular-pipeline/dist/app-03/browser D:/servidor/pipe-angular \E'
    }
}