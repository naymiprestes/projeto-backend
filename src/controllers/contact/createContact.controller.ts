import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const contact = req.body;

  const createContact = await createContactService(contact, id);

  return res.status(201).json(instanceToPlain(createContact));
};

export default createContactController;
