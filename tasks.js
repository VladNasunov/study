const obj = { a: 1 };

function foo(obj) {
  obj.a = 2;
}

function bar(obj) {
  obj = { a: 3 };
  return obj
}

foo(obj); // obj = 2

// console.log(bar(obj)); // a 3

// console.log("3", obj);

// //Задачка сгрупировать данные в разные массивы
// // {
// //    first: [{ group: 'first', name: 'Mary' }, { group: 'first', name: 'Vasya' }],
// //    second: [{ group: 'second', name: 'Sasha' }],
// //    third: [{ group: 'second', name: 'Sasha' }]
// // }
const people = [
  { group: "first", name: "Mary" },
  { group: "second", name: "Sasha" },
  { group: "first", name: "Vasya" },
  { group: "third", name: "Vasya" },
];


const groupData = (arr) =>
  arr.reduce((acc, el) => {
    acc[el.group] ? acc[el.group].push(el) : (acc[el.group] = [el]);
    return acc;
  }, {});

// console.log(groupData(people));

// написать функциию, котороая принимает масив строк
// возвращает массив длин этих строк
// const arr = ["first", "second", "third"];
const countStringLength = (arr) =>
  arr.reduce((acc, str) => {
    acc.push(str.length);
    return acc;
  }, []);
// console.log(countStringLength(arr));

//Что выведет консоль
// var a = 3;
// function foo() {
//   this.a = 0;
// }
// var obj = {
//   a: 3,
//   foo: foo
// }
// var bar = obj.foo;
// bar();
// console.log(a, obj.a)

// const string = "hello world dsdfdaf";

function reverse(str) {
  // return str.split(" ").reduce((acc, i) => {
  //   acc.unshift(i);
  //   return acc;
  // }, []).join(' ')
  // const rev = str.split(' ')
  // let res = []
  // for (let i = rev.length - 1; i >= 0; i--){
  //     res.push(rev[i])
  // }
  // return res.join(' ')
}
console.log(reverse(string));

// function getAverage(marks){
//     //TODO : calculate the downwar rounded average of the marks array
//     const numberOfItems = marks.length;
//     let plus = 0;
//     let res;
//     for(let i = 0; i < marks.length; i++){
//       plus += marks[i]
//       res = plus / numberOfItems
//     }
//     return Math.round(res)
// }

// const getAverage = (arr) =>
//   Math.floor(arr.reduce((acc, el) => acc + el / arr.length));

// console.log(getAverage([1, 2, 3, 4, 5]));
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));

// const removeChar = (str) => str.slice(1, str.length - 1);
// console.log(removeChar("slice"));

// function highAndLow(numbers){
//   const arr = numbers.split(' ')
//   let newArr = []
//   for(let i = 0; i < arr.length; i++){
//     newArr.push(Number(arr[i]))
//   }
//   const res1 = newArr.reduce((acc, el)=> acc < el? acc : el)
//   const res2 = newArr.reduce((acc, el)=> acc < el? el : acc)
//   let res = String(res1) + ' ' + String(res2)
//   return res

//   // numbers = numbers.split(' ').map(Number);
//   // return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }
// console.log(highAndLow("1 2 3 4 5"))

// class Song {
//   constructor(title, artist){
//     this.title = title;
//     this.artist = artist;
//   }
//   howMany(array){
//     const arr = Array.from(array)
//     return array.length
//   }
// }

// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'

// console.log(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']))
// console.log(mountMoose.title)
// console.log(mountMoose.artist)

// class Song{
//   constructor(title, artist){
//     this.title = title;
//     this.artist = artist;
//     this.listener = new Set()
//   };
//   howMany(people){
//     let oldSize = this.listener.size;
//     people.map(p => this.listener.add(p.toLowerCase()));
//     return this.listener.size - oldSize;
//   }
// }

// function DNAStrand(dna) {
//   //your code here
//   const dnaString = dna.split("");
//   console.log(dnaString);
//   let res = "";
//   const result = dnaString.map((i, index) => {
//     if (i === "A") {
//       res = "T";
//     } else if (i === "T") {
//       res = "A";
//     } else if (i === "C") {
//       res = "G";
//     } else {
//       res = "C";
//     }
//     return res;
//   });
//   return result.join("");
// }
// // var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// // function DNAStrand(dna){
// //   return dna.split('').map(function(v){ return pairs[v] }).join('');
// // }
// // console.log(DNAStrand("TATGC"));

// const lastSurvivor = (letters, coords) => {
//   let res = letters;
//   for (let i = 0; i < coords.length; i++) {
//     res = letters.slice(coords[i], letters.length - 1);
//   }
//   return res;
// };

