#!/usr/bin/env node
function fibs(number) {
  if (number <= 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];
  
  let array = [0, 1];
  for (let current = 2; current < number; current++) {
    array.push(array[current - 1] + array[current - 2])  
  }
  return array;

}

function fibsRec(number) {

  if (number <= 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];

  let fibs = fibsRec(number - 1); 
  let nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2]; 
  return fibs.concat(nextFib);
}

console.log(`Itteration fibonacci function result : [${fibs(8)}]`)
console.log(`Recursion fibonacci function result : [${fibsRec(8)}]`)
