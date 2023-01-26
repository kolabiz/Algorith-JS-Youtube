let array = []
for (let i = 0; i < 20; i++) {
    array.push(Math.round(Math.random() * 20))
}
console.log(array)
// const array2 = array
const array2 = array.slice()
array2[0] = 5005
console.log(array)
console.log(array2)