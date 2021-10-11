# Make blog using REACT & MongoDB   

# version
- node는 v16.11.0을 사용합니다.
- npm은 최소 v7을 사용합니다. (workspace 를 사용하기 위해)

# ESLint
npm run lint   
npm run lint:fix   

# husky 
- reference     
https://typicode.github.io/husky/#/?id=yarn-2     
https://stackoverflow.com/questions/53869155/how-to-run-husky-pre-commit-in-child-directory-only
- pre-commit 설정하기    
root directory 에서 .husky폴더에 pre-commit에서 설정하시면 됩니다.

# workspace
- client, server 폴더에 이는 node_modules 다지우고, 루트 디렉토리에서 npm install 하시면 루트 디렉토리에서 node_modules 폴더가 생성됩니다.     
- client 실행: npm run {cmd} --workspace=client    
- server 실행 :npm run {cmd} --workspace=server   
ex) client쪽 린터 실행 npm run lint --workspace=client 

