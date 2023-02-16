import { User } from "../repositories/userRepository.js";
import { AppError } from "../errors/AppError.js";
import * as userRepository from "../repositories/userRepository.js";
export type UserCreateData = Omit<User, "id">;
import verifyCpfAlreadyInUse from "../utils/verifyCpfAlreadyInUse.js";
import formatCpf from "../utils/formatCpf.js";
import validateCpf from "../utils/validateCpf.js";
import formatDate from "../utils/formateDate.js";

export async function createUser(user: UserCreateData) {
  if (!validateCpf(user.cpf)) {
    throw new AppError("Invalid CPF", 422);
  }

  const date = user.birthDate.toString().split("/");

  user.birthDate = new Date(+date[2], +date[1] - 1, +date[0]);

  user.cpf = formatCpf(user.cpf);

  await verifyCpfAlreadyInUse(user.cpf);

  return await userRepository.insert(user);
}

export async function getUserByCpf(cpf: string) {
  if (!validateCpf(cpf)) {
    throw new AppError("Invalid CPF", 422);
  }
  cpf = formatCpf(cpf);

  const user = await userRepository.findUserByCpf(cpf);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
}

export async function getAllUsers(
  page: string | undefined = "1",
  take: string | undefined = "10"
) {
  if (+page <= 0 || +take <= 0) {
    throw new AppError("Invalid page or take", 422);
  }

  const users = await userRepository.getAllUsers(page, take);

  return {
    page: +page,
    users,
  };
}
