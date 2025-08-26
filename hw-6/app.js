// Task 1

function quickSortRecursive(arr) {
  if (arr.length <= 1) {
    return arr; // массив из одного элемента уже отсортирован
  }

  // выбираем опорный элемент (середину массива)
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const less = [];
  const greater = [];

  // делим элементы на меньше/больше опорного
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue; // пропускаем сам pivot
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  // рекурсивно сортируем и объединяем результат
  return [...quickSortRecursive(less), pivot, ...quickSortRecursive(greater)];
}

// Пример использования
console.log(quickSortRecursive([5, 3, 8, 4, 2, 7, 1, 6]));

// Task 2

function quickSortIterative(arr) {
  // создаем копию, чтобы не портить исходный массив
  const stack = [[0, arr.length - 1]];

  while (stack.length > 0) {
    const [left, right] = stack.pop();

    if (left >= right) continue;

    // выбираем pivot (середина)
    const pivotIndex = Math.floor((left + right) / 2);
    const pivot = arr[pivotIndex];

    let i = left;
    let j = right;

    while (i <= j) {
      while (arr[i] < pivot) i++;
      while (arr[j] > pivot) j--;

      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }

    // добавляем подмассивы в стек
    if (left < j) stack.push([left, j]);
    if (i < right) stack.push([i, right]);
  }

  return arr;
}

// Пример использования
console.log(quickSortIterative([5, 3, 8, 4, 2, 7, 1, 6]));
