function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, i, arr.length)
    }
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
    return arr;
}

function heapify(arr, i, n) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, n)
    }
}


const arr = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArr = heapSort(arr);
console.log(sortedArr);