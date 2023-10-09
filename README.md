# 식품영양성분 데이터를 활용한 식단 기록 웹 서비스 개발하기

## 1. 프로젝트 소개 
- 개요: 매일의 식단을 기록하여 관리하는 웹 서비스 개발
- 활용 데이터 : [식품의약품안전처 식품영양성분DB(음식)](https://various.foodsafetykorea.go.kr/nutrient/)
- 기간: 2023. 07.24 ~ 08.17
- [Go to see our service](https://jaemin1130.github.io/MiniProject_MealNote/)

## 2. 팀원 
|<img width="200" alt="image" src="https://avatars.githubusercontent.com/u/98063854?v=4">|<img width="200" alt="image" src="https://avatars.githubusercontent.com/u/129818813?v=4">|
| :---------------------------------: | :-----------------------------------:|
|                FrontEnd, CI/CD      |           Backend                       |        
|             김재민            |          김은진             |             
| [GitHub](https://github.com/JaeMin1130)  | [GitHub](https://github.com/EUNJIN6131)  |

## 3. 활용 스택 
<h3>Environment</h3>
<div>
  <img src="https://img.shields.io/badge/vscode 1.18.1-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
 <img src="https://img.shields.io/badge/eclipse 4.18.1-2C2255?style=for-the-badge&logo=eclipseide&logoColor=white"> 
</div>
<h3>CI/CD</h3>
<div>
   <img src="https://img.shields.io/badge/npm 9.5.1-CB3837?style=for-the-badge&logo=npm&logoColor=white">
   <img src="https://img.shields.io/badge/maven 3.9.3-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white">
   <img src="https://img.shields.io/badge/github pages-222222?style=for-the-badge&logo=githubpages&logoColor=white">
   <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
   <img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">
</div>
<div>
   <img src="https://img.shields.io/badge/aws EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
   <img src="https://img.shields.io/badge/aws RDS-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white">
   <img src="https://img.shields.io/badge/aws S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">
   <img src="https://img.shields.io/badge/aws ECR-FF9900?style=for-the-badge&logo=amazonecr&logoColor=white">
   <img src="https://img.shields.io/badge/aws Route53-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white">
</div>
  <h3>Development</h3>
<div>
    <img src="https://img.shields.io/badge/node.js 18.16.0-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/react 18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white"> 
  <img src="https://img.shields.io/badge/mui 5.14.1-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
</div>
<div>
  <img src="https://img.shields.io/badge/java 17-007396?style=for-the-badge&logo=java&logoColor=white"> 
  <img src="https://img.shields.io/badge/springboot 3.1.2-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> 
  <img src="https://img.shields.io/badge/springsecurity 6.1.1-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"> 
  <img src="https://img.shields.io/badge/mysql 8.0.32-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
</div>
<h3>Communication</h3>
<div>
  <a href="https://shrub-snap-550.notion.site/9cf9fb447f154e3999a842f3980aef84?v=87c7e9304b924d9eb167edaa8bf4b778&pvs=4"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> </a>
    <a href="https://github.com/JaeMin1130/MiniProject_MealNote"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></a>
</div>

## 4. 서비스 아키텍처
![image](https://github.com/JaeMin1130/MiniProject_MealNote/assets/98063854/c3db61f9-04ef-46a9-88b3-9ccb9513d697)

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


| 로그인 페이지  |  회원가입 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="450" height="350"  src="https://github.com/JaeMin1130/MiniProject_MealNote/assets/98063854/1dea1fa7-1cf7-47fe-8df5-54e00d60f1ab"/> |  <img width="450" height="350" src="https://github.com/JaeMin1130/MiniProject_MealNote/assets/98063854/62ecc733-1e5e-4603-adcc-284bfeb83485"/>|  

| 메인 페이지(음식 검색)  |  메인 페이지(기록 저장)   |  
| :-------------------------------------------: | :------------: |
| <img width="450" height="350" src="https://github.com/JaeMin1130/MiniProject_MealNote/assets/129818813/685b2f75-a23d-4c40-8757-080dbe0a5d9b"/>   |  <img width="450" height="350" src="https://github.com/JaeMin1130/MiniProject_MealNote/assets/98063854/eee3055a-24b4-4472-807b-b48b3ee95b47"/>|

| 메인 페이지(날짜 조회)  |
| :-------------------------------------------: | 
| <img width="450" height="350" src="https://github.com/JaeMin1130/MiniProject_MealNote/assets/98063854/225bf747-ac6f-42e2-93ca-ee477509efe3"/> |

| 시연 영상  |
| :-------------------------------------------: | 
|   <img width="900" height="600" src="https://github.com/JaeMin1130/MiniProject_MealNote/assets/129818813/d84a868b-6b03-4ac7-a85c-5e46c97e5ad5"> |

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
