//react create element это шаблон фабрика
// HOC это шаблон декоратор

//decorator, singleton, factory

const { func } = require("prop-types");

//Singleton
// 1. Синглтон нарушает SRP (Single Responsibility Principle) — класс синглтона, помимо того чтобы выполнять свои непосредственные обязанности, занимается еще и контролированием количества своих экземпляров.
// 2. Глобальное состояние. Про вред глобальных переменных вроде бы уже все знают, но тут та же самая проблема. Когда мы получаем доступ к экземпляру класса, мы не знаем текущее состояние этого класса, и кто и когда его менял, и это состояние может быть вовсе не таким, как ожидается. Иными словами, корректность работы с синглтоном зависит от порядка обращений к нему, что вызывает неявную зависимость подсистем друг от друга и, как следствие, серьезно усложняет разработку.
// 3. Зависимость обычного класса от синглтона не видна в публичном контракте класса. Так как обычно экземпляр синглтона не передается в параметрах метода, а получается напрямую, через GetInstance(), то для выявления зависимости класса от синглтона надо залезть в тело каждого метода — просто просмотреть публичный контракт объекта недостаточно.
// 4. Наличие синглтона понижает тестируемость приложения в целом и классов, которые используют синглтон, в частности. Во-первых, вместо синглтона нельзя подпихнуть Mock-объект, а во-вторых, если синглтон имеет интерфейс для изменения своего состояния, то тесты начинают зависеть друг от друга. Говоря же проще — синглтон повышает связность, и все вышеперечисленное, в том или ином виде, есть следствие повышения связности.
// В рамках применения этого паттерна новый экземпляр некоего класса создаётся в том случае, если он пока не создан. Если же экземпляр класса уже существует, то, при попытке обращения к конструктору, возвращается ссылка на соответствующий объект. Последующие вызовы конструктора всегда будут возвращать тот же самый объект.

let instance = null;

function Singleton(name, age) {
  if (instance) {
    return instance;
  }
  instance = this;
  this.name = name;
  this.age = age;
  return instance;
}
const user1 = new Singleton("vlad", 25);
const user2 = new Singleton("nastya", 25);
console.log(user1 === user2); //true
// Когда вызывается функция-конструктор, она, в первую очередь, проверяет, существует ли объект instance. Если соответствующая переменная не инициализирована, в instance записывают this. Если же в переменной уже есть ссылка на объект, конструктор просто возвращает instance, то есть — ссылку на уже существующий объект.

//SIngleton with Module

const singleton = (function () {
  let instance;
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  return {
    getInstance: function (name, age) {
      if (!instance) {
        instance = new User(name, age);
      }
      return instance;
    },
  };
})();

const user1 = singleton.getInstance("vlad", 25);
const user2 = singleton.getInstance("vlads", 25);
console.log(user1 === user2);
// Здесь мы создаём новый экземпляр user, вызывая метод singleton.getInstance(). Если экземпляр объекта уже существует, то этот метод просто возвратит его. Если же такого объекта пока нет, метод создаёт его новый экземпляр, вызывая функцию-конструктор User.

const singleton = (function () {
  let instance;
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  return {
    getInstance: function (name, age) {
      if (!instance) {
        instance = new User(name, age);
      }
      return instance;
    },
  };
})();
const users1 = singleton.getInstance("vald", 27);

//Factory
// Паттерн «Фабрика» (Factory) использует для создания объектов так называемые «фабричные методы». При этом не требуется указывать классы или функции-конструкторы, которые применяются для создания объектов.
// Этот паттерн используется для создания объектов в случаях, когда не нужно делать общедоступной логику их создания. Паттерн «Фабрика» может быть использован в том случае, если нужно создавать различные объекты в зависимости от специфических условий

class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "white";
  }
}

class Truck {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "used";
    this.color = options.color || "black";
  }
}

class VehicleFactory {
  createVehicle(options) {
    if (options.vehicleType === "car") {
      return new Car(options);
    } else if (options.vehicleType === "truck") {
      return new Truck(options);
    }
  }
}
const factory = new VehicleFactory();
const car = factory.createVehicle({
  vehicleType: "car",
  doors: 4,
  color: "silver",
  state: "Brand New",
});

const truck = factory.createVehicle({
  vehicleType: "truck",
  doors: 2,
  color: "white",
  state: "used",
});
// Выводит Car {doors: 4, state: "Brand New", color: "silver"}
console.log(car);
// Выводит Truck {doors: 2, state: "used", color: "white"}
console.log(truck);

//Decorator
// Паттерн «Декоратор» (Decorator) используется для расширения функционала объектов без модификации существующих классов или функций-конструкторов. Этот паттерн можно использовать для добавления к объектам неких возможностей без модификации кода, который ответственен за их создание.

function Car(name) {
  this.name = name;
  // Значение по умолчанию
  this.color = "White";
}
// Создание нового объекта, который планируется декорировать
const tesla = new Car("Tesla Model 3");
// Декорирование объекта - добавление нового функционала
tesla.setColor = function (color) {
  this.color = color;
};
tesla.setPrice = function (price) {
  this.price = price;
};
tesla.setColor("black");
tesla.setPrice(49000);
// Выводит black
console.log(tesla.color);

class Car {
  constructor() {
    // Базовая стоимость
    this.cost = function () {
      return 20000;
    };
  }
}
// Функция-декоратор
function carWithAC(car) {
  car.hasAC = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 500;
  };
}
// Функция-декоратор
function carWithAutoTransmission(car) {
  car.hasAutoTransmission = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 2000;
  };
}
// Функция-декоратор
function carWithPowerLocks(car) {
  car.hasPowerLocks = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 500;
  };
}
const car = new Car();
console.log(car.cost());
carWithAC(car);
carWithAutoTransmission(car);
carWithPowerLocks(car);
