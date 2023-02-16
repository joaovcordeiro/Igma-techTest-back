import * as userRepository from "../repositories/userRepository.js";
import { AppError } from "../errors/AppError.js";

export default async function verifyCpfAlreadyInUse(cpf: string) {
  const user = await userRepository.findUserByCpf(cpf);

  if (user) {
    throw new AppError("CPF already in use", 400);
  }

  return;
}
