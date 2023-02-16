import coreJoi from "joi";
import joiDate from "@joi/date";
const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}\-?\d{2})$/;

export const userSchema = Joi.object({
  name: Joi.string().required(),
  cpf: Joi.string().regex(RegExp(cpfRegex)).required(),
  birthDate: Joi.date().format("DD/MM/YYYY").required(),
});
