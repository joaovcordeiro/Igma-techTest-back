import { Router } from "express";
import * as userController from "../controllers/userController.js";
import errorHandlingMiddleware from "../middlewares/errorMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post(
  "/create",
  validateSchemaMiddleware(userSchema),
  errorHandlingMiddleware,
  userController.createUser
);
userRouter.get("/get/:cpf", userController.getUserByCpf);
userRouter.get("/get", userController.getAllUsers);

export default userRouter;
