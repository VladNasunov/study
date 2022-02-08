// Функция, переданная в конструкцию new Promise, называется исполнитель (executor). Когда Promise создаётся, она запускается автоматически
// Она должна содержать «создающий» код, который когда-нибудь создаст результат
// Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript. Наш код – только внутри исполнителя.

// Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:

// resolve(value) — если работа завершилась успешно, с результатом value.
// reject(error) — если произошла ошибка, error – объект ошибки.

// Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:

// state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
// result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).

// Так что исполнитель по итогу переводит promise в одно из двух состояний:
// new Promise(executor)
// state: 'pending' -> resole(value) -> state: fulfilled
// result: undefined                    result: value
//    ||
//    \/
// reject(eror) => state: 'rejected'
//                 result: error

// Вызывайте reject с объектом Error

// Вызов .catch(f) – это сокращённый, «укороченный» вариант .then(null, f).

// Вызов .finally(f) похож на .then(f, f), в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой.

// Обработчик, вызываемый из finally, не имеет аргументов. В finally мы не знаем, как был завершён промис. И это нормально, потому что обычно наша задача – выполнить «общие» завершающие процедуры.

// Обработчик finally «пропускает» результат или ошибку дальше, к последующим обработчикам.

//ЦЕпочка промисов
// Идея состоит в том, что результат первого промиса передаётся по цепочке обработчиков .then.
// Всё это работает, потому что вызов promise.then тоже возвращает промис, так что мы можем вызвать на нём следующий .then.
// Когда обработчик возвращает какое-то значение, то оно становится результатом выполнения соответствующего промиса и передаётся в следующий .then.

// Классическая ошибка новичков: технически возможно добавить много обработчиков .then к единственному промису. Но это не цепочка.

// Fetch
// Этот код запрашивает по сети url и возвращает промис. Промис успешно выполняется и в свою очередь возвращает объект response после того, как удалённый сервер присылает заголовки ответа, но до того, как весь ответ сервера полностью загружен.

// Любое значение кроме Promise будет завернуто в promise
promise.then(() => "hello").then((value) => console.log(value)); //y String нет метода then потому что возвращается промис
// Если явно вернуть Promise with return то он не будет дважды оборачиваь в промис а вернет просто промис
promise
  .then(() => new Promise((resolve) => resolve("h")))
  .then((value) => console.log(value)); //h

// Обработка ошиббок
// Если вернуть reject то след then будет пропущен, затем когда Catch поймает и обработает ошибку, следующий then будет работать в штатном режиме
promise
  .then(() => new Promise((_, reject) => reject(".")))
  .then(() => console.log("это then будет пропущен"))
  .catch((err) => console.log(err))
  .then(() => console.log("работатет в штатном режиме"));

//   если через then обрабатывать ошибки то первый then будет пропущен
promise
  .then(
    () => {
      return new Promise((_, rej) => rej("err"));
    },
    (e) => {
      // Данный кетч будет пропущен
      console.log(e);
    }
  )
  .then(
    () => {
      //  Обработчик будет снова запущен
    },
    (e) => {
      // Здесь обработает ошибку
      console.log(e);
    }
  );

//   Catch обработает любые ошибки. Грубо говоря внутри есть try/catch
promise
  .then(() => undefined.toString())
  .catch((err) =>
    console.log(err, "typeerror cannot read property toSring of undefined")
  );
//Внутри try catch неявный
promise
  .then(() => {
    try {
      undefined.toString();
    } catch (e) {
      return new Promise((_, rej) => rej(e));
    }
  })
  .catch((err) =>
    console.log(err, "typeerror cannot read property toSring of undefined")
  );

//Promise all принмиает массив значений или промисов
Promise.all([Promise.resolve("h"), "r"]).then((value) => console.log(value)); //Возвращает массив или первый отказ
// Пример
Promise.all([fetchChats(), fetchPhotos(), fetchContacts()])
  .then(([chats, photos, contacts]) => {
    //Получили все данные параллельно
  })
  .catch((err) => console.log("обработали первый отказ"));

