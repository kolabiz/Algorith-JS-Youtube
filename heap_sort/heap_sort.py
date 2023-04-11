def heap_sort(array):
    # Преобразуем исходный массив в максимальную кучу
    build_max_heap(array)

    # Извлекаем максимальный элемент из кучи и перемещаем его в конец массива
    # Уменьшаем размер кучи на 1 и повторяем до тех пор, пока куча не будет пустой
    for end_idx in range(len(array) - 1, 0, -1):
        # Перемещаем максимальный элемент в конец массива
        swap(array, 0, end_idx)
        # Уменьшаем размер кучи на 1, чтобы исключить из нее последний перемещенный элемент
        heapify(array, 0, end_idx)

    # Возвращаем отсортированный массив
    return array


def build_max_heap(array):
    # Находим индекс последнего родительского узла в куче
    last_parent_idx = get_parent_idx(len(array) - 1)

    # Просеиваем каждый родительский узел в куче, начиная с последнего и до корня
    for i in range(last_parent_idx, -1, -1):
        heapify(array, i, len(array))


def heapify(array, idx, heap_size):
    # Находим индексы дочерних узлов текущего узла
    left_child_idx = get_left_child_idx(idx)
    right_child_idx = get_right_child_idx(idx)

    # Инициализируем переменную для хранения индекса максимального элемента
    max_idx = idx

    # Сравниваем текущий узел с его дочерними узлами
    # и находим индекс узла с максимальным значением
    if left_child_idx < heap_size and array[left_child_idx] > array[max_idx]:
        max_idx = left_child_idx

    if right_child_idx < heap_size and array[right_child_idx] > array[max_idx]:
        max_idx = right_child_idx

    # Если текущий узел не является узлом с максимальным значением,
    # то переставляем его со значением максимального узла и повторяем процесс просеивания
    if max_idx != idx:
        swap(array, idx, max_idx)
        heapify(array, max_idx, heap_size)


def get_parent_idx(idx):
    return (idx - 1) // 2


def get_left_child_idx(idx):
    return idx * 2 + 1


def get_right_child_idx(idx):
    return idx * 2 + 2


def swap(array, i, j):
    array[i], array[j] = array[j], array[i]
