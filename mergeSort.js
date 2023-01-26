const array = []


for (let i = 0; i < 10; i++) {
    array.push(Math.round(Math.random() * 100))
}

console.log(array)

const mergeSort = function merge(array, reverse = false) {

    if (array.length <= 1) {
        return array // Базовый случай
    }

    let left = array.slice(0, array.length / 2) // делим массив пополам
    let right = array.slice(array.length / 2, array.length)

    left = merge(left, reverse) // вызываем функцию для каждой половины
    right = merge(right, reverse)

    let i = 0; // создаем индексы и новый массив
    let j = 0;
    const sorted_array = []
        // запускаем цикл сравнения
    while (i < left.length && j < right.length) {
        if (!reverse ? left[i] < right[j] : left[i] > right[j]) {
            sorted_array.push(left[i]) // если левый элемент меньше добавляем
            i++                        // его в новый массив. увеличиваем индекс левого подмассива
                                        // а правый оставляем без изменений. и переходим на следующую
                                        // итерацию.
        } else if (left[i] === right[j]) {
            sorted_array.push(left[i], right[j]) // если элементы ровны, то оба добавляем в новый
            i++                                  // массив и увеличиваем оба индекса
            j++
        } else {
            sorted_array.push(right[j]) // когда правый элемент меньше, делаем всё тоже
            j++                         // что и слевым только наоборот. убираем правый элемент,
        }                               // увеличиваем его индекс. левый на месте. и на следущий круг
    }
    // проверка закончились ли элемены в подмассивах
    if (i === left.length && j === right.length) {
        return sorted_array // если да то просто возвращаем новый массив
    } else if (left.length !== i) {
        return sorted_array.concat(...left.slice(i)) // если левый не закочился, то добавляем  в конец его
                                                    // остаток и возвращаем. отсортированный массив
    } else if (right.length !== j) {
        return sorted_array.concat(...right.slice(j)) // если правый не закочился, то добавляем  в конец его
                                                     // остаток и возвращаем. отсортированный массив
    }

}

console.log(mergeSort(array, false))