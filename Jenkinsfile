pipeline {
  agent {
    kubernetes {
      //cloud 'kubernetes'
      yaml """
kind: Pod
metadata:
  name: kaniko
spec:
  containers:
    - name: kaniko
      image: gcr.io/kaniko-project/executor:v1.9.1-debug
      imagePullPolicy: Always
      command:
      - sleep
      args:
      - 99d
      volumeMounts:
      - name: kaniko-secret
        mountPath: /kaniko/.docker
  volumes:
    - name: kaniko-secret
      secret:
        secretName: dockercred
        items:
          - key: .dockerconfigjson
            path: config.json
"""
    }
  }
  stages {
    stage('Build with Kaniko') {
      steps {
        git branch: 'main', url: 'https://github.com/allan-lewis/no-geeks-brewing-site'
        container(name: 'kaniko') {
            sh '''
            /kaniko/executor --dockerfile `pwd`/Dockerfile --context `pwd` --destination allanelewis/ngb-site:latest
            '''
        }
      }
    }
  }
}
