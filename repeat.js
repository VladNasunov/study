const binaryArr = [1,2,3,4,5,6,7,8,9,10];

const binarySearch = (arr, target)=>{
    let start = 0;
    let end = arr.length;

    while(start <= end){
        let middleIndex = Math.floor((start + end) / 2);
        if(arr[middleIndex] === target){
            return middleIndex;
        }

        if(arr[middleIndex] < target){
            start = middleIndex + 1;
        } else {
            end = middleIndex - 1;
        }
    }
    return -1;
}
// console.log(binarySearch(binaryArr, 11))

const findMaxLenOfBinaryTree = (root)=>{
    let depth = 0;
    const queue = [root];
    while(queue.length){
        for(let i = 0; i < queue.length; i++){
            const el = queue.shift();
            if(el.left) queue.push(el.left);
            if(el.right) queue.push(el.right);

        }
      depth++
    }

    return depth;
}

//[3,9,20,15,7]
//   3
//9    20
//   7   15


const findMaxLenOfBinaryTreeRecursion = (root)=> {
    if(!root) return 0;

    return 1 + Math.max(findMaxLenOfBinaryTreeRecursion(root.left), findMaxLenOfBinaryTreeRecursion(root.right))
}

const invertBinaryTree = (root) =>{
    if(!root) return null;

    const temp = root.left; 
    root.left = root.right;
    root.right = temp;

    invertBinaryTree(root.left);
    invertBinaryTree(root.right);

    return root;
}

const reverseLinkedList = (head) =>{
    let prev = null;
    const curr = head;

    while(curr){
        let next = curr.next;

        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

// O(n * log n) 100 = 100*10 = 1000
const fastSort = (arr)=>{

}

const twoPointersArr = [2,7,11,15]
const target = 9;

const twoPointers = (arr, target) =>{
    let first = 0;
    let last = arr.length;

    if(first + last === target) return [first, last];

    for(let i = 0; i < arr.length; i++){
        if(first + last === target) return [first, last];

        if(first + last > target){
            first += 1;
        } else {
            last -= 1;
        }
    }
}

const removeElementsFromLinkedList = (head, target)=>{
    const dummy = new List(-1, head);
    let current = dummy
    while(current.next){
        if(current.next === target){
            current.next = current.next.next;
        } else{
            current = current.next;
        }
    }
    returndummy.next
}
const flatterArr = [1, [2, [[3]]], 4, 5, 6, [7]]
const flatten = (arr)=>{
    const stack = [...arr];
    const res = [];

    while(stack.length){
        const el = stack.shift();
        if(Array.isArray(el)){
            stack.unshift(...el)
            continue;
        }

        res.push(el)
    }
    return res;
}

// console.log(flatten(flatterArr))

const fibbonaci = (n, memo)=>{
    memo = memo || {};
    if(memo[n]) return memo[n]
    if(n <=1) return n;

    return memo[n] = fibbonaci(n -1, memo) + fibbonaci(n - 2, memo)
}
fibbonaci(9)
function range(array) { 
    return array.sort(
      (a, b) => a - b
    ).reduce((acc, el, i) => {
      const prev = array[i - 1];
  
      if (prev !== undefined && el - prev === 1) {
        acc[acc.length - 1][1] = el;
      }
      else {
        acc.push([el]);
      }
  
      return acc;
    }, []).map(
      arr => arr.join("-")
    ).join(", ");
  }
  
  console.log(range([1, 4, 5, 2, 3, 9, 8, 11,12,14, 0])); // 0-5, 8-9, 11
  console.log(range([1, 4, 3, 2])); // 1-4
  console.log(range([1, 4])); // 1, 4
  console.log(range([1])); // 1
  console.log(range([])); // ""


const bubbleSort = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
                if(arr[j + 1] < arr[j]){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp
                }            
        }        
    }
}
//O(n^2)
//[3,1,5,9]