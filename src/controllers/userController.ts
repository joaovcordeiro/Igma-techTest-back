import { Request, Response } from "express";
import { User } from "../repositories/userRepository.js";
import ResponseModel from "../config/ReponseModel.js";
import * as userService from "../services/userService.js";

export async function createUser(req: Request, res: Response) {
  const user = req.body as User;

  const newUser = await userService.createUser(user);

  res.status(201).json(new ResponseModel("User created", 201, newUser));
}

export async function getUserByCpf(req: Request, res: Response) {
  const user = await userService.getUserByCpf(req.params.cpf);

  res.status(200).json(new ResponseModel("User found", 200, user));
}

export async function getAllUsers(req: Request, res: Response) {
  const { page, take } = req.params;
  const users = await userService.getAllUsers(page, take);

  res.status(200).json(new ResponseModel("Users found", 200, users));
}
