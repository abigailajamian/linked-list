class Node {
    constructor(value,next = null){
        this.value = value;
        this.next = next;
    }
}

class linkedList {
    constructor (head = null) { //when nothing is entered input = null
        this.head = head // sets head when made 
        this.size = 0 //by default
    }

    append(value) {
        if (this.head == null){
            this.head = new Node(value);
        }else{
            let currentNode = this.head;
            while(currentNode.next != null){
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value);
            
        }
    }

    prepend(value){
        if (this.head == null){
            this.head = new Node(value);
        }else{
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode; 
        }
    }

    changeSize(){
        this.size = 0;
        let currentNode = this.head ;
        while (currentNode != null){
            currentNode = currentNode.next;
            this.size++;
        }
    }

    getHead(){
        if (this.head == null){
            return ("This list has no head node.");
        }else{
            return (this.head);
        }
    }

    getTail(){
        let currentNode = this.head
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        return (currentNode);
    }

    at(index){
        if (this.size - 1 < index){
            return('!BAD!')
        }
        let start = 0;
        let currentNode = this.head;
        while(index != start){
            currentNode = currentNode.next;
            start++;
        }
        return currentNode;
    }
    
    pop(){
        this.changeSize();
        if(this.size >= 2){
            let currentNode = this.at(this.size - 2);
            currentNode.next = null;
            this.size--;
        }else if(this.size = 1){
            this.head = null;
            this.size--;
        }

    }

    contains(value){
        let currentNode = this.head;
        while (currentNode.next != null){
            if(currentNode.value == value){
                return true;
            }else{
                currentNode = currentNode.next;
            }
        }
        if(currentNode.value == value){
            return true;
        }else{
            return false;
        }
    }

    find(value){
            let currentNode = this.head;
            while (currentNode.next != null){
                if(currentNode.value == value){
                    return currentNode;
                }else{
                    currentNode = currentNode.next;
                }
            }
            if(currentNode.value == value){
                return currentNode;
            }else{
                return null;
            }
    }
    
    toString(){
        let currentNode = this.head;
        console.log(currentNode.value, '->');
        while(currentNode.next != null){
            currentNode = currentNode.next;
            console.log(currentNode.value, '->');
        }
        console.log('null');
    }
}


// practice linked list 
let a = new Node (1);
let b = new Node (2);
let c = new Node (3); 


a.next = b;
b.next = c;

let list = new linkedList(a);

list.toString();
console.log(list.find(2));
