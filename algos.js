class NodeItem {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.size = 0;
        this.root = null;
    }

    add(value){
        if(this.size === 0){
            this.root = new NodeItem(value)
            this.size += 1;
        }
        let node = this.root;
        while(node.next){
            node = node.next
        }
        let newNode = new NodeItem(value)
        node.next = newNode
        this.size +=1
        // while(node.next)
    }
}

const list = new LinkedList()
list.add('hello')
list.add('world')
list.add(3)


console.log(JSON.stringify(list))

