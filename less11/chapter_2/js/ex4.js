// Третий метод обработчика событий - addEventListener:

// Создадим 3 функции, которые мы хотим назначить затем в качестве обработчика для одного события
function addText1() {
    alert('Первый текст')
}

function addText2() {
    alert('Второй текст')
}

function addText3() {
    alert('Третий текст')
}

// Эти функции похожи только как пример, на самом деле эти функции могут быть  совершенно разными про логике и смыслу

document.querySelector('.btn').onclick = addText1 // это мы уже изученным методом добавили обработку события. Сработал alert('Первый текст')

document.querySelector('.btn').addEventListener('click', addText2) // Сработал alert('Второй текст')

document.querySelector('.btn').addEventListener('click', addText3) // Сработал alert('Третий текст')

// Получили: Первый текст, Второй текст, Третий текст


// * Семантика: element.addEventListener(eventType, handler, options)
// Статья: https://doka.guide/js/element-addeventlistener/

//  В скобках
// 'click' -  это тип события?  в данном случае ЛКМ

// Попытаемся с помощью метода .onclick добавить 3 функции в качестве обработчика:
document.querySelector('.button2').onclick = addText1 // не сработал
document.querySelector('.button2').onclick = addText2 // не сработал
document.querySelector('.button2').onclick = addText3 // сработало только это событие
// ! При попытке повешать с помощью метода onclick три разные функции, такого не получится, потому что сработает в итоге только 3-я функция (только последний обработчик), которая идёт самая нижняя в блоке кода, потому что такой метод позволяет добавить только  1 обработчик, а каждый последующий назначаемый  переписывает предыдущий

// Это говорит нам о том, что таким способом нельзя добавить несколько обработчиков на 1 элемент

// Можно комбинировать эти 2 метода (onclick и addEventListener), но лучше использовать только один addEventListener

document.querySelector('.button3').addEventListener('click', addText1) // Сработал
document.querySelector('.button3').addEventListener('click', addText2) // Сработал
document.querySelector('.button3').addEventListener('click', addText3) // Сработал
// после нажатия на кнопку получаем подряд три сработавших alert('Первый текст'), alert('Второй текст'), alert('Третий текст')
// через к addEventListener можно вешать 3 события на 1 элемент и они все 3 сработают

// с помощью .addEventListener() мы сможем добавить обработчик для любого события на элемент, а также для одного элемента можем указать несколько разных обработчиков

// removeEventListener - убирает обработчик события
document.querySelector('.button4').addEventListener('click', addText1) // повешали обработчик на элемент
document.querySelector('.button4').removeEventListener('click', addText1) // убрали обработчик события, при этом в скобках нужно писать абсолютно те же значения, которые были при назначении события: тип click и функция addText1
// в итоге при нажатии на кнопку 4 ничего не происходит потому, что у нас осталась пустая кнопка

// типичные ошибки: попытка передать в обработчик анонимную функцию с последующим удалением её
document.querySelector('.button5').addEventListener('click', function() {alert('Клик5')}) // повешали  анонимную функцию, сработал alert('Клик12')
document.querySelector('.button5').removeEventListener('click', function() {alert('Клик5')}) // попытка удалить обработчик с анонимной функцией, обработчик НЕ удалился
// Это потому что эти функции хоть и одинаковые по содержанию, но они считаются разными потому что мы заблаговременно их отдельно не описали
// Поэтому в обработчик события нельзя передавать анонимную функцию и стрелочную. Нужно передавать конкретную функцию которая описана в коде выше, в таком случае она будет распознана как одна и та же и removeEventListener сработает корректно

/*
* Вопрос: Как сделать обработчик клика на JS?
* Ответ: onclick
*/