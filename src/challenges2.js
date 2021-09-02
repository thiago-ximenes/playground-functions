// Desafio 10
function techList(technologies, name) {
  let result = [];
  let techNames = technologies.sort();
  if (technologies.length > 0) {
    for (let item of technologies) {
      result.push({
        tech: item,
        name: name,
      });
    }
  } else {
    result = 'Vazio!';
  }
  return result;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

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
