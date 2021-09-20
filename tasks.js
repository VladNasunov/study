//Задачка на THIS
var fullname = "john";

var obj = {
  fullname: "Colin",
  prop: {
    fullname: "Rox",
    getFullName: function () {
      return this.fullname;
    },
    getFullNameArrow: () => this.fullname,
  },
};
// console.log(obj.prop.getFullName());
var test = function () {
  return this.fullname;
};
// console.log(test());

// console.log(test.call(obj.prop));
// console.log(test.apply(obj));
// console.log(test.bind(obj));
// console.log(obj.prop.getFullNameArrow());

//Так же задачка на this с setTimeout (что то про потерю контекста)

function car() {
  this.type = "truck";
  getCar: {
    console.log(this.type);
  }
}
setTimeout(() => car.getCar, 1000);

//Задачка сгрупировать данные в разные массивы
// {
//    first: [{ group: 'first', name: 'Mary' }, { group: 'first', name: 'Vasya' }],
//    second: [{ group: 'second', name: 'Sasha' }],
//    third: [{ group: 'second', name: 'Sasha' }]
// }
const people = [
  { group: "first", name: "Mary" },
  { group: "second", name: "Sasha" },
  { group: "first", name: "Vasya" },
  { group: "third", name: "Vasya" },
];

const group = (people) => {
  let obj = {};
  people.map((item) =>
    item.group === "first" ? (obj.first = item) : (obj.other = item)
  );
  return obj;
};
// console.log(group(people));

//Что то про вызов функции и оперецией присвоения????????
var double = 22;
function double(num) {
  return num * 2;
}
console.log(typeof double);
var double;

function double(num) {
  return num * 2;
}
console.log(typeof double);

// Function Creature(){
//     this.name = name;
//     }
//     Creature.prototype.breath = function(){
//     console.log(${this.name} is breathing now}
//     }
//     console.log(Creature.prototype === Creature._proto_)???
//     console.log(Creature._proto_ === Function.prototype)???

// var a = 5;
// setTimeout(function timeout() {
//     console.log('setTimeout', a);
//     a = 10;
// }, 0);
// var p = new Promise(function (resolve, reject) {
//     console.log('promise', a);
//     a = 25;
//     resolve();
// });
// p.then(function () {
//     console.log('then', a);
// });
// console.log(a);

// написать функциию, котороая принимает масив строк
// возвращает массив длин этих строк
// ['first', 'second', 'third']

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

//Задачка на eventLoop
// function check() {
//     console.log(1);
//     setTimeout(() => console.log(2, 1000));
//     setTimeout(() => console.log(3, 0));
//     Promise.resolve().then(() => console.log(4));
//     console.log(5);
//   }

//   check();
//   setTimeout(() => console.log(6, 50))
