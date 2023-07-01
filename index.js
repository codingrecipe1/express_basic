import express from "express";

const app = express();

// 서버포트: 8000 
// localhost:8000
app.listen(8000, () => {
    console.log("8000 서버 호출");
});