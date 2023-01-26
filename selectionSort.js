const array = []
for (let i = 0; i < 20; i++) {
    array.push(Math.round(Math.random() * 20))
}
console.log(array)

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] < array[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            let buffer = array[minIndex]
            array[minIndex] = array[i]
            array[i] = buffer
        }
    }
    return array
}


console.log(selectionSort(array))