//Promise.race() принимает массив со значениями и или
// Если передать пустой массив то он зависнет на pending
//Возвращает первое значение или первый отказ
// Если передает массив асинх запросов то он вернет первый успешно выполеный или первую ошибку
// Пример запрос к разным дата центрам
Promise.race([fetchRus, fetchUS, fetchUK])
  .then((first) => console.log("ответ от самый быстрый дата цетр"))
  .catch((err) => console.log("первый отказ"));

//Promise all settled Дождется всех и вернет массив специальных объектов у которых есть статус и value if fullfilled and reason if rejected
Promise.allSettled([Promise.resolve("v"), Promise.reject("s")]).then(
  ([resolved, rejected]) => {
    console.log(resolved); //{status: fullfilled, value: 'v'}
    console.log(rejected); //{status: rejected, value: 's'}
  }
);

//Promise any
//Либо самый быстрый ответ
// Либо массив с причинами отказа

// Если Промис завис
Promise.race([fetchLongReq, new Promise((_, rej) => setTimeout(reject, 3000))])
  .then((data) => {
    //Получили данные
  })
  .catch((error) => {
    //или отказ по таймауту
  });

// Итератор = интерфейс с методом next и признаком done
// набор или объект с методом next который возвращает объект со значением и признаком конца
const iterator = ["a", "d"][Symbol.iterator]();
iterator.next(); //{value: a, done: false}
iterator.next(); //{value: b, done: false}
iterator.next(); //{value: undefined, done: true}
iterator.next(); //{value: undefined, done: true}
iterator.next(); //{value: undefined, done: true}

//Генератор = подход, когда вычисляется только следущий элемент. Генератор возвращает итератор
function* generator() {
  yield "a";
  yield "b";
  yield "c";
}
const gen = generator();
console.log(gen.next());
console.log(gen.next());
//Также у итератора есть метод gen.throw() ??

//Итератор это корутина (сопрограмма)
// это функция которая приостанавливает работу, запоимнает текущее состояние, имеет несколько точек входа и выхода

// Когда цикл for..of запускается, он вызывает этот метод один раз (или выдаёт ошибку, если метод не найден). Этот метод должен вернуть итератор – объект с методом next.
// Дальше for..of работает только с этим возвращённым объектом.
// Когда for..of хочет получить следующее значение, он вызывает метод next() этого объекта.
// Результат вызова next() должен иметь вид {done: Boolean, value: any}, где done=true означает, что итерация закончена, в противном случае value содержит очередное значение.

// Итого
// Объекты, которые можно использовать в цикле for..of, называются итерируемыми.

// Технически итерируемые объекты должны иметь метод Symbol.iterator.
// Результат вызова obj[Symbol.iterator] называется итератором. Он управляет процессом итерации.
// Итератор должен иметь метод next(), который возвращает объект {done: Boolean, value: any}, где done:true сигнализирует об окончании процесса итерации, в противном случае value – следующее значение.
// Метод Symbol.iterator автоматически вызывается циклом for..of, но можно вызвать его и напрямую.
// Встроенные итерируемые объекты, такие как строки или массивы, также реализуют метод Symbol.iterator.
// Строковый итератор знает про суррогатные пары.
// Объекты, имеющие индексированные свойства и length, называются псевдомассивами. Они также могут иметь другие свойства и методы, но у них нет встроенных методов массивов.

// async await
//async Заворачивает свой результат в Promise
async function asyncFunc() {
  return "a";
}
asyncFunc.then((value) => console.log(value)); //a
//Также ее можно представить как
function asyncFunc() {
  return Promise.resolve("a");
}

// Await получает результат из Promise и вызывается только внутри асинх функции

// обработка ошибок async await
async function asyncFunc() {
  try {
    await Promise.resolve("a");
  } catch (e) {
    //log e
  }
}
asyncFunc().then(() => console.log("мы в безопасноти"));

// еще один вариант
async function asyncFunc() {
  await Promise.resolve("a");
}
asyncFunc()
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
