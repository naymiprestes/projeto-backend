import express from "express";
import "reflect-metadata";
import "express-async-errors";
import userRouter from "./routes/users";
import contactRouter from "./routes/contacts";
import loginRouter from "./routes/login";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());
const cors = require("cors");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.use("/user", userRouter);
app.use("/contacts", contactRouter);
app.use("/login", loginRouter);
app.use(handleErrorMiddleware);

export default app;
