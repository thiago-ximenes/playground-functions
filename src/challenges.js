// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let splitPhrase = phrase.split(' ');
  return splitPhrase;
}

// Desafio 4
function concatName(stringArray) {
  return stringArray[stringArray.length - 1] + ', ' + stringArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;

  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(array) {
  let bigger = 0
  for (let item of array) {
    for (let item2 of array) {
      if (item2 > item) {
        bigger = item2;
      }
    }
  }
  console.log(bigger)

  let result = 0;
  for (let item of array) {
    if (bigger === item) {
      result += 1;
    }
  }
  return result
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
