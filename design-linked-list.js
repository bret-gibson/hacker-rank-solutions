
class Node{
    constructor(value) {
        this.val = val;
        this.next = null;
    }
};

class MyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get(index) {
        if (this.size === 0 || index > this.size - 1 || index < 0) return -1;
        let cur = this.head;
        
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.val;
    };

    addAtHead(val) {
        const newNode = new Node(val);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    };

    addAtTail(val) {
        const newNode = new Node(val);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    };

    addAtIndex(index, val) {
        const newNode = new Node(val);
        if (index > this.size) return;
        if (index <= 0) {
        return this.addAtHead(val);
        }
        if (index === this.size) {
        return this.addAtTail(val);
        }
    
        let cur = this.head;  
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        newNode.next = cur.next ? cur.next : null;
        cur.next = newNode;
        this.size++;
        return this;
    };

    deleteAtIndex(index) {
        if (index >= this.size || index < 0) return;  
        if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return this;
        }
    
        let cur = this.head;  
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        
        cur.next = cur.next.next ? cur.next.next : null;
        if(!cur.next) {
        this.tail = cur;
        }
        this.size--;
        return this;
    }
};

/*
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */