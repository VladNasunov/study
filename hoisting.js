
// EvalError: возникает, когда функции eval() используются неправильно.

// RangeError: вызывается, когда числовая переменная превышает допустимый диапазон.

// ReferenceError: возникает при использовании недопустимой ссылки. возникает, когда вы пытаетесь использовать переменную, которая вообще не существует.

// SyntaxError: Возникает, когда при синтаксическом анализе кода JavaScript возникает синтаксическая ошибка.

// TypeError: вызывается, когда тип переменной не соответствует ожидаемому.возникает, когда переменная существует, но операция, которую вы пытаетесь выполнить, не подходит для типа значения, которое она содержит. В случае, когда в подробном сообщении говорится "не определено", это может произойти, если у вас есть переменная, значение которой является специальным значением undefined , и вы пытаетесь получить доступ к ее свойству.

// сильный текст URIError: возникает, когда функции encodeURI() или decodeURI() используются неправильно.

// . Он видит var a и a = 2 как два отдельных оператора, первый — как задачу фазы компиляции, а второй — как задачу фазы выполнения.
// Сами объявления поднимаются, а присваивания, даже присваивания функциональных выражений, не поднимаются.

// Очень важно помнить несколько вещей, объявляя JavaScript функции и переменные.
// Назначение переменных имеет приоритет перед объявлением функции.
// Объявления функций «поднимаются» над объявлением переменных, но не над их назначениями.

// Назначение переменной над объявлением функции.
var double = 22;
function double(num) {
  return num * 2;
}
console.log(typeof double); // Вывод: number

// Объявление функции над объявлением переменной.
var double;

function double(num) {
  return num * 2;
}

console.log(typeof double); // Вывод: function
// В то время как множественные/дублирующие объявления var фактически игнорируются, последовательные объявления функции перекрывают предыдущие.
foo(); // 3

function foo() {
	console.log( 1 );
}

var foo = function() {
	console.log( 2 );
};

function foo() {
	console.log( 3 );
}

// JavaScript непреклонно сначала объявляет, а уже затем инициализирует наши переменные.

var double;
function double(num) {
  return num * 2;
}
console.log(typeof double);

var double = 22;
function double(num) {
  return num * 2;
}
console.log(typeof double);

// Это говорит о том, что все необъявленные переменные это по факту глобальные переменные.
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);

//   Объявления переменных и функций помещаются в память на этапе компиляции, но они остаются именно там, где мы ввели их в свой код.

// Итак, под капотом происходит следующее: на этапе создания, движок JavaScript просматривает код и, как только он видит ключевое слово var или ключевое слово function, он выделяет некоторую память для них.
name = "Alex";
console.log(name); // Alex
var name;
// Таким образом переменные частично подняты. Поднимая переменную, но не правую сторону (не фактическое значение), мы просто присваиваем ему undefined.
// Стоит отметить то, что механизм “поднятия” передвигает только объявления функции или переменной. Назначения переменным остаются на своих местах.
// Запомните и держите в уме одну важную деталь, JavaScript непреклонно сначала объявляет, а уже затем инициализирует наши переменные.

// var имеет область действия функции;
// объявления var поднимаются, но не инициализируются.

// Разница между объявлениями var / function и объявлениями let / const / class заключается в инициализации. Первые инициализируются с неопределенным значением undefined. Однако, вторые, лексически объявленные переменные, остаются не инициализированными. Это означает, что ReferenceError выбрасывается при попытке доступа к ним. Они будут инициализированы только после того, как операторы let / const / class будут определены. Всё что до, называется временной мертвой зоной.

console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 5;

// Но однако, необъявленные переменные не существуют до тех пор, пока код назначающий их не будет выполнен. Следовательно, указание значения для необъявленной переменной, тут же создаёт её как глобальную переменную, когда назначение будет выполнено. Это говорит о том, что все необъявленные переменные это по факту глобальные переменные.
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);
/*
  Доступ как к глобальной переменной вне функции hoist()
  Выводит: 20
  */
console.log(b);
/*
  Как только b была назначена, она заключена в рамки области видимости функции hoist(). Что означает то, что мы не можем вывести её за рамки функции.
  Вывод: ReferenceError: b is not defined
  */

hoisted(); // Вывод: "This function has been hoisted."
function hoisted() {
  console.log("This function has been hoisted.");
}

expression(); //Вывод: "TypeError: expression is not a function
var expression = function () {
  console.log("Will this work?");
};
