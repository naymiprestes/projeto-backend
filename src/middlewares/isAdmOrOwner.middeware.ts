import { Request, Response, NextFunction } from "express";

const isAdmOrOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isOwner = req.user.id === req.params.id;
  const isAdm = req.user.isAdm;

  if (!isOwner && !isAdm) {
    return res.status(403).json({ message: "Não tem permissão" });
  }

  return next();
};

export default isAdmOrOwnerMiddleware;
