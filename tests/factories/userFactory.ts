import { faker } from "@faker-js/faker";
import { prisma } from "../../src/config/database.js";

interface Body {
  name: string;
  cpf: string;
  birthDate: string;
}

export async function createUser(
  validCpf: boolean,
  validBirthDate: boolean,
  validName: boolean
) {
  const body = {
    name: validName ? faker.name.firstName() + " " + faker.name.lastName() : "",
    cpf: validCpf ? "145.144.797-30" : "145.144.797-31",
    birthDate: validBirthDate ? "30/04/2002" : "45/13/2340",
  };
  return body;
}

export async function verifyUser(body: Body) {
  const userCreated = await prisma.users.findUnique({
    where: {
      cpf: body.cpf,
    },
  });

  return userCreated;
}
