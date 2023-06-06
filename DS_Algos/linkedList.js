// class LinkedList {
//     constructor(){
//         this.root = null;
//         this.size = 0;
//     }

//     add(value){
//         if(this.size === 0){
//             this.root = new Node(value);
//             this.size += 1;
//             return;
//         }

//         let node = this.root;
//         while(node.next){
//             node = node.next;
//         }

//         let newNode = new Node(value);
//         node.next = newNode;
//         this.size += 1;
//         console.log(node)
//     }
// }

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
    
// }


// const list = new LinkedList();
// list.add(1)
// list.add(2)

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(value){
        const newNode = new Node(value, this.head);
        this.head = newNode;

        if(!this.tail){
            this.tail = newNode
        }

        return this;
    }

    append(value){
        const newNode = new Node(value);

        if(!this.head || !this.tail){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        //Возможно и хед и тейл ссылаются на один объект и когда мы меняем в тейл. он мутирует хед
        this.tail.next = newNode;
        this.tail = newNode;
    }

    find(value){
        let current = this.head;
        
        while(current){
            if(current.value === value){
                return current;
            }

            current = current.next;
        }

        return null;
    }
    insert(value, prevNode){

        const newNode = new Node(value);
        newNode.next = prevNode.next;

        prevNode.next = newNode;

        return this;
    }
}

const list = new LinkedList();

list.append(1);
list.append(23);
list.append('hello')
list.append('first')
const prevNode = list.find(23)
list.insert(5, prevNode)

// console.log(JSON.stringify(list))