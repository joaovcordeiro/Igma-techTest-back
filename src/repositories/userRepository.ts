import { prisma } from "../config/database.js";
import { UserCreateData } from "../services/userService.js";

export interface User {
  id: number;
  name: string;
  cpf: string;
  birthDate: Date;
}

export async function insert(UserCreateData: UserCreateData) {
  const user = await prisma.users.create({
    data: {
      name: UserCreateData.name,
      cpf: UserCreateData.cpf,
      birthDate: UserCreateData.birthDate,
    },
  });

  return user;
}

export function findUserByCpf(cpf: string) {
  return prisma.users.findUnique({
    where: {
      cpf: cpf,
    },
  });
}

export function getAllUsers(page: string, take: string) {
  return prisma.users.findMany({
    take: +take || 10,
    skip: +take * (+page - 1),
  });
}
