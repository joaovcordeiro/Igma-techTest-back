export default function validateCpf(cpf: string) {
  let sum = 0;
  let rest: number;
  cpf = cpf.replace(/\D/g, "");

  if (new Set(cpf).size === 1) return false;

  for (let i = 0; i <= 8; i++) {
    sum += parseInt(cpf.substring(i, i + 1)) * (10 - i);
  }

  rest = sum % 11;

  if (rest < 2) rest = 0;
  else rest = 11 - rest;

  if (rest !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  rest = 0;

  for (let i = 0; i <= 9; i++) {
    sum += parseInt(cpf.substring(i, i + 1)) * (11 - i);
  }

  rest = sum % 11;

  if (rest < 2) rest = 0;
  else rest = 11 - rest;

  if (rest !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}
