# Make blog using REACT & MongoDB   

# TODO
- thumbs_Up하고 디비에 기록하기
- 로그인 페이지
- 백과 프런트 정보 주고받을 때 암호화
- 메뉴 (네비게이션바) 만들기

# thing to solve
1.import 하나로 여러개 파일 불러오기   
2. Array.prototype.map() expects a return value from arrow function warning 해결

# ESLint
npm run checkLint    
npm run formatLint    

# husky 
- reference     
https://typicode.github.io/husky/#/?id=yarn-2     
https://stackoverflow.com/questions/53869155/how-to-run-husky-pre-commit-in-child-directory-only
- pre-commit 설정하기    
root directory 에서 .husky폴더에 pre-commit에서 설정하시면 됩니다.

# workspace
- react_client, react_server 폴더에 이는 node_modules 다지우고, 루트 디렉토리에서 npm install 하시면 루트 디렉토리에서 node_modules 폴더가 생성됩니다.     
- client 실행: npm run --workspace=react_client    
- server 실행 :npm run --workspace=react_server    