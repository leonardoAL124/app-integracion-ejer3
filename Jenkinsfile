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
    //Borrar carpeta del HTML
    stage('Eliminar archivos'){
        bat 'rd /S /Q    D:\\servidor\\fire'
    }
    stage('Mover al servidor'){
        bat 'xcopy C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\angular-pipeline\\dist\\app-03\\browser   D:\\servidor\\fire  /E /I /Y'
    }
}