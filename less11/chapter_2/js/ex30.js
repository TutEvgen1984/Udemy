// Пример 30 - Формы

// подцепимся к форме:
let form = document.forms.form1
// здесь не нужно использовать querySelector, класс или идентификатор. Используем специальное слово объекта forms и через точку имя формы
// form1 - это имя формы в атрибуте name="form1"

// второй способ подцепиться к форме по индексу:
let form2 = document.forms[0]
// нулевая форма это первая форма из массива форм расположенных в документе

console.log(form); // <form name="form1">...</form> при наведении на объект в консоли форма выделяется на html-странице

// далее рассмотрим как подцепляться к элементам формы

// свойство elements у формы содержит все элементы. Далее через точку пишем содержимое name="radioBtn"
let radioBtns = form.elements.radioBtn

console.log(radioBtns);
// Получили специальный NodeList из радио-кнопок, внутри которого содержаться все элементы с именем radioBtn:
// RadioNodeList(3) [input, input, input, value: 'btn1']

// можно выбирать из по индексу:
console.log(radioBtns[0]);
// получили: <input type="radio" name="radioBtn" value="btn1" checked="">

// можно проверять его значения:
console.log(radioBtns[0].checked); // true так как он выделен

console.log(radioBtns[0].value); // btn1

// работа с fieldset:

// подцепится с помощью name="myFieldset"
let fieldset = form.elements.myFieldset

console.log(fieldset);
// <fieldset name="myFieldset"><legend>Title</legend><input name="password" type="password"></fieldset>

// подцепимся с помощью name="password"
console.log(fieldset.elements.password);
// <input name="password" type="password">

// элемент select:

// подцепится по name="mySelect":
let select = form.elements.mySelect

console.log(select);
// <select name="mySelect">...</select>

console.log(select.options);
// HTMLOptionsCollection(3) [option, option, option, selectedIndex: 0]

console.log(select.options[2]);
// <option value="item3">Элемент 3</option>

console.log(select.options[2].selected);
// false

console.log(select.selectedIndex);
// 0 - индекс элемента который выбран

// первый способ:
select.options[2].selected = true
// теперь элемент 3 у нас стал выбранным по умолчанию

// второй способ:
select.selectedIndex = 1;
// теперь элемент 2 у нас стал выбранным по умолчанию
// это второй способ сделать выбранным один из пунктов, результат как у способа вывозе

// третий способ:
select.value = 'item3';
// теперь элемент 3 у нас стал выбранным по умолчанию

//  подцепимся к элементу mySelect2  с множественным выбором
let select2 = form.elements.mySelect2;

// превратим все пункты в массив:

let selected = Array.from(select2.options)
// создадим массив, теперь отфильтруем его так чтобы получить только выбранные значения с помощью selected (их там несколько отмечено):
.filter(option => option.selected)
// указываем метод чтобы получить значения выбранных пунктов:
.map(option => option.value)

console.log(selected);
// получили массив: (2) ['item4', 'item5']
// теперь это никакие не коррекции, это просто строки внутри массива

//  рассмотрим как создать свой собственный option с помощью конструктора класса Option
let newOpt = new Option("Элемент 4", "item7", true)
// Семантика: option = new Option(text, value, defaultSelected, selected);
// Статья: https://learn.javascript.ru/form-elements

console.log(newOpt);
// <option value="item7" selected="">Элемент 4</option>

select2.append(newOpt);
// на html странице появился дополнительный элемент 4, которого в HTML разметке нет

/*
* Вопрос: Сопоставьте значения из двух списков
* select - элемент с выбором
* form - форма
* option - пункт для выбора
 */

