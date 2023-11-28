import express from "express";
import { response } from "./config/response.js";
import { tempRouter } from "./src/routes/temp.route.js";
import { BaseError } from "./config/error.js";
import { status } from "./config/response.status.js";

const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.get("/", (req, res) => {
  console.log("/");
  res.send("Hello UMC!");
});

app.get("/hello", (req, res) => {
  console.log("/hello");
  res.send("Hello world!");
});

app.use("/temp", tempRouter);

// error handling
app.use((req, res, next) => {
  const err = new BaseError(status.NOT_FOUND);
  next(err);
});

app.use((err, req, res, next) => {
  // console.error(err.stack);
  // res.status(500).send(err.stack);
  // 템플릿 엔진 변수 설정
  res.locals.message = err.message;
  // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
