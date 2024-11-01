// * Вопрос №1/16:

// Вопрос: Для перевода числа 568 в двоичную систему подойдет метод?
// Ответ: 568..toString(2)

// Статья https://learn.javascript.ru/number

let num = 568

console.log(num.toString(2)); // 1000111000

console.log(568..toString(2)); // 1000111000

/*
Внимание! Две точки в 123456..toString(36) это не опечатка. Если нам надо вызвать метод непосредственно на числе, как toString в примере выше, то нам надо поставить две точки .. после числа.

Если мы поставим одну точку: 123456.toString(36), тогда это будет ошибкой, поскольку синтаксис JavaScript предполагает, что после первой точки начинается десятичная часть. А если поставить две точки, то JavaScript понимает, что десятичная часть отсутствует, и начинается метод.

Также можно записать как (123456).toString(36).
*/


// * Вопрос №2/16:

// Вопрос: Встроенное свойство _proto_ - это...
// Ответ: И сеттер, и геттер

// Статья: https://learn.javascript.ru/prototype-inheritance
// Статья: https://learn.javascript.ru/prototype-methods
// Статья: https://learn.javascript.ru/property-accessors

// Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]

let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };

  let rabbit = {
    jumps: true,
    __proto__: animal // С помощью свойства __proto__ мы установили (как будто воспользовались свойством set) в объекте rabbit ссылку на animal чтобы использовать его как прототип
  };

  rabbit.walk(); // Animal walk
  // walk взят из прототипа. Когда мы обратились к этому методу JS его не нашел в объекте rabbit и пошёл искать в прототипе, нашёл там и вернул, то есть как будто сработал метод получения get


// * Вопрос №3/16:

// Вопрос: Цикл for of может работать:
// Ответ: С итерируемыми объектами

/*
for-of - цикл по итерируемым объектам

// где iterable - это некоторый объект с методом Symbol.iterator
for (const value_variable of iterable) {
}
Перед итерацией создает итератор вызывая iterable[Symbol.iterator](), перед каждой итерацией дергает метод next у итератора, работает пока в возвращаемом из метода next объекте поле done не станет true, подставляет поле value в переменную value_variable. Цикл в примере выше можно реализовать в виде обычного for:
{
  const iter = [1, 2, 3][Symbol.iterator]();
  for (let {done, value} = iter.next(); !done; ({done, value} = iter.next())) {
    const value_variable = value;
    {
      // тело исходного цикла
    }
  }
}
*/

// Статья: https://learn.javascript.ru/iterable
// Статья: https://qna.habr.com/q/1174018
// Статья: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of
// Статья: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Iteration_protocols#iterable

// * Вопрос №4/16:

// Вопрос: Как создать класс, который наследуется от другого класса?
// Ответ: 

// Статья: https://learn.javascript.ru/class-inheritance