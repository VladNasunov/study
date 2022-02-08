// В JavaScript мы не делаем копии из одного объекта ("класса") в другой ("экземпляр"). Мы создаем ссылки между объектами. В механизме [[Prototype]] визуально стрелки идут справа налево и снизу вверх.

// В конце каждой типичной цепочки [[Prototype]] находится встроенный объект Object.prototype. Этот объект содержит различные утилиты, используемые в JS повсеместно, поскольку все обычные (встроенные, не связанные с конкретной средой исполнения) объекты в JavaScript "происходят от" объекта Object.prototype (иными словами, имеют его на вершине своей цепочки [[Prototype]]).
//Если стандартная операция [[Get]] не может найти запрашиваемое свойство в самом объекте, то она следует по ссылке [[Prototype]] этого объекта.

//proto любого объекта ссылается на прототип функции контруктора при помощи которой он был создан

//По аналогии с этим процессом поиска по цепочке [[Prototype]], если вы используете цикл for..in для итерации по объекту, будут перечислены все свойства, достижимые по его цепочке (при условии, что они перечислимые — см. enumerable в главе 3). Если вы используете оператор in для проверки существования свойства в объекте, то in проверит всю цепочку объекта (независимо от перечисляемости).
//Вопрос как вывести все свойства объекта и его родителей
// let parent = {
//   people: true,
// };
// let object = Object.create(parent, {
//   name: {
//     value: "vlad",
//   },
// });
// let abotherobj = Object.create(object, {
//   age: {
//     value: 15,
//   },
// });
// for (let key in abotherobj) {
//   console.log(key);
// }

//Вопросы

// const Prot = () => {
//   return `<div>hello</div>`;
// };
// console.log(Prot.__proto__ === ??)
// console.log(Prot.prototype === ??)

//Спрашиваем чему будет равен прото примитива
//а откуда а примитива прото?
// console.log(25.__proto__ === ?)
// console.log(25.prototype === ?)
// const func = function hello(){};
// function goodbye(){};
// console.log(func.__proto__ === goodbye.__proto__)
// console.log(func.prototype === goodbye.prototype)
// class Man{
//   constructor(name){
//     this.name = name
//   }
// };
// const me = new Man('vlad');
// console.log(Man.__proto__ === ??)
// console.log(me.__proto__ === ??)
// console.log(me.prototype === ??)

// function One(a, c){
//   this.a = a;
//   this.c = c
// }
// One.prototype.say = function(){
//   return 'say'
// }
// function Two(a,c,b){
//   One.call(this, a, c)
//   this.b = b
// }
// Two.prototype = Object.create(One.prototype)
// Two.prototype.constructor = Two
// const onetwo = new Two('a','c','b')
// console.log(onetwo)

const object = {
  name: "vald",
  age: "14",
};
Object.defineProperty(object, "name", {
  enumerable: false,
});
// console.log(Object.getOwnPropertyDescriptor(object, 'name'))//Показывает его дескирпторы
// const objectChiild = Object.create(object, {
//   lastname: {
//     value: "ansunov",
//   },
// });
// const objectChiild = {
//   lastname: "nasunov",
//   __proto__: object,
// };
// const objectChiild = Object.create(object)
// objectChiild.lastname = 'nasunov'
// console.log(objectChiild);
// for (let key in objectChiild) {
//   console.log(key);
// }

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
console.log('25'.__proto__ === ??)
console.log('25'.prototype === ??)
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
    enumerable: true
  },
});

console.log(abotherobj)
// 5.Как вывести свойства не только данного объекта но и унаследованные свойства
function renderObjectsKeys(obj) {}
//Как получается что у нас есть доступ к методам но мы их не видим при итерации (for, map)
const arr = [1, 2, 3]; //length //
console.log(arr.__proto__);
for (let key of arr) {
  console.log(key)
}
// 2.2.1 Откуда у берутся методы toString(), length и тд. и почему они не выводятся в цикле. Как самим сделать так чтобы определенные свойства были (enumerable, writable, configurable)(Object.defineProperty)
// 7 Реализовать es5 наследование

//7.1 Реализовать es6 наследование












// Object.defineProperties(user, {
//   name: { value: "John", writable: false },
//   surname: { value: "Smith", writable: false },
//   // ...
// });

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
SubTask.prototype.complete = function(){
  Animal.prototype.complete.call(this)
  console.log(this.age)
}

// var task = new Task("Изучить JavaScript");
// var subtask = new SubTask("Изучить ES6", task);

// console.log(task);
// console.log(subtask);

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

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!
// свойство .constructor, и это свойство является обратной ссылкой на функцию (в данном случае Foo), с которой связан этот объект. Более того, мы видим, что объект a, созданный путем вызова "конструктора" new Foo(), похоже тоже имеет свойство с именем .constructor, также указывающее на "функцию, создавшую его".

// Конструктор или вызов?
// В примере выше есть соблазн предположить, что Foo — это "конструктор", потому что мы вызываем её с new и видим, что она "конструирует" объект.

// В действительности, Foo такой же "конструктор", как и любая другая функция в вашей программе. Функции сами по себе не являются конструкторами. Однако когда вы добавляете ключевое слово new перед обычным вызовом функции, это превращает вызов функции в "вызов конструктора". На самом деле new как бы перехватывает любую обычную функцию и вызывает её так, что в результате создается объект, а также выполняется код самой функции.

//separate
// Иначе говоря, в JavaScript "конструктор" — это любая функция, вызванная с ключевым словом new перед ней.

// Самая важная строка здесь Bar.prototype = Object.create( Foo.prototype ). Object.create(..) создает "новый" объект из ничего, и связывает внутреннюю ссылку [[Prototype]] этого объекта с указанным объектом (в данном случае Foo.prototype).Другими словами, эта строка означает: "создать новый объект 'Bar точка prototype', связанный с 'Foo точка prototype'".

// Bar.prototype = Foo.prototype не создает новый объект, на который ссылалось бы Bar.prototype. Вместо этого Bar.prototype становится еще одной ссылкой на Foo.prototype, и в результате Bar напрямую связывается с тем же самым объектом, что и Foo: Foo.prototype
