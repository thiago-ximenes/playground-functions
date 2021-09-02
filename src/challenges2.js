// Desafio 10
function techList(technologies, studentName) {
  let result = [];
  technologies.sort();
  if (technologies.length > 0) {
    for (let item of technologies) {
      result.push({
        tech: item,
        name: studentName,
      });
    }
  } else {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let number = phoneNumber;
  if (number.length === 11) {
    number = +number.join('');
    number = number.toString();
    return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

console.log(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
