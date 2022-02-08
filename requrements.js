// Strict mode (knows that it exists, basic understanding of its influence)

// Variables, Values, Types (number, string, boolean, object, null, undefined), declaration (var, let, const, hoisting, temporary dead zone)

// Expressions (basic of auto type conversions, comparison), Operators, Statements (literals, conditions, loops)

// Objects (create, modify, built-in methods, Object static methods, calculated props, getter/setter)
//Определение свойств объекта Object.defineProperty()???
// "writable": true,, свойство можно изменить, иначе оно только для чтения.
// "enumerable": true,свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// "configurable": true свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
// const obj = {
//   name: "josh",
// };
// Object.defineProperty(obj, "name", {
//   writable: false,
//   enumerable: true,
// });
const obj = {
  position: true,
};
const obj2 = {
  name: "vlad",
};
//Вариант установки прототипа
const obj1 = {
  __proto__: obj2,
  age: 10,
};
//Создаем объект и устанавливаем прототип
const obj3 = Object.create(obj1, {
  years: {
    value: 25,
    enumerable: true,
    writable: false,
    configurable: false,
  },
});
//Получаем прототип объекта
console.log(Object.getPrototypeOf(obj3));
console.log(obj3.__proto__);
//Устанавливаем прототип
Object.setPrototypeOf(obj, obj3);

// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
// obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.

// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.
// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.
// А также есть методы для их проверки:

// Object.isExtensible(obj)
// Возвращает false, если добавление свойств запрещено, иначе true.
// Object.isSealed(obj)
// Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
// Object.isFrozen(obj)
// Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.

// Object.keys(obj) / Object.values(obj) / Object.entries(obj) – возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.

//Getter Setter obj

// Arrays (create, modify, indexes, length, built-in methods: sorting, filtering, search, iterating; Array static methods)


