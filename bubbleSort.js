array = []
for (let i = 0; i < 100000; i++) {
    array.push(Math.round(Math.random() * 1000))
}

console.log(array)

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = array.length - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                let buffer = array[j]
                array[j] = array[j - 1]
                array[j - 1] = buffer
            }
        }
    }
    return array
}

console.log(bubbleSort(array))