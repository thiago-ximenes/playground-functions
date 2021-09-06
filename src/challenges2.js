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
  if (number.length != 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    let repeat = 0;
    isPhoneNumber = true;
    result = '';
    for (let index = 0; index < number.length; index += 1) {
      repeat = 0;
      for (let index2 = 0; index2 < number.length; index2 += 1) {
        if (number[index2] === number[index]) {
          repeat += 1;
          if (repeat >= 3 || number[index] < 0 || number[index] > 9) {
            isPhoneNumber = false;
            break;
          }
        }
      }
    }
    if (isPhoneNumber) {
      number = number.join('');
      number = number.toString();
      result = number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      result = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return result;
}

// console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

// Desafio 12
function triangleCheck(sideA, sideB, sideC) {
  let a = false;
  let b = false;
  let c = false;
  if (sideA < sideB + sideC && sideA > Math.abs(sideB - sideC)) {
    a = true;
  }
  if (sideB < sideA + sideC && sideB > Math.abs(sideA - sideC)) {
    b = true;
  }
  if (sideC < sideB + sideA && sideA > Math.abs(sideB - sideA)) {
    c = true;
  }
  if (a && b && c) {
    return true;
  } else {
    return false;
  }
}

// console.log(triangleCheck(10, 13, 2));

// Desafio 13
function hydrate(drinks) {
  let waterCups = drinks.match(/\d+/g);
  // //https://www.codegrepper.com/code-examples/javascript/get+only+numbers+from+string+js -- usei para saber qual regex usar
  let result = `${waterCups} copos de água`;
  if (waterCups.length === 1) {
    result = `${waterCups} copo de água`;
  } else {
    let counter = 0;
    for (let item of waterCups) {
      let WaterCupsInInteger = parseInt(item, 10);
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt -- usei para entender como funciona a função parseInt
      counter += WaterCupsInInteger;
    }
    result = `${counter} copos de água`;
  }
  return result;
  // seu código aqui
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
