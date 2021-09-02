// Desafio 1
function compareTrue(value1, value2) {
  let result = false;
  if (value1 === true && value2 === true) {
    result = true;
  }
  return result;
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
  let array = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return array;
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
  let result = '';
  let posCat1ToMouse = Math.abs(cat1 - mouse);
  let posCat2ToMouse = Math.abs(cat2 - mouse);
  if (posCat2ToMouse < posCat1ToMouse) {
    result = 'cat2';
  } else if (posCat2ToMouse > posCat1ToMouse) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let stringResult = [];
  for (let item of array) {
    if (item % 3 === 0 && item % 5 === 0) {
      stringResult.push('fizzBuzz');
    } else if (item % 3 === 0) {
      stringResult.push('fizz');
    } else if (item % 5 === 0) {
      stringResult.push('buzz');
    } else {
      stringResult.push('bug!');
    }
  }
  return stringResult;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(code) {
  let result = code.replace(/e/g, '2');
  result = result.replace(/a/g, '1');
  result = result.replace(/i/g, '3');
  result = result.replace(/o/g, '4');
  result = result.replace(/u/g, '5');

  return result;
}
function decode(code) {
  let result = code.replace(/2/g, 'e');
  result = result.replace(/1/g, 'a');
  result = result.replace(/3/g, 'i');
  result = result.replace(/4/g, 'o');
  result = result.replace(/5/g, 'u');

  return result;
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