// console.log(lastSurvivor("kbc", [0, 1]));
// console.log(lastSurvivor("zbk", [2, 1]));

// function doSomething() {
//   let myVar = 1;

//   if (true) {
//     console.log(myVar);

//     let myVar = 2;

//     console.log(myVar);
//   }
// }
// //Потому что ищет сначала в данном блоке переменную и он ее находит, тк let всплывает, но она в TDZ
// doSomething();

//decorator структурный который позволяет добавлять новый функционал при помощи оберток не изменяя исходный класс

//liskov subtitution
//Что элементы в программе должны быть заменены на экзмепляры их подтипов без нарушения правильности работы программы
// Подтипы должны дополнять базовые типы. Если это разъяснить, то получится, что подклассы должны переопределять методы базового класса так, чтобы не нарушалась функциональность с точки зрения клиента.

// class Rectangle {
//   constructor(width, height) {}
//   setWidth(width) {
//     this.width = width;
//   }
//   setHeight(height) {
//     this.height = height;
//   }
//   areaOf() {
//     return this.height * this.width;
//   }
// }
// class Square extends Rectangle {
//   width = 0;
//   height = 0;
//   constructor(size) {
//     super(size, size);
//   }
//   setWidth(width) {
//     this.width = width;
//     this.height = width;
//   }
//   setHeight(height) {
//     this.height = height;
//     this.width = height;
//   }
// }

// const sqare = new Square(15);
// sqare.setHeight(20);
// console.log(sqare)
//Но если использовать rectangle в качетве интерфейса, то будут проблемы.

//Высокоуровневые классы не должны зависеть от низкоуровневых реализаций
// Оба должны зависеть от абстракций

// Factory порождающий паттерн который позволяет создовать множество однотипных объектов но с разными данными

class BMW {}
class Tesla {}
class Lada {}

class Factory {
  createCar(type) {
    switch (type) {
      case "Tesla":
        return new Tesla();
      case "Lada":
        return new Lada();
    }
  }
}
const factory = new Factory();
let tesla = factory.createCar("Tesla");
let lada = factory.createCar("Lada");

// console.log(tesla, lada)

// function getRanges(arr) {
//   return arr.map((v, k) => {
//     if (v - 1 === arr[k - 1]) {
//       if (arr[k + 1] === v + 1) {
//         return ''
//       } else {
//         return `-${v},`
//       }
//     } else {
//       return v + ','
//     }
//   }).join('').split(',-').join('-')
// }

//рЕшение в духе яндекса
// const getRanges = arr => arr
//   .reduceRight((r, e) => r.length ? (r[0][0] === e + 1 ? r[0].unshift(e) : r.unshift([e])) && r : [[e]], [])
//   .map(a => a.join('-')).join(',')

// const list = ['a','e','i','o','u']
// const shortcut = (string) => string.replace(/[aeiou]1/g, '')
// console.log(shortcut('hello'))
// console.log(shortcut('hello'))
// console.log(shortcut('hello'))

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map((ch) => ch.charCodeAt(0) - 64);
  //  const obj = alphabet.reduce((acc, item, index)=> {
  //    acc[item] = index + 1
  //    return acc
  //   },{})
  //   // return text.toLowerCase().split('')
  //   return text.toLowerCase().split('').reduce((acc, el)=>{
  //     acc.push(obj[el])
  //     return acc
  //   }, []).join(' ').replace(/\s\s+/g, ' ').replace(/^/g, ' ')
}
// console.log(alphabetPosition("The sunset sets at twelve o clock"));

// Дана строка (возможно, пустая), состоящая из букв A-Z: AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// Нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28
// И сгенерирует ошибку, если на вход пришла невалидная строка.
// Пояснения: Если символ встречается 1 раз, он остается без изменений; Если символ повторяется более 1 раза, к нему добавляется количество повторений.
function countLetters(str) {
  const a = str.split("").reduce((acc, el) => {
    acc[el] ? (acc[el] += 1) : (acc[el] = 1);
    return acc;
  }, {});
  return Object.entries(a).join(" ").replace(/,/g, "");
  //еще вариант
  // let string = '';
  // for(let [key, value] of Object.entries(a)){
  //   string += `${key}${value} `
  // }
  // return string
}
// let string = ''
// for(let key in a){
//   string += `${key}${a[key]} `
// }
// console.log(countLetters('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'))

// Дан список интов, повторяющихся элементов в списке нет. Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны. Примеры:
// [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
// [1,4,3,2] => "1-4"
// [1,4] => "1,4"

