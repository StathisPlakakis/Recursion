#!/usr/bin/env node
function mergeSort(array) {
  function merge(array, s, f) {
    if (s === f) return [array[s]];
    else {
      const midle = Math.floor((s + f) / 2);
      const left = merge(array, s, midle);
      const right = merge(array, midle + 1, f);
      let finalArray = [];
      let i = 0;
      let j = 0;
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          finalArray.push(left[i])
          ++i
        } else {
          finalArray.push(right[j])
          ++j
        }
      }
      if (i === left.length) {
        const remainingArray = right.slice(j);
        finalArray.push(...remainingArray)
      } else {
        const remainingArray = left.slice(i);
        finalArray.push(...remainingArray)
      }
      return finalArray;
    }
  }

  return merge(array, 0, array.length - 1)
}

const array = [5, 3, 12, 4, 7, 1, 0, -10];
console.log(mergeSort(array))