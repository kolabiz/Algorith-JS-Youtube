class Node {
    constructor(value, index = 0, prev = undefined, next = undefined) {
        this.value = value
        this.index = index
        this.prev = prev
        this.next = next
    }
}

class List {
    #length = 0

    constructor() {
        this.head = undefined
        this.tail = undefined
    }

    get length() {
        return this.#length
    }

    push(value) {
        if (this.head == undefined) {
            this.head = new Node(value)
            this.tail = this.head
        } else {
            const tail = this.tail
            this.tail = new Node(value, tail.index + 1, tail)
            tail.next = this.tail
        }
        this.#length++
    }

    pop() {
        const value = this.tail.value
        this.tail = this.tail.prev
        this.tail.next = undefined
        this.#length--
        return value
    }

    unshift() {
    }

    shift() {
    }
}

const list = new List()
list.push(5)
list.push(6)
// list.push(5)
console.log(list.length)
console.log(list)
console.log(list.pop())
console.log(list)