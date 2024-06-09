#!/usr/bin/env node

function fibs(number) {
  if (number <= 0) return []
  else if (number === 1) return [0];
  else {
    let array = [0, 1];
    for (let currentNumber = 2; currentNumber < number; currentNumber++) {
      array.push(array[currentNumber - 2] + array[currentNumber - 1])
    }
    return array;
  }
}

function fibsRec(number) {

  if (number === 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];

  let fibs = fibsRec(number - 1); 
  let nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2]; 
  return fibs.concat(nextFib);
}

console.log(`Itteration fibonacci function result : [${fibs(8)}]`)
console.log(`Recursion fibonacci function result : [${fibsRec(8)}]`)
