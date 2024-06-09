#!/usr/bin/env node


function fibs (number) {
  if (number <= 0) return []
  else if (number === 1) return [0];
  else {
    let array = [0, 1];
    let i = 0;
    let j = 1;
    for (let currentNumber = 2; currentNumber < number; currentNumber++) {
      array.push (array[i] + array[j])
      ++i
      ++j
    }
    return array;
  }
}
console.log(`Itteration fibonacci function result : [${fibs(10)}]`)