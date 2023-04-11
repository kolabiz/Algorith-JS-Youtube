class Node {
    constructor(value, leftLeaf = null, rightLeaf = null) {
        this.value = value
        this.leftLeaf = leftLeaf
        this.rightLeaf = rightLeaf
    }
}

class Heap {
    constructor(rootNode = null, lastNode = null) {
        this.rootNode = rootNode
        this.lastNode = lastNode

    }

    add(value) {
        if (this.rootNode === null) {
            this.lastNode = new Node( value)
            this.rootNode = this.lastNode
        } else {
            const oldLast = this.lastNode
        }
    }


}

const newHeap = new Heap()
newHeap.add(10)
console.log(newHeap)