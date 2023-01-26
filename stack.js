class Node {
    constructor(value) {
        this.value = value
        this.prev = undefined
    }
}

class Stack {

    constructor() {
        this.top = undefined
        this.count = 0
    }

    push(value) {
        this.count++
        const prev = this.top
        this.top = new Node(value)
        this.top.prev = prev
    }

    pop() {
        if (this.count === 0) throw Error('stack empty')
        this.count--
        let value = this.top.value
        this.top = this.top.prev

    }

    print() {
        if (!this.count) throw Error('stack empty')
        let node = this.top
        do {
            console.log(node.value)
            node = node.prev
        } while (node)
    }
}

const stack = new Stack()
console.log(stack)
stack.push(5)
console.log(stack)
stack.push(7)
console.log(stack)
stack.push(9)
console.log(stack)
stack.print()

// stack.pop()
// console.log(stack)
// stack.pop()
// console.log(stack)
// stack.pop()
// console.log(stack)
// stack.pop()
// console.log(stack)

