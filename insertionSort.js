let array = []
for (let i = 0; i < 20; i++) {
    array.push(Math.round(Math.random() * 20))
}
console.log(array)

function insertionSort(outer_array, reverse = false) {
    let array = outer_array.slice()
    for (let i = 0; i < array.length - 1; i++) {
        let j = i + 1
        while (j !== 0 && (!reverse ? array[j] < array[j - 1] : array[j] > array[j - 1])) {
            let buffer = array[j]
            array[j] = array[j - 1]
            array[j - 1] = buffer
            j--
        }
    }
    return array
}


console.log(insertionSort(array, true))