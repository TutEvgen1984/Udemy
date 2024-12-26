// Пример 38 - Диапазон Range

function lesson1 () { // изоляция урока 1
let range1 = new Range();
// мы создали объект класса Range, но он сейчас пустой и ничего не выделяет
// теперь у этой переменной, точнее у этого объекта есть свои методы, которые достаются нам от этого класса, которые мы можем применять

// установим стартовую позицию диапазона:
range1.setStart(p1, 1);
// первый параметр p1 (идентификатор) - это какой элемент мы хотим выбрать в качестве стартового
// второй параметр 0 - смещение внутри этого элемента. Стоит 0 - это означает узел 0, самое начало  содержимого, написанного внутри элемента, то есть большая буква Т из содержимого "Текст ..."

// установим конечную точку:
range1.setEnd(p1, 2);
// идентификатор p1 и смещение на 2 узла

// Текст: <i>курсивный текст</i> и <b>жирный текст</b>
// этот текст тут на самом деле состоит из 4х узлов
// Узел 0 - НИЧЕГО (нулевая точка отсчета)
// Узел 1 - Текст:
// Узел 2 - курсивный текст
// Узел 3 -  и 
// Узел 4 - жирный текст


console.log(range1.toString());
// Без .toString() в консоли будет непонятный раскрывающийся объект
// При start-end 0-0:  (ничего, даже пробела нет)
// При start-end 0-1: Текст:
// При start-end 0-2: Текст: курсивный текст
// При start-end 0-3: Текст: курсивный текст и (с пробелом в конце)
// При start-end 0-4: Текст: курсивный текст и жирный текст
// При start-end 0-5: ex38.js:13 Uncaught IndexSizeError: Failed to execute 'setEnd' on 'Range': There is no child at offset 5.
// При start-end 1-1:  (ничего, даже пробела нет)
// При start-end 1-2:  курсивный текст

// следующая запись очистит все выделения Ranges, если мы их до этого делали на странице
// document.getSelection().removeAllRanges();

document.getSelection().addRange(range1);
// произошло выделение того диапазона, который указали с помощью range1.setStart/setEnd

// уберём выделение спустимся 2 секунды:
// setTimeout(() => document.getSelection().removeAllRanges(), 2000)

} // конец изоляции

// lesson1 ()

function lesson2 () { // изоляция урока 1

let range2 = new Range();

range2.setStart(p2.firstChild, 2); // Начало: с 1-го дочернего элемента (Текст: ) со 2-го индекса (кст: )

range2.setEnd(p2.querySelector('b').firstChild, 3); // Конец: идентификатор p1, в нём поиск первого элемента b, в нём первый ребенок (указываем обязательно иначе ошибка), 3-ий индекс

console.log(range2.toString()); // кст: курсивный текст и жир

document.getSelection().addRange(range2);

// На станице может работать только одно выделение, если их сделать несколько, то работает только первое по коду. Чтобы выделение 2 заработало нужно убрать из кода предыдущее выделение addRange(range1) и если 

} // конец изоляции

// lesson2 ()

// Далее идет Урок 3, при попытке изолировать который в нём появляется ошибка при выполнении кода при нажатии любой кнопки

let range3 = new Range();

// Каждый описанный метод представлен в следующем объекте methods, состоящем из 6 методов, перечисленных через запятую:
let methods = {
  // deleteContents() удаляет содержимое диапазона из документа
  deleteContents() {
    range3.deleteContents()
  },
  extractContents() {
    let content = range3.extractContents();
    // метод extractContents() удаляет содержимое диапазона из документа и возвращает как DocumentFragment, присвоив возвращенное в переменную content мы сохраняем вырезанное
    result3.innerHTML = ""; // стираем содержимое абзаца html <p id="result3"></p>
    result3.append("Извлечено: ", content); // пишем в абзац <p id="result3">Извлечено: значение переменной content</p>
    // В итоге в <p id="p3"></p> внутри стало всё пусто, но при этом то, что удалилось, появилось ниже внутри <p id="result3"></p>
  },
  cloneContents() {
    let content = range3.cloneContents();
    // cloneContents() клонировать содержимое диапазона и вернуть как DocumentFragment

    result3.innerHTML = "";
    result3.append("Клонировано: ", content);
    // В итоге добавилась 4-ая строка, при этом изначальное содержимое осталось
  },
  insertNode() {
    // insertNode(node) вставить node в документ в начале диапазона
    let newNode = document.createElement('u'); // создали элемент с тегом u (нижнее подчеркивание текста)
    newNode.innerHTML = "НОВЫЙ УЗЕЛ";
    range3.insertNode(newNode);
    // Получили: НОВЫЙ УЗЕЛТекст3: курсивный текст3 и жирный текст3
  },
  surroundContents() {
    // surroundContents(node) обернуть node вокруг содержимого диапазона
    let newNode = document.createElement('u');
    try {
      range3.surroundContents(newNode);
      // ПОлучили: элемент <p>, внутри которого новый узел <u> оборачивает содержимое, и получаем весь текст который был, только он становится подчеркнутым 
    } catch (e) { alert(e) }
  },
  resetExample() {
    // Сбросим все выделения, перепишем заново <p3>, сотрем всё внутри result3:
    p3.innerHTML = `Текст3: <i>курсивный текст3</i> и <b>жирный текст3</b>`;
    result3.innerHTML = "";
    //range3.setStart(p3.firstChild, 2);
    //range3.setEnd(p3.querySelector('b').firstChild, 3);
    range3.setStart(p3, 0);
    range3.setEnd(p3, 4);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range3);
  }
};

// В цикле ниже добавляются кнопки, и каждая кнопка выполняет тот метод, который на ней написан
for (let method in methods) {
  document.write(`<div><button onclick="methods.${method}()">${method}</button></div>`)
}
methods.resetExample(); // однократное выполнение сброса <p3> на случай если мы его повредили
