import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Contact from "../entities/contact.entity";

const ownerContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user.id;
  const contactId = req.params.id;

  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id: contactId });

  if (contact?.user.id !== userId) {
    return res.status(403).json({ message: "não é dono" });
  }

  return next();
};

export default ownerContactMiddleware;
