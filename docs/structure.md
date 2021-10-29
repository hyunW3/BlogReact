## CLIENT
- App.js
    - component/Navigation.js : 페이지 목록을 보여주는 메뉴바.    
    ----------------아래 중 하나만 보여준다.--------------------
    - route/ViewPage.js
        - PageTitle.js : 페이지 제목과 Post Button
            - WriteContent.js : Post 버튼을 누르면 해당 페이지에 컨텐츠를 추가한다.
        - PageContentsList.js : 작성한 컨텐츠들을 보여주는 리스트
            - ViewContent.js : 클릭하면 컨텐츠의 자세한 내용을 보여준다.
    - route/ViewPortfolio.js
        - ShowPersonInfo.js : 사람에 대한 정보를 보여준다.
        - (다른 것을 추가할 여지가 있다.)