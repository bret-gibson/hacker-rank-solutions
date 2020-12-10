
var MyQueue = function() {
    this.stack = [];

    push(val) {
        const newStack = [];

        while (this.stack.length > 0) {
            newStack.push(this.stack.pop());
        }
        newStack.push(x);
        while (newStack.length > 0) {
            this.stack.push(newStack.pop());
        }
    }

    pop() {
        return this.stack.length > 0 ? this.stack.pop() : undefined;
    };

    peek() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined;
    };

    empty () {
        return this.stack.length === 0;
    }
}