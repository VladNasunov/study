//S single responsibility
//Смысл не мешать логику в классах а декомпозировать их чтобы каждый класс отвечал за конкретное поведение

//Open Close
//Классы должны быть открыты для расширения но закрыти для модификаций
//Т е один раз сделали и больше не изменяем

//тут мы можем создавать много объектов со своими вычислениями площади тк они везде разные а в классе вычисления у нас массив который вычисляет методы входящих классов
//получается что мы его не изменяем а лишь добавляем новые классы фигур
//Т Е открываем для расширения и закрываем для модификаций
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return this.radius ** 2 * Math.PI;
  }
}
class Rect {
  constructor(a) {
    this.a = a;
  }
  area() {
    return this.a ** 2;
  }
}
class Count {
  constructor(arr) {
    this.arr = arr;
  }
  counting() {
    return this.arr.reduce((acc, el) => {
      acc += el.area();
      return acc;
    }, 0);
  }
}
const newCOUNT = new Count([new Circle(10), new Rect(20)]);
console.log(newCOUNT.counting());

//liskov subtitution principle
//функции, которые используют базовый тип, должны иметь возможность использовать подтипы базового типа не зная об этом
//Про разделение слоев абстракции

//не правильный вариант реализации где у временного сотрудника нет доступа
class Person {
  access() {
    console.log("you have access");
  }
}
class Frontend extends Person {
  canMakeFrontend() {
    return true;
  }
}

class BE extends Person {
  canMakeBE() {
    return true;
  }
}
class PartTimeEployee extends Person {
  access() {
    console.log("you dont have permission");
  }
}
function callAccess(component) {
  console.log(component.access());
}

callAccess(new BE());
callAccess(new PartTimeEployee());

//ВАринат реализации с Liskov subtitution principle

class Person1 {
  isPerson = true;
}
class FullTimeEmployee extends Person1 {
  access() {
    console.log("you have access");
  }
  isFullTime = true;
}
class AnotherEmployee extends Person1 {
  isFullTime = false;
}
class Frontend1 extends FullTimeEmployee {
  canMakeFrontend() {
    return true;
  }
}

class BE1 extends FullTimeEmployee {
  canMakeBE() {
    return true;
  }
}
class PartTimeEployee1 extends AnotherEmployee {
  access() {
    console.log("you dont have permission");
  }
}
function callAccess(component) {
  console.log(component.access());
}

//interface segregation princible
// Те классы которые наследуются от базового класса если они не используют методы базового класса то они не должны от них зависеть
// «клиенты не должны зависеть от методов, которые они не используют».

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   swim() {
//     console.log(`${this.name} can swim`);
//   }
//   walk() {
//     console.log(`${this.name} can walk`);
//   }
//   fly() {
//     console.log(`${this.name} can fly`);
//   }
// }
// class Dog extends Animal {
//   fly() {
//     return null;
//   }
// }
// class Eagle extends Animal {
//   swim() {
//     return null;
//   }
// }
// class Fish extends Animal {
//   walk() {
//     return null;
//   }
//   fly() {
//     return null;
//   }
// }
// const dog = new Dog("Pes");
// const eagle = new Eagle("Khabib");
// const fish = new Fish("Nemo");

// dog.fly();
// dog.swim();
// dog.walk();

// eagle.fly();
// eagle.swim();
// eagle.walk();

// fish.fly();
// fish.swim();
// fish.walk();

//Разобьем логику этих классов
class Animal {
  constructor(name) {
    this.name = name;
  }
}
const swimmer = {
  swim() {
    console.log(`${this.name} can swim`);
  },
};
const walker = {
  walk() {
    console.log(`${this.name} can walk`);
  },
};
const flyer = {
  fly() {
    console.log(`${this.name} can fly`);
  },
};
class Dog extends Animal {}
class Eagle extends Animal {}
class Fish extends Animal {}
Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flyer, walker)
Object.assign(Fish.prototype, swimmer)

const dog = new Dog("Pes");
const eagle = new Eagle("Khabib");
const fish = new Fish("Nemo");

dog.swim();
dog.walk();

eagle.fly();
eagle.walk();

fish.swim();

//Dependency invertion 
