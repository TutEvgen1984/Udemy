// Пример 39 - Выделение Selection

// Выделение Selection это не совсем тоже самое что Диапазон Range. Диапазон Range позволяет нам что-то выбрать, но мы никак с помощью него не влияем на выделение, но можем использовать все эти узлы, текст,  записать их в какую-то переменную,  создать на их основе какой то новый элемент и использовать далее в коде для добавления на страницу.ас помощью выделения мы можем именно выделять текст или отслеживать момент когда начинается выделение с помощью специальных событий и что-то делать в этих событиях.

// Так же как и у диапазона, выделение имеет начальную границу, которая называется якорь,и конечную, которая называется фокус.

// событие onselectionchange будет срабатывать когда произойдёт выделение
document.onselectionchange = function ()  {

    // <p id="p">Текст: <i>курсивный текст</i> и <b>жирный текст</b></p>
    // Выделим мышкой: курсивный текст и жир

    // выведем в консоль выделение в виде текста:
    console.log("🚀document.getSelection().toString(): ", document.getSelection().toString());
    // курсивный текст и жир

    // якорьУзел, ЯкорьСмещение, фокусУзел, фокусСмещение
    let {anchorNode, anchorOffset, focusNode, focusOffset} = document.getSelection()
    // такая запись означает, что как только мы будем производить выделение, мы поместим все его 4 значения в 4 отдельные переменные с помощью метода деструктуризации объекта

    // у нас есть 2 input, id="from" и id="to"
    // поместим в первый input значение:
    from.value = `${anchorNode && anchorNode.data}:${anchorOffset}`;
    // это код автором скопирован из https://learn.javascript.ru/selection-range, неизвестно как он работает

    // && означает логическое И
    console.log("узел якоря ~ anchorNode:", anchorNode); // "курсивный текст"
    console.log("anchorNode.data:", anchorNode.data);    // курсивный текст
    console.log("смещение якоря ~ anchorOffset:", anchorOffset); // 0

    // На html-странице в input №1 получили: "курсивный текст: 0"

    to.value = `${focusNode && focusNode.data}:${focusOffset}`;
    // На html-странице в input №2 получили: "жирный текст: 3"

    console.log("узел фокуса ~ focusNode:", focusNode); // "жирный текст"
    console.log("focusNode.data:", focusNode.data);     // жирный текст
    console.log("смещение фокуса ~ focusOffset:", focusOffset); // 3

}

function proverka ()
{
let D
let A=1
let B=2
let C=3
D = `${A && B}:${C}`;
console.log('D= ' + D);
// D= 2:3

let D2
let A2
let B2=2
let C2=3
D2 = `${A2 && B2}:${C2}`;
console.log('D= ' + D2);
// D= undefined:3

let D3
let A3
let B3=2
let C3=3
D3 = `${A3 && B3}:${C3}`;
console.log('D= ' + D3);
// D= undefined:3

}

// proverka()

// Статья: https://learn.javascript.ru/selection-range

// установим выделение на html-страницу с помощью кода из JS:
document.getSelection().setBaseAndExtent(p, 0, p, p.childNodes.length);
// p, 0 - это начальный узел и смещение
// p, p.childNodes.length - это начальный узел и смещение.
console.log("p.childNodes.length:" + p.childNodes.length);
// p.childNodes.length:4
// p.childNodes.length вычисляет целое конечное значение узлов в теге p, в нашем случае это 4. Если поменять p.childNodes.length на 3, то получим выделенное сначала и без последнего узла <b>жирный текст</b>

// если выделение уже существует, то его необходимо предварительно снять помощью removeAllRanges() потому что несколько выделений не может быть одновременно, выделение на странице может быть только ОДНО.

// теперь рассмотрим выделения в элементах форм

area.onselect = function () {
    console.log(`Начало: ${area.selectionStart} Конец: ${area.selectionEnd}`);
    // Выделив часть текста внутри textarea получили в консоли:
    // Начало: 0 Конец: 58
}

// мы можем изменить позицию курсора внутри textarea:
area.onfocus = () => {
    setTimeout(()=>{
        area.selectionStart = area.selectionEnd = 10;
        // когда мы начальную и конечную точку выделения установим в одно и тоже место, то у нас курсор установится в одну точку
        // теперь когда мы после перезагрузки страницы устанавливаем курсор мыши (сфокусировались на элементе) в поле textarea, наш курсор появляется не в самом начале, а на 10 символе
        // setTimeout мы установили специально без времени чтобы наш код сработал сразу после фокусировки. если setTimeout убрать, то код перестаёт работать, потому что код должен сработать после того как мы щелкнем мышкой и сработает установка курсора по умолчанию, а для этого нужна хоть какая-то минимальная задержка, даже если мы не указали задержку численно, теперь она присутствует минимально и код срабатывает на микросекунду позже устанавливаемого по умолчанию
    })
}

// * 3 способа запрета выделения на сайте:

// Способ №1:
// в стилях CSS  добавить свойство user-select: none

/*
CSS style.css:
#p {
    user-select: none;
  }
*/

// чтобы запретить выделение с помощью JS:

function forbidSelect1 () { // изоляция
p.onselectstart = () => false;
// теперь невозможно выделить текст
}

// forbidSelect1 ()

function forbidSelect2 () { // изоляция
    document.onselectionchange = function ()  {
        document.getSelection().empty()
    }
// теперь невозможно выделить текст вообще на всей странице
}
// forbidSelect2 ()