// several design patterns (e.g Decorator, Singleton, Factory)
// best practices (KISS, DRY, YAGNI)

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
