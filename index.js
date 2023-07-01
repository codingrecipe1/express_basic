import express from "express";

const app = express();

// 서버포트: 8000 
// localhost:8000
app.listen(8000, () => {
    console.log("8000 서버 호출");
});

// 기본 주소 요청 
// localhost:8000/
app.get("/", () => {
    console.log("기본주소 요청");
});

app.get("/hello", () => {
    console.log("hello 주소 요청");
});

// query string 받기
app.get("/qs", (req) => {
    console.log(req.query);
    console.log(req.query.p1);
    console.log(req.query.p2);
});


