class Node {
    constructor(value, next = undefined) {
        this.value = value
        this.next = undefined
    }
}

class Queue {
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
            this.tail = new Node(value)
            tail.next = this.tail
        }
        this.#length++
    }

    pop() {
        console.log(this.#length, 'length')
        if (this.#length === 0) throw Error('Queue is empty.')
        const value = this.head.value
        this.head = this.head.next
        this.#length--
        return value
    }
}

const queue = new Queue()
queue.push(5)
queue.push(3)
console.log(queue)
console.log(queue.pop())
console.log(queue.pop())