// function bar(arr){
//   const a = arr.sort((a,b)=> a - b);
//   if(a.length < 2){
//     return [Math.min(...a), Math.max(...a)].join('')
//   }
//   if(a.length < 5){
//     return [Math.min(...a), Math.max(...a)].join('-')
//   }
//   const b = Math.floor((a.length / 3));
//   return b
//   return [Math.min(...a), Math.max(...a)].join('-')
// }
// console.log(bar([1,4,5,2,3,9,8,11,0]))
// console.log(bar([1,4,3,2]))
// console.log(bar([1,4]))

//Найти пересечение множеств
const count = (arr1, arr2) => {
  let arr = [];
  let obj = {};
  for (let value of arr1) {
    obj[value] = 1;
  }
  for (let value of arr2) {
    if (obj[value]) {
      arr.push(value);
    }
  }
  return arr;
};
// console.log(count([1, 2, 3, 2, 0,10],[5, 1, 2, 7,1,10,3, 2]))

function stringMerge(s1, s2, letter) {
  return [
    ...s1.split("").splice(0, s1.indexOf(letter)),
    ...s2.split("").splice(s2.indexOf(letter), s2.length - 1),
  ].join("");
}
// console.log(stringMerge("person", "here", "e"));

function text(text) {
  return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}
// console.log(text("ABC"));

// write the function isAnagram
var isAnagram = function (test, original) {
  return test.toLowerCase().split("").sort();
};
// console.log(isAnagram("Buckethead", "DeathCubeK"));



function fastSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let less = [];
  let greater = [];
  let pivotIndex = Math.round(arr.length / 2);
  let pivot = arr[pivotIndex];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < arr[pivotIndex]) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  const lessArr = fastSort(less);
  const greaterArr = fastSort(greater)

  return [...lessArr, pivot, ...greaterArr];
}
const result = fastSort([1, 3, 5, 200, 10, 4, 100]);
console.log(result[result.length - 1]);
// O(n×log2n).

// Sample Input ["eat", "tea", "tan", "ate", "nat", "bat"]
// Sample Output [ ["ate", "eat", "tea"], ["nat", "tan"], ["bat"] ]

function collectByLetters(arr) {
  let ar = [];
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < arr.length; i++) {
    obj[[...arr[i]].sort().join("")] = 1;
  }

  for (let value of arr) {
    if (obj[[...value].sort().join("")]) {
      obj2[[...value].sort().join("")] = [value];
    }
  }
  return obj2;
}
console.log(collectByLetters(["eat", "tea", "tan", "ate", "nat", "bat"]));

const list = [
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 3],
];

const arrList = [1, 2, 100, 3, 4, 200, 5];

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(findMax(arrList));

//СТандартное решение
var isValid = function(s) {
  let stack = []

  let obj = {')':'(', '}':'{', ']':'['}

  for(let i = 0; i < s.length; i++){
     if(obj[s[i]]){
        if(stack.length && stack[stack.length -1] === obj[s[i]]){
          stack.pop();
        } else{
          return false;
        }
     } else{
      stack.push(s[i])
     }
  }

  return stack.length === 0;
}; 
function isValid(s) {
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // в качестве стека в JavaScript можно использовать обычный массив
  //(если пользоваться только «разрешенными» методами push & pop)
  const st = [];
  for (let i = 0; i < s.length; i++) {
    if (isClosedBracket(s[i])) {
      if (brackets[s[i]] !== st.pop()) return false;
      // это открывающая скобка, т.к. других символов по условию в строке нет
    } else {
      st.push(s[i]);
    }
  }
  return st.length === 0;
}
function isClosedBracket(ch) {
  return [")", "]", "}"].indexOf(ch) > -1;
}
console.log(isValid("()[]{}"));
console.log(isValid("{[]")); //false
console.log(isValid("(f[o]{o})")); //true


// var test = function(str) {
//   var chars = str.split(''),
//       stack = [],
//       open = ['{', '(', '['],
//       close = ['}', ')', ']'],
//       closeIndex,
//       openIndex;

//   // Проходимся по строке, проверяя каждый ее символ (п.4).
//   for (var i = 0, len = chars.length; i < len; i++) {
//      openIndex = open.indexOf(chars[i]);
//      if (openIndex !== -1) {
//          // Нашли открывающую скобку. Помещаем ее в стек (п.2).
//          stack.push(openIndex);
//          continue;
//      }

//      closeIndex = close.indexOf(chars[i]);
//      if (closeIndex !== -1) {
//          // Нашли закрывающую скобку. Проверяем ее соответствие открывающей (п.3).
//          openIndex = stack.pop();
//          if (closeIndex !== openIndex) {
//              return false;
//          }
//      }
//   }

//   // Проверяем дисбаланс открытых/закрытых скобок (п.5).
//   if (stack.length !== 0) {
//       return false;
//   }

//   return true;
// }
