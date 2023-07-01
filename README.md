# 프로젝트 시작 
npm init

# dependency 설치 
npm install [dependency 이름]
- express: 백엔드 프레임워크 
- cors: cors 설정 
- json: json 파싱 
- body-parser: 요청 body 받기 
- nodemon: index.js 저장시 서버 새로고침

# api 테스트
- postman 
- REST Client (vs code extension)

# database 
- 계정 및 database 생성 (root)
```
create database db_codingrecipe;
create user user_codingrecipe@localhost identified by '1234';
grant all privileges on db_codingrecipe.* to user_codingrecipe@localhost;
```
- 사용할 table
```
drop table if exists nations_table;
create table nations_table(
	id bigint auto_increment primary key,
    name varchar(20),
    capital varchar(20),
    population int
    );
```