# 식품영양성분 데이터를 활용한 식단 기록 웹 서비스 개발하기

## 1. 프로젝트 소개 
- 개요: 매일의 식단을 기록하여 관리하는 웹 서비스 개발
- 활용 데이터 : [식품의약품안전처 식품영양성분DB(음식)](https://various.foodsafetykorea.go.kr/nutrient/)
- 기간: 2023. 07.24 ~ 08.17
- [Go to see our service](https://jaemin1130.github.io/MiniProject_MealNote/)

## 2. 팀원 
|<img width="200" alt="image" src="https://avatars.githubusercontent.com/u/98063854?v=4">|<img width="200" alt="image" src="https://avatars.githubusercontent.com/u/129818813?v=4">|
| :---------------------------------: | :-----------------------------------:|
|                FrontEnd           |           Backend                       |        
|             김재민            |          김은진             |             
| [GitHub](https://github.com/JaeMin1130)  | [GitHub](https://github.com/EUNJIN6131)  |

## 3. 활용 스택 
<h3>Environment</h3>
<div>
  <img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
 <img src="https://img.shields.io/badge/eclipse-2C2255?style=for-the-badge&logo=eclipseide&logoColor=white"> 
</div>
<h3>Config</h3>
<div>
   <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
   <img src="https://img.shields.io/badge/maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white">
</div>
  <h3>Development</h3>
<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
</div>
<div>
  <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> 
  <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> 
  <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
</div>
<h3>Communication</h3>
<div>
  <a href="https://shrub-snap-550.notion.site/9cf9fb447f154e3999a842f3980aef84?v=87c7e9304b924d9eb167edaa8bf4b778&pvs=4"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> </a>
    <a href="https://github.com/JaeMin1130/MiniProject_MealNote"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></a>
</div>

## 4. 서비스 아키텍처
![image](https://github.com/JaeMin1130/MiniProject_MealNote/assets/98063854/1e87e903-3015-460c-ac04-74e28b010ba7)


## 5. 주요 기능 
- [x] 회원가입/로그인
- [x] 음식 영양 정보 검색 및 계산 기능
- [x] 검색어 자동 완성 기능
- [x] 최근 검색어 조회 및 삭제 기능
- [x] 사진을 포함한 식단 기록 기능
- [x] 날짜별 기록 조회 기능
- [x] 기록 삭제 기능
- [ ] 기록 수정 기능
- [ ] 월별 통계치 조회 기능

## 6. 화면 구성

## 7. REST API 명세 
| ID | Method | Params | URI | Return | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | POST  | Member member | /users/join | boolean | 회원가입 |
| 2 | POST | Member member | /users/login | boolean | 로그인 |
| 3 | GET | String userId  | /users/logout | boolean | 로그아웃 |
| 4 | GET | String userId  | /main/{userId} | List<Note> | 사용자별 조회 |
| 5 | POST | Note note | /main/note | Note | 식단 추가 |
| 6 | GET | String keyword | /main/search/{keyword} | List<Food> | 음식 조회 |
| 7 | GET | String keyword | /main/searchLog/save/{keyword} | List<Food> | 검색 기록 저장 |
| 8 | PUT | Note note | /main/update | Note | 식단 수정 |
| 9 | DELETE | Long id | /main/delete | boolean | 식단 삭제 |
| 10 | GET | String userId | /main/searchLog/{userId} | List<SearchLog> | 최근 검색어 조회 |
| 11 | DELETE | String keyword | /main/searchLog/delete/{foodName} | boolean | 최근 검색어 삭제 |


## 8. 개발 일지 
<a href="https://shrub-snap-550.notion.site/CRUD-566be659b7bf4693a6515f408cf2f1d9?pvs=4">개발 일지 보러 가기  <img width="23" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"> </a>
