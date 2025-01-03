 // У нас в html имеются три карточки с одинаковой структурой, с одинаковыми классами. С помощью js добавим к каждой карточке по своему крестику (а не заранее нарисованные в html, как мы привыкли). И этот крестик будет закрывать только свою карточку, а остальные останутся на странице. Такая система применяется довольно часто на множестве сайтов.

let items = document.querySelectorAll('.item')
// Сейчас в этой переменной хранится коллекция из всех наших карточек - <div class="item">со всем внутренним содержимым</div> - если их там будет больше чем три (хоть сколько), то они будут все здесь записаны. И все у нас будет работать универсально.

// Пройдемся циклом по всем этим элементам:
for (let item of items) { // цикл для каждой карточки
    item.querySelector('.item-title').insertAdjacentHTML("beforeend", '<button class="close">&times;</button>') // добавили крестик после <h3>Петр Иванович</h3>
    // item.querySelector - ищем конкретно в карточке, а не во всём документе, класс .item-title - это вложенный второй div, в котором располагается заголовок карточки, и в самый конец её добавляем кнопку с крестиком.
    // Квери-селекторить можно начинать не издалека начиная с document, а начиная с места, в которое уже забрались циклом, в данном случае с item

    item.querySelector('.close').onclick = () => item.remove()
    // так как с помощью insertAdjacentHTML мы уже добавили кнопку Х, то сразу же после этого ищем её querySelector'ом и вешаем на неё слушатель. У стрелочной функции в скобках пусто потому, что нам не нужно использовать само событие
    // item.remove() означает следующее, каждый item это попеременно перебором каждая карточка <div class="item">со всем внутренним содержимым</div>
    // навешав слушатель на кнопку крестика, метод .remove() удалит этот <div class="item">со всем внутренним содержимым</div> в случае нажатия на кнопку-крестик <button class="close">&times;</button>

    // Дополнительно от ученика Александра:
    // Добавил функцию, чтобы крестик появлялся, когда наводишь мышью на элемент и убирался, когда мышь убираешь с элемента. Долго мучался, оказывается невозможно поставить hidden для button. Получилось через display: none

    item.querySelector('.close').style.display = 'none'
    // это мы первоначально спрятали кнопку с крестиком у текущей карточки с помощью .style.display = 'none'

    item.addEventListener('mouseover', () => { // слушатель при наведении мышки на карточку
        item.querySelector('.close').style.display = 'flex'
        // навешали слушатель на всю текущую карточку, что при наведении курсора мышки на неё, у нас появится кнопка с крестиком с помощью .style.display = 'flex'
    })

    item.addEventListener('mouseout', () => { // слушатель при отведении мышки с карточки
        let styleDisplay = item.querySelector('.close').style.display
        // это мы подцепились к стилю текущей кнопки Х

        if(styleDisplay == 'flex') {
            item.querySelector('.close').style.display = 'none'
            // если кнопка Х видна, то делаем кнопку Х невидимой
        }
    })

}
// &times; - это математический символ умножить, он достаточно красиво отображается.
// https://htmlweb.ru/html/symbols.php
// можно  использовать символ X,  ну он будет немного по разному выглядеть в зависимости от шрифта,  что не очень
// То, что кнопки встала в самом в правом верхнем углу, это благодаря CSS display: flex;

// Во первых карточка имеет класс
/* .item-title {
display: flex; // расположение в строку
justify-content: space-between; // раздвинуть по краям, между элементами пустое пространство
align-items: center; // вертикальное выравнивание
*/

// кнопка имеет класс
/*
.close {
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 2px solid black;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
}

.close:hover { // при наведении на кнопку Х
  background-color: #000; // фон становится чёрным (до этого был прозрачным)
  color: #fff; // крестик становится белым (до этого был черным по умолчанию)
}
*/

/*
* Вопрос: elem.insertAdjacentHTML(where, html); Куда добавится HTML с помощью этого метода?
* Ответ:
afterBegin - внутрь elem, в самое начало
afterEnd - после elem
beforeBegin - перед elem
beforeEnd - внутрь elem, в конец

Статья: https://basicweb.ru/javascript/js_element_insertadjacenthtml.php

*/

