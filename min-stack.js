class MinStack{
    constructor(){
        this.stack = []

    }

    push(x) {
        let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
        this.stack.push({val: x, min: Math.min(min, x)})
    }
    
    pop() {
        if(this.stack.length > 0){
            this.stack.pop()
        }
    };
    
    top() {
        if(this.stack.length > 0) {
            return this.stack[this.stack.length - 1].val
        }
    };
    
    getMin() {
        if(this.stack.length > 0) {
            return this.stack[this.stack.length - 1].min
        }
    }
};
