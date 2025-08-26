class Stack {
  constructor() {
    this.items = []; // внутренний массив для хранения элементов
  }

  // Проверка пуст ли стек
  empty() {
    return this.items.length === 0;
  }

  // Добавление элемента на вершину стека
  push(element) {
    this.items.push(element);
  }

  // Удаление элемента с вершины стека
  pop() {
    if (this.empty()) {
      return null; // или можно выбросить ошибку
    }
    return this.items.pop();
  }

  // Просмотр верхнего элемента без удаления
  peek() {
    if (this.empty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Поиск элемента в стеке
  search(element) {
    // идём с вершины вниз
    for (let i = this.items.length - 1, pos = 1; i >= 0; i--, pos++) {
      if (this.items[i] === element) {
        return pos; // позиция относительно вершины (1 = верх)
      }
    }
    return -1; // если элемент не найден
  }
}

const stack = new Stack();

console.log(stack.empty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.search(20)); // 2 (20 на второй позиции от вершины)
console.log(stack.search(100)); // -1

console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.empty()); // false
