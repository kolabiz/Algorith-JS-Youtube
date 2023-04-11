function heapSort(arr) {
  // Создаем max heap
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  // Один за другим извлекаем элементы из кучи
  for (let i = arr.length - 1; i > 0; i--) {
    // Перемещаем текущий корень в конец массива
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Вызываем heapify для уменьшения размера кучи
    heapify(arr, 0, i);
  }

  return arr;
}

function heapify(arr, i, n) {
  let largest = i; // Инициализируем наибольший элемент как корень
  let left = 2 * i + 1; // Левый потомок узла
  let right = 2 * i + 2; // Правый потомок узла

  // Если левый потомок больше родителя
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Если правый потомок больше наибольшего элемента
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // Если наибольший элемент не является корнем
  if (largest !== i) {
    // Обменять arr[i] и arr[largest]
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Рекурсивно heapify поддерево
    heapify(arr, largest, n);
  }
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArr = heapSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]
