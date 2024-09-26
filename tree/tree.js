class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeList {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while(true){
            if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if(!currentNode.right){
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }
    search(value){
        let rootNode = this.root;
        while(rootNode){
            if(rootNode.value < value){
                rootNode = this.right;
            }
            else if(rootNode.value > value){
                rootNode = this.left;
            }
            else{
                return rootNode;
            }
        }
        return null;
    }
}