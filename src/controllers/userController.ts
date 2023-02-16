import { Request, Response } from "express";
import { User } from "../repositories/userRepository.js";
import ResponseModel from "../config/ReponseModel.js";
import * as userService from "../services/userService.js";

export async function createUser(req: Request, res: Response) {
  try {
    const user = req.body as User;
    const newUser = await userService.createUser(user);
    res.status(201).json(new ResponseModel("User created", 201, newUser));
  } catch (error) {
    res.status(500).json(new ResponseModel(error.message, 500));
  }
}

export async function getUserByCpf(req: Request, res: Response) {
  try {
    const user = await userService.getUserByCpf(req.params.cpf);
    res.status(200).json(new ResponseModel("User found", 200, user));
  } catch (error) {
    res.status(500).json(new ResponseModel(error.message, 500));
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(new ResponseModel("Users found", 200, users));
  } catch (error) {
    res.status(500).json(new ResponseModel(error.message, 500));
  }
}
