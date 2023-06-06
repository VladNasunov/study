//Первй это Root например 8, если след значение меньше то уходит вслево если больше то вправо и так до конца. У каждой ноды может быть только 2 ноды left, right

//Сложность O(log2n) вставка, удаление, поиск

const tree = {
    value: 8,
    left: {
        value: 4,
        left: null
    },
    right: {
        value: 9,
        left: null,
        right: {
            value: 10,
            left: null,
            right: null,
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    findMaxDepth(root = this.root) {
        if (!root) return 0;

        const leftSubTreeMaxValue = this.findMaxDepth(root.left);
        const rightSubTreeMaxValue = this.findMaxDepth(root.right)

        return 1 + Math.max(leftSubTreeMaxValue, rightSubTreeMaxValue);
    }

    preOrder(node, callback) {
        if (!node) {
            return;
        }
        if (callback) {
            callback(node)
        }

        this.preOrder(node.left, callback)
        this.preOrder(node.right, callback)
    }
    inOrder(node, callback) {
        if (!node) {
            return;
        }


        this.inOrder(node.left, callback)
        if (callback) {
            callback(node)
        }
        this.inOrder(node.right, callback)
    }

    postOrder(node, callback) {
        if (!node) {
            return;
        }


        this.postOrder(node.left, callback)
        this.postOrder(node.right, callback)
        if (callback) {
            callback(node)
        }
    }

    traverseDFS(callback, method) {
        if (method === 'preOrder') {
            return this.preOrder(this.root, callback)
        }
        if (method === 'inOrder') {
            return this.inOrder(this.root, callback)
        }
        return this.postOrder(this.root, callback)

    }

    invertTree(root = this.root) {
        if (!root) return null;

        let tmp = root.left;
        root.left = root.right;
        root.right = tmp;

        this.invertTree(root.left)
        this.invertTree(root.right)
        return root
    }

    traverseBFS() {
        const q = [this.root]
        let depth = 0;
        while (q.length) {
            console.log(q.length)

            const el = q.shift()
            if(el.left) q.push(el.left);
            if(el.right) q.push(el.right);
            
            // for(let i = 0; i < q.length; i++){
            //     const el = q.shift()
            //     if(el.left) q.push(el.left);
            //     if(el.right) q.push(el.right);
            // }
           
            depth++
        }
        return depth
    }

    add(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }

                currentNode = currentNode.left;
            }
            else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }

                currentNode = currentNode.right;
            }
        }
    }
}

const binary = new BinaryTree()
binary.add(8)
binary.add(7)
binary.add(9)
binary.add(5)
binary.add(10)
binary.add(20)
binary.add(6)
binary.add(2)
binary.add(11)


console.log(binary.traverseBFS())
// console.log(binary.findMaxDepth())
// binary.traverseDFS((node)=>{
//     console.log(node.value)
// },'preOrder')

// console.log(binary)

// Обход дерева 

// 1. Breadth First Search
// 2. Depth fist Search

//In order 1. Идем по левому под дереву 2. Действие с Нодой 3. Идем по правому под дереву. Спускаемся по левой ветке до глубины, когда спустились в самый низ, идем в ноду и исполняем callback.Затем проверяем правую ветку

// Pre order 1.Действие с Нодой 2. Идем по левому под дереву 3.Идем по правому под дереву

//Post Order 1. Идем по левому под дереву 2. Идем по правому под дереву 3. Действие с нодой




