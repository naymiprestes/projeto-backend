import { Router } from "express";
import createContactController from "../controllers/contact/createContact.controller";
import deleteContactController from "../controllers/contact/deleteContact.controller";
import listContactController from "../controllers/contact/listContact.controller";
import updateContactController from "../controllers/contact/updateContactController";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import ownerContactMiddleware from "../middlewares/ownerContact.middleware";

const contactRouter = Router();

contactRouter.post("", authTokenMiddleware, createContactController);
contactRouter.get("", authTokenMiddleware, listContactController);
contactRouter.patch(
  "/:id",
  authTokenMiddleware,
  ownerContactMiddleware,
  updateContactController
);

contactRouter.delete(
  "/:id",
  authTokenMiddleware,
  ownerContactMiddleware,
  deleteContactController
);

export default contactRouter;
