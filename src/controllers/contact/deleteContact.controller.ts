import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const contact = await deleteContactService(id);

  return res.status(204).json({ message: contact.message });
};

export default deleteContactController;
