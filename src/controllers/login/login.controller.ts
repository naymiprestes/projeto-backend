import { Request, Response } from "express";
import loginService from "../../services/login/login.service";

const loginControler = async (req: Request, res: Response) => {
  const login = req.body;

  const token = await loginService(login);

  return res.status(200).json({ token: token.token, id: token.id });
};

export default loginControler;
