import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/userSchema.js";
import errorHandlingMiddleware from "../middlewares/errorMiddleware.js";

const userRouter = Router();

userRouter.post(
  "/create",
  validateSchemaMiddleware(userSchema),
  userController.createUser
);
userRouter.get("/search/:cpf", userController.getUserByCpf);
userRouter.get("/get/:page?/:take?", userController.getAllUsers);

export default userRouter;
