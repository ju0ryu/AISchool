const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const MySQLStore = require("express-mysql-session")(session);

dotenv.config();
const app = express(); //서버 생성s
app.set("port", process.env.PORT || 3000); // 포트번호 설정
// const options = {
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "123456",
//   database: "bbs",
// };
// var sessionStore = new MySQLStore(options);
// // app.use(morgan("dev"));
// app.use("/", express.static(path.join(__dirname, "public")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     store: sessionStore,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//     },
//     name: "session-cookie",
//   })
// );

// const multer = require("multer");
// const fs = require("fs");

// try {
//   fs.readdirSync("uploads");
// } catch (error) {
//   console.error("uploads 폴더가 없어 uploads폴더를 생성합니다.");
//   fs.mkdirSync("uploads");
// }
// const upload = multer({
//   Storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });
// app.get("/upload", (req, res) => {
//   res.sendFile(path.join(__dirname, "multipart.html"));
// });

// app.post("/upload", upload.single("image"), (req, res) => {
//   console.log(req.file, req.body);
//   res.send("ok");
// });

// app.post("/upload", upload.array("many"), (req, res) => {
//   console.log(req.files, req.body);
//   res.send("ok");
// });

// app.post(
//   "/upload",
//   upload.fields([{ name: "image1" }, { name: "image2" }]),
//   (req, res) => {
//     console.log(req.files, req.body);
//     res.send("ok");
//   }
// );

// app.use((req, res, next) => {
//   console.log("모든요청에 다 실행됩니다");
//   sess = req.session;
//   sess.username = "juyoung";
//   console.log("req.session.username : ", req.session.username);
//   console.log("req.sessionID : ", req.sessionID);
//   console.log("req.session : ", req.session);
//   next();
// });
// app.get(
//   "/",
//   (req, res, next) => {
//     //   console.log(req.query);
//     //   const var1 = req.query.var1;
//     //   const var2 = req.query.var2;
//     //   res.send({ data1: var1, data2: var2 });
//     //   res.sendFile(path.join(__dirname, "/index.html"));
//     console.log("GET / 요청에서만 실행됩니다.");
//     next();
//   },
//   (req, res) => {
//     throw new Error("에러는 에러 처리 미들웨어로 갑니다.");
//   }
// );

const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/user", userRouter);

router.get("/user/:id", function (req, res) {
  console.log(req.params, req.query);
});
app.use((req, res, next) => {
  res.status(400).send("Not Found");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
