import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;

  const userUpdate = await userUpdateService(data, id);

  return res.status(200).json(instanceToPlain(userUpdate));
};

export default userUpdateController;
