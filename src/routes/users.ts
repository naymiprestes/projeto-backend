import { Router } from "express";
import createUserController from "../controllers/user/createUserController";
import listUserController from "../controllers/user/listUserController";
import userDeleteController from "../controllers/user/userDelete.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import isAdmOrOwnerMiddleware from "../middlewares/isAdmOrOwner.middeware";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", authTokenMiddleware, listUserController);
userRouter.patch(
  "/:id",
  authTokenMiddleware,
  isAdmOrOwnerMiddleware,
  userUpdateController
);
userRouter.delete(
  "/:id",
  authTokenMiddleware,
  isAdmOrOwnerMiddleware,
  userDeleteController
);

export default userRouter;
