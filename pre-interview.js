//Интро
//SCRUM, Спринт, артефакты(планинг, дейли, ретро, демо, груминг), estimation, отличие от Kanban
//Git flow, branches, conflict solving

//JS Core
//What is js, его особенности

// Алгоритмы и структуры данных (также структуры в js)

//Hoisting
//отличие let, const, var
//Область видимости var, let
//Задачка
// Обратите внимание, что var foo является дублем объявления (и поэтому игнорируется),
var double = 22;
function double(num) {
  return num * 2;
}
console.log(typeof double);

//он же разбивается как 
function double(){}
// var double игнорируется
//double = 22 пересвоение

var double;
function double(num) {
  return num * 2;
}
console.log(typeof double);
// тут же 
function double(){}
//var double игнорируется

//Задачка, переход к замыканию
for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
// При использовании в цикле, для каждой итерации создаётся своя переменная.
// Переменная var – одна на все итерации цикла и видна даже после цикла.
// С переменной let – всё по-другому.
// Каждому повторению цикла соответствует своя независимая переменная let. Если внутри цикла есть вложенные объявления функций, то в замыкании каждой будет та переменная, которая была при соответствующей итерации.

// for (var i = 0; i <= 5; i++) {
//   (function (item) {
//     setTimeout(() => {
//       console.log(item);
//     }, 100);
//   })(i);
// }
// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }

//Переход к замыканию

//Closures
//Что такое замыкания
//Напиши counter, объяснить как работает

//Context, This
//1 Что такое конекст исполнения и ключевое слово this
//2 На что this указывает
//Задача узнать чему равен this
var name = "Ivan";

var obj = {
  name: "Sergei",
  prop: {
    name: "Anna",
    getName: function () {
      return this.name;
    },
    getNameArrow: () => this.name,
    getNameIife: function () {
      return (function () {
        return this.name;
      })();
    },
  },
};

console.log(obj.prop.getName());
console.log(obj.prop.getNameArrow());
console.log(obj.prop.getNameIife());

var foo = function () {
  return this.name;
};
console.log(foo());
console.log(foo.call(obj.prop));
console.log(foo.apply(obj));
console.log(foo.bind(obj));

//Задача на потерю контекста
let user = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  },
};
setTimeout(user.sayHi, 1000);

// Это произошло потому, что setTimeout получил функцию sayHi отдельно от объекта user (именно здесь функция и потеряла контекст).
// Метод setTimeout в браузере имеет особенность: он устанавливает this=window
// таким образом, для this.firstName он пытается получить window.firstName, которого не существует.
// ..В других подобных случаях this обычно просто становится undefined.

//Prototype
// 1 Как реализуется наследование в js
// 2 в чем отличие
//[[prototype]]
//__proto__
// внутреннее свойство объекта, указывающее на его прототип
//prototype

// 2.1
const printHello = () => {
  return `<div>hello</div>`;
};
  console.log(printHello.__proto__ === ??)
  console.log(printHello.prototype === ??)

// 2.2
//   console.log('25'.__proto__ === ??)
//   console.log('25'.prototype === ??)
//'string'.toLowerCase()
"25".__proto__.__proto__;
"25".__proto__.__proto__.__proto__;

//тут же спрошу про boxing примитивов

// 2.3
const hi = function hello() {};
function goodbye() {}
console.log(hi.__proto__ === goodbye.__proto__);
console.log(hi.prototype === goodbye.prototype);

// 4 Наследование объектов несколько вариантов
// Object.create(), __proto__, Object.setPrototypeOf
const obj1 = { name: "he" };
const obj2 = { name: "head" };

Object.setPrototypeOf(obj2, obj1);
let abotherobj = Object.create(obj1, {
  age: {
    value: 15,
    enumerable: true,
  },
});

console.log(abotherobj);
// 5.Как вывести свойства не только данного объекта но и унаследованные свойства
function renderObjectsKeys(obj) {}
//Как получается что у нас есть доступ к методам но мы их не видим при итерации (for, map)
const arr = [1, 2, 3]; //length //
console.log(arr.__proto__);
for (let key of arr) {
  console.log(key);
}
// 2.2.1 Откуда у берутся методы toString(), length и тд. и почему они не выводятся в цикле. Как самим сделать так чтобы определенные свойства были (enumerable, writable, configurable)(Object.defineProperty)
// 7 Реализовать es5 наследование
function Task(title) {
  this._title = title;
  this._done = false;
  Task.count += 1;
}

Object.defineProperty(Task, "title", {
  get: function () {
    return this._title;
  },
  set: function (value) {
    this._title = value;
  },
});

Task.prototype.complete = function () {
  this._done = true;
};

Task.getDefaultTitle = function () {
  return "Задача";
};

function SubTask(title, parent) {
  Task.call(this, title);
  this._parent = parent;
}

SubTask.prototype = Object.create(Task.prototype);
SubTask.prototype.constructor = SubTask;
SubTask.prototype.complete = function () {
  Animal.prototype.complete.call(this);
  console.log(this.age);
};
//7.1 Реализовать es6 наследование

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} стоит.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }

  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}
const r = new Rabbit();
r.stop()

//Promises
//Что такое промис
// Какие у него есть состояния
// Основные потребители промиса
// Напиши промис или напиши промис для этого
// wait(1000).then(() => { console.log('Triggered after 1000ms') });

//Event Loop
//Что такое цикл событий
//Задача
console.log(1, 'eventloop');

const a = new Promise((res, rej) => {
  console.log(2);
  return res();
});

for (let i = 0; i < 1000; i++) {
  console.log(3);
}

console.log(4);

setTimeout(() => {
  console.log(5);
}, 0);

a.then((res) => console.log(6));

const q = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(7, json));

// Есть также метод response.json(), который читает данные в формате JSON. Он больше подходит для нашего примера, так что давайте использовать его.

//Задачка с массивом
const people = [
  { group: "first", name: "Mary" },
  { group: "second", name: "Sasha" },
  { group: "first", name: "Vasya" },
  { group: "third", name: "Vasya" },
];

// {
//    first: [{ group: 'first', name: 'Mary' }, { group: 'first', name: 'Vasya' }],
//    second: [{ group: 'second', name: 'Sasha' }],
//    third: [{ group: 'second', name: 'Sasha' }]
// }

// функциональное програмирование

//React
//JSX\
//State and Props
//LIfecycle methods and equivalent in functions
//Shadow dom
