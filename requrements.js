// Strict mode (knows that it exists, basic understanding of its influence)

// Variables, Values, Types (number, string, boolean, object, null, undefined), declaration (var, let, const, hoisting, temporary dead zone)

// Expressions (basic of auto type conversions, comparison), Operators, Statements (literals, conditions, loops)

// Objects (create, modify, built-in methods, Object static methods, calculated props, getter/setter)
//Определение свойств объекта Object.defineProperty()???
// "writable": true,, свойство можно изменить, иначе оно только для чтения.
// "enumerable": true,свойство перечисляется в циклах, в противном случае циклы его игнорируют.
// "configurable": true свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
const obj = {
    name: 'josh'
};
Object.defineProperty(obj, "name", {
    writable: false,
    enumerable: true,
  });

// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

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

// Arrays (create, modify, indexes, length, built-in methods: sorting, filtering, search, iterating; Array static methods)

// Functions (create, invoke, arrow functions, rest/spread operator, default parameters, scope, closure, recursion)
//Как рекурсия влияет не стек вызова
//Повторить замыкания
// Pure functions
// Immutability
// Functions as first-class entities
// Functions composition
// High order functions
// Recursion
// Currying/Memoization
// func memo фибоначи

// This/Prototype (execution context, call/apply/bind methods, constructor functions, understanding of prototypes)
//Разные методы наследования через js 
//__proto__ указывает на функцию конструктор. 
//prototype это функция конструктор в которую мы можем заложить опр методы

// Когда функция производит вложенный вызов, происходит следующее:
// Выполнение текущей функции приостанавливается.
// Контекст выполнения, связанный с ней, запоминается в специальной структуре данных – стеке контекстов выполнения.
// Выполняются вложенные вызовы, для каждого из которых создаётся свой контекст выполнения.
// После их завершения старый контекст достаётся из стека, и выполнение внешней функции возобновляется с того места, где она была остановлена.

// Classes (constructors, static members)

// Basic Async JavaScript (Timers, Promise, async/await)

// JavaScript Errors (try..catch, throw, Error class)

// Global object window (location, history, navigator, screen, document, cookies)

// DOM Manipulation (selection, traversing, modification, live collections)

// Nodes Modification (node properties, attributes, data attributes, styling)

// Classes (constructors, static members)

// Event Handling (mouse, keyboard, event phases, event listeners, propagation)

// AJAX (fetch)

// Web Storage (sessionStorage, localStorage)
