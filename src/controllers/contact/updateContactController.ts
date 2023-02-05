import { Request, Response } from "express";
import updateContactService from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const contact = req.body;

  const contactUpdate = await updateContactService(contact, id);

  res.status(200).json(contactUpdate);
};

export default updateContactController;
