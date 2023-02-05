import { Router } from "express";
import loginControler from "../controllers/login/login.controller";

const loginRouter = Router();

loginRouter.post("", loginControler);

export default loginRouter;
