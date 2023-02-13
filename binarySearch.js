const {mergeSort} = require('./mergeSort.js')

const array = []
for (let i = 0; i < 20; i++) {
    array.push(Math.round(Math.random() * 20))
}
const sortedArray = mergeSort(Array.from(new Set(array)))
console.log(sortedArray)

function binarySearch(array, target) {
    let start = 0
    let end = array.length - 1
    let middle
    while (start <= end) {
        middle = Math.ceil((start + end) / 2)
        if (target === array[middle]) {
            return middle
        } else if (target < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return -1

}

console.log(binarySearch(sortedArray, 4))