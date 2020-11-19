class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value){
        var newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head){
            return undefined
        }

        let current = this.head
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--

        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        if(!this.head){
            return undefined
        }

        let currentHead = this.head
        this.head = currentHead.next
        this.length--

        if(this.length === 0){
            this.tail = null
        }

        return currentHead
    }

    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    get(index){
        if(index < 0 || index >= this.length){
            return null
        }

        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }

    //updating node already in list
    set(index, value){
        let nodeToSet = this.get(index)
        if(nodeToSet){
            nodeToSet.value = value
            return true
        }
        return false
    }

    // inserting a new value into the list at specific index
    insert(index, value){
        if(index < 0 || index > this.length){
            return false
        }
        if(index === this.length){
            this.push(value)
            return true

        }
        if(index === 0){
            this.unshift(value)
            return true
        }

        let newNode = new Node(value)
        let previous = this.get(index - 1)
        let temp = previous.next
        previous.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index){
        if(index = 0 || index >= this.length){
            return undefined
        }
        if(index === 0){
            return this.shift()
        }
        if(index === this.length - 1){
            return this.pop()
        }

        let prevousNode = this.get(index - 1)
        let removed = prevousNode.next
        prevousNode.next = removed.next
        this.length--
        return removed
    }


}