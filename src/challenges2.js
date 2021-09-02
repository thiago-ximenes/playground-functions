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
function generatePhoneNumber() {
  // seu código aqui
}

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
