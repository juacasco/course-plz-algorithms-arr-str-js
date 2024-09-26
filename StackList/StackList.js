class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(item){
        const newNode = new Node(item);
        if(this.length === 0){
            this.top = newNode
            this.bottom = this.top;
            this.length++;
            return this;
        }
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
        this.length++;
        return this;
    }
    peek(){
        return this.top;
    }
    pop(){
        if(this.length === 0){
            return null;
        }
        if(this.length === 1){
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }
}