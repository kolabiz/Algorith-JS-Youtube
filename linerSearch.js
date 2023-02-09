const array = [1, 10, 12, 13, 14, 15, 17, 19, 3, 5, 6, 9]


function linerSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linerSearch(array, 14))