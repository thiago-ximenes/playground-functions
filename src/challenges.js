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
  let result = 0;
  let bigger = array[0];
  for (let item of array) {
    if (item > bigger) {
      result = 1;
      bigger = item;
    } else if (item === bigger) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posCat1ToMouse = Math.abs(cat1 - mouse);
  let posCat2ToMouse = Math.abs(cat2 - mouse);
  if (posCat2ToMouse < posCat1ToMouse) {
    return 'cat2'
  } else if (posCat2ToMouse > posCat1ToMouse) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}


// Desafio 8
function fizzBuzz(array) {
  // /3 fizz - /5 buzz - /3/5 fizzbuzz - bug
  let stringResult = [];
  for (let item of array) {
    if (item % 3 === 0 && item % 5 === 0) {
      stringResult.push('fizzBuzz')
    } else if (item % 3 === 0) {
      stringResult.push('fizz')
    } else if (item % 5 === 0) {
      stringResult.push('buzz')
    } else {
      stringResult.push('bug!')
    }
  }
  return stringResult
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
