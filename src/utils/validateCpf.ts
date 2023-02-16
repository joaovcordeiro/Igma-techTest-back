export default function validateCpf(cpf: string) {
  let sum = 0;
  let rest: number;

  //verifica se o cpf nao tem todos os numeros repetidos
  if (new Set(cpf).size === 1) return false;

  //faz a soma dos 9 primeiros digitos multiplicados em ordem decrescente e soma o resultado
  for (let i = 0; i <= 8; i++) {
    sum += parseInt(cpf.substring(i, i + 1)) * (10 - i);
  }

  //faz a divisão do resultado por 11 e pega o resto da divisão
  rest = sum % 11;

  // se o resto for maior que 2, subtrai 11 do resto
  if (rest < 2) rest = 0;
  else rest = 11 - rest;

  //verifica se o resto é igual ao primeiro digito verificador
  if (rest !== parseInt(cpf.substring(9, 10))) return false;

  //reseta as variaveis de controle
  sum = 0;
  rest = 0;

  //faz a soma dos 10 primeiros digitos multiplicados em ordem decrescente e soma o resultado
  for (let i = 0; i <= 9; i++) {
    sum += parseInt(cpf.substring(i, i + 1)) * (11 - i);
  }

  //faz a divisão do resultado por 11 e pega o resto da divisão
  rest = sum % 11;

  // se o resto for maior que 2, subtrai 11 do resto
  if (rest < 2) rest = 0;
  else rest = 11 - rest;

  //verifica se o resto é igual ao segundo digito verificador
  if (rest !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}
