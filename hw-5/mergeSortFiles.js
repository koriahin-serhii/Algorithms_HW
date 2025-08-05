const fs = require('fs');
const path = require('path');

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeFiles(filePaths, outputPath) {
  let numbers = [];

  for (const file of filePaths) {
    const content = fs.readFileSync(file, 'utf-8');
    const nums = content.split(/\r?\n/).map(Number).filter(n => !isNaN(n));
    numbers = numbers.concat(nums);
  }

  const sorted = mergeSort(numbers);

  fs.writeFileSync(outputPath, sorted.join('\n'), 'utf-8');
  console.log(`Merged and sorted result written to ${outputPath}`);
}

// Пример вызова:
const inputFiles = ['file1.txt', 'file2.txt', 'file3.txt'];
mergeFiles(inputFiles, 'merged_output.txt');