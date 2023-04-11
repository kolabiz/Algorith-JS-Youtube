function heapSort(array: number[]): number[] {
  // Преобразуем исходный массив в максимальную кучу
  buildMaxHeap(array);

  // Извлекаем максимальный элемент из кучи и перемещаем его в конец массива
  // Уменьшаем размер кучи на 1 и повторяем до тех пор, пока куча не будет пустой
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    // Перемещаем максимальный элемент в конец массива
    swap(array, 0, endIdx);
    // Уменьшаем размер кучи на 1, чтобы исключить из нее последний перемещенный элемент
    heapify(array, 0, endIdx);
  }

  // Возвращаем отсортированный массив
  return array;
}

function buildMaxHeap(array: number[]): void {
  // Находим индекс последнего родительского узла в куче
  const lastParentIdx = getParentIdx(array.length - 1);

  // Просеиваем каждый родительский узел в куче, начиная с последнего и до корня
  for (let i = lastParentIdx; i >= 0; i--) {
    heapify(array, i, array.length);
  }
}

function heapify(array: number[], idx: number, heapSize: number): void {
  // Находим индексы дочерних узлов текущего узла
  const leftChildIdx = getLeftChildIdx(idx);
  const rightChildIdx = getRightChildIdx(idx);

  // Инициализируем переменную для хранения индекса максимального элемента
  let maxIdx = idx;

  // Сравниваем текущий узел с его дочерними узлами
  // и находим индекс узла с максимальным значением
  if (leftChildIdx < heapSize && array[leftChildIdx] > array[maxIdx]) {
    maxIdx = leftChildIdx;
  }

  if (rightChildIdx < heapSize && array[rightChildIdx] > array[maxIdx]) {
    maxIdx = rightChildIdx;
  }

  // Если текущий узел не является узлом с максимальным значением,
  // то переставляем его со значением максимального узла и повторяем процесс просеивания
  if (maxIdx !== idx) {
    swap(array, idx, maxIdx);
    heapify(array, maxIdx, heapSize);
  }
}

function getParentIdx(idx: number): number {
  return Math.floor((idx - 1) / 2);
}

function getLeftChildIdx(idx: number): number {
  return idx * 2 + 1;
}

function getRightChildIdx(idx: number): number {
  return idx * 2 + 2;
}

function swap(array: number[], i: number, j: number): void {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp
}