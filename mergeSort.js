const array = []


for (let i = 0; i < 10; i++) {
    array.push(Math.round(Math.random() * 100))
}
console.log(array)

const mergeSort = function merge(array, reverse = false) {
    if (array.length <= 1) {
        return array
    }
    const left = merge(array.slice(0, array.length / 2), reverse)
    const right = merge(array.slice(array.length / 2, array.length), reverse)

    let i = 0
    let j = 0
    const sorted_array = []

    while (i < left.length && j < right.length) {
        if (left[i] === right[j]) {
            sorted_array.push(left[i], right[j])
            i++
            j++
        } else if (!reverse ? left[i] < right[j] : left[i] > right[j]) {
            sorted_array.push(left[i])
            i++
        } else {
            sorted_array.push(right[j])
            j++
        }
    }

    if (i !== left.length) {
        return sorted_array.concat(left.slice(i, left.length))
    } else if (j !== right.length) {
        return sorted_array.concat(right.slice(j, right.length))
    }
    return sorted_array
}

console.log(mergeSort(array, false))