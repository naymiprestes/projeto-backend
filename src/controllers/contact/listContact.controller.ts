import { Request, Response } from "express";
import listContactService from "../../services/contacts/listContact.service";

const listContactController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const contacts = await listContactService(id);

  return res.status(200).json(contacts);
};

export default listContactController;
