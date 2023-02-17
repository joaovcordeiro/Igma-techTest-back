import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post(
  "/user",
  validateSchemaMiddleware(userSchema),
  userController.createUser
);
userRouter.get("/user/:cpf", userController.getUserByCpf);
userRouter.get("/users/:page?/:take?", userController.getAllUsers);

export default userRouter;
