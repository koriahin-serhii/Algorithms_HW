function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}


console.log(mergeSort([])); // []
console.log(mergeSort([5])); // [5]
console.log(mergeSort([2, 2, 2])); // [2, 2, 2]
console.log(mergeSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(mergeSort([6, 1, 3, 8, 2])); // [1, 2, 3, 6, 8]
