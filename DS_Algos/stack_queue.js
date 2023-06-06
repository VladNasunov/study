// const arr1 = [1, [2, [[3]]], 4, 5, [6, [7]]]

// const flatten = (...stack)=>{
//     const res = [];

//     while(stack.length){

//         const el = stack.shift();
//         if(Array.isArray(el)){
//             stack.unshift(...el);
//             continue;
//         }

//         res.push(el);
//     }
//     return res;
// }
// console.log(flatten([[1], [2], [3]]))



const string = '+ 3 5';
const string1 = '* + 2 2 3';
const string3 = '/ + 3 5 * 2 2';


const polishNotation = (string) => {
    const arr = string.split(' ')

    const stack = [];

    while (arr.length) {
        const el = arr.pop();
        const numEl = Number(el);

        if (numEl) {
            stack.push(numEl);
            console.lo(stack)
            continue;
        }

        const firstNum = stack.pop();
        const secondNum = stack.pop();

        switch (el) {
            case '+':
                stack.push(firstNum + secondNum)
                break;
            case '-':
                stack.push(firstNum - secondNum)
                break;
            case '/':
                stack.push(firstNum / secondNum)
                break;
            case '*':
                stack.push(firstNum * secondNum)
                break;
        }
    }
    return stack[0]
}

// console.log(polishNotation(string3))

// function isValid(s) {
//     const brackets = {
//       ")": "(",
//       "]": "[",
//       "}": "{",
//     };
//     // в качестве стека в JavaScript можно использовать обычный массив
//     //(если пользоваться только «разрешенными» методами push & pop)
//     const st = [];
//     for (let i = 0; i < s.length; i++) {
//       if (brackets[s[i]]) {
//         if (brackets[s[i]] !== st.pop()) return false;
//         // это открывающая скобка, т.к. других символов по условию в строке нет
//       } else {
//         st.push(s[i]);
//       }
//     }
//     return st.length === 0;
//   }


const isValid = (str) => {
    const chars = str.split('');
    const stack = [];

    const open = ['{', '(', '['];
    const close = ['}', ')', ']'];
    
    let closeIndex;
    let openIndex;

    // Проходимся по строке, проверяя каждый ее символ (п.4).
    for (var i = 0, len = chars.length; i < len; i++) {
        openIndex = open.includes(chars[i]);
        if (openIndex) {
            // Нашли открывающую скобку. Помещаем ее в стек (п.2).
            stack.push(openIndex);
            continue;
        }

        closeIndex = close.includes(chars[i]);
        if (closeIndex) {
            // Нашли закрывающую скобку. Проверяем ее соответствие открывающей (п.3).
            openIndex = stack[stack.length -1];
            if (closeIndex == openIndex) {
                stack.pop()
            } else{
                return false;
            }
        }
    }

    return stack.length == 0;
}
// console.log(isValid("()[]{}"));//true
// console.log(isValid("{[]")); //false
// console.log(isValid("(f[o]{o})")); //true




// const countLetters = (str)=>{
//     const res =  str.split('').reduce((acc, el)=> {
//         acc[el] ? acc[el] += 1: acc[el] = 1
//         return acc;
//     }, {})

//     return Object.entries(res).reduce((acc, [f, s])=>{
//         acc += `${f}${s}`
//         return acc;
//     }, '')
// }
// console.log(countLetters('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'))


function bar(arr){
  const a = arr.sort((a,b)=> a - b);
  if(a.length < 2){
    return [Math.min(...a), Math.max(...a)].join('')
  }
  if(a.length < 5){
    return [Math.min(...a), Math.max(...a)].join('-')
  }
  const b = Math.floor((a.length / 3));
  return [Math.min(...a), Math.max(...a)].join('-')
}
console.log(bar([1,4,5,2,3,9,8,11,0]))
console.log(bar([1,4,3,2]))
console.log(bar([1,4]))