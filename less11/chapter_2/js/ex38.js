// Пример 38 - Диапазон Range

let range1 = new Range();
// мы создали объект класса Range, но он сейчас пустой и ничего не выделяет
// теперь у этой переменной, точнее у этого объекта есть свои методы, которые достаются нам от этого класса, которые мы можем применять

// установим стартовую позицию диапазона:
range1.setStart(p1, 0)
// первый параметр p1 (идентификатор) - это какой элемент мы хотим выбрать в качестве стартового
// второй параметр 0 - смещение внутри этого элемента. Стоит 0 - это означает узел 0, самое начало  содержимого, написанного внутри элемента, то есть большая буква Т из содержимого "Текст ..."

// установим конечную точку:
range1.setEnd(p1, 2)
// идентификатор p1 и смещение на 2 узла

// Текст: <i>курсивный текст</i> и <b>жирный текст</b>
// этот текст тут на самом деле состоит из 4х узлов



console.log(range1.toString());

let range = new Range();
    // Каждый описанный метод представлен здесь:
    let methods = {
      // deleteContents() удалить содержимое диапазона из документа
      deleteContents() {
        range.deleteContents()
      },
      extractContents() {
        // extractContents() удалить содержимое диапазона из документа и вернуть как DocumentFragment
        let content = range.extractContents();
        result.innerHTML = "";
        result.append("Извлечено: ", content);
      },
      cloneContents() {
        // cloneContents() клонировать содержимое диапазона и вернуть как DocumentFragment
        let content = range.cloneContents();
        result.innerHTML = "";
        result.append("Клонировано: ", content);
      },
      insertNode() {
        // insertNode(node) вставить node в документ в начале диапазона
        let newNode = document.createElement('u');
        newNode.innerHTML = "НОВЫЙ УЗЕЛ";
        range.insertNode(newNode);
      },
      surroundContents() {
        // surroundContents(node) обернуть node вокруг содержимого диапазона
        let newNode = document.createElement('u');
        try {
          range.surroundContents(newNode);
        } catch (e) { alert(e) }
      },
      resetExample() {
        p.innerHTML = `Текст: <i>курсивный текст</i> и <b>жирный текст</b>`;
        result.innerHTML = "";
        //range.setStart(p.firstChild, 2);
        //range.setEnd(p.querySelector('b').firstChild, 3);
        range.setStart(p, 0);
        range.setEnd(p, 4);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    };
    for (let method in methods) {
      document.write(`<div><button onclick="methods.${method}()">${method}</button></div>`)
    }
    methods.resetExample();