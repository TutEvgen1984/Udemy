 // У нас в html имеются три карточки с одинаковой структурой, с одинаковыми классами. С помощью js добавим к каждой карточке по своему крестику, и этот крестик будет закрывать только свою карточку, а остальные останутся на странице. Такая система применяется довольно часто на множестве сайтов.

let items = document.querySelectorAll('.item')
// Сейчас в этой переменной хранится коллекция из всех наших карточек - <div class="item">со всем внутренним содержимым</div> - если их там будет больше чем три (хоть сколько), то они будут все здесь записаны. И все у нас будет работать универсально.

// пройдемся циклом по всем этим элементам:
for (let item of items) { // для каждой карточки
    item.querySelector('.item-title').insertAdjacentHTML("beforeend", '<button class="close">&times;</button>') // добавили крестик
    item.querySelector('.close').onclick = () => item.remove()
    // item.querySelector - ищем конкретно в карточке и не во всём документе класс .item-title - это вложенный второй div
    // так как с помощью insertAdjacentHTML мы уже добавили кнопку Х, то сразу же после этого ищем её querySelector'ом и вешаем на неё слушатель. У стрелочной функции в скобках пусто потому, что нам не нужно использовать само событие
    // item.remove() означает следующее, каждый item это попеременно перебором каждая карточка <div class="item">со всем внутренним содержимым</div>
    // навешав слушатель на кнопку крестика (), метод .remove() удалит этот <div class="item">со всем внутренним содержимым</div> в случае нажатия на кнопку-крестик <button class="close">&times;</button>

    // Дополнительно от ученика Александра:
    // Добавил функцию, чтобы крестик появлялся, когда наводишь мышью на элемент и убирался, когда мышь убираешь с элемента. Долго мучался, оказывается невозможно поставить hidden для button. Получилось через display: none

    item.querySelector('.close').style.display = 'none'
    // это мы первоначально спрятали кнопку с крестиком у текущей карточки с помощью .style.display = 'none'

    item.addEventListener('mouseover', () => {
        item.querySelector('.close').style.display = 'flex'
        // навешали слушатель на всю текущую карточку, что при наведении курсора мышки на неё у нас появится кнопка с крестиком с помощью .style.display = 'flex'
    })

    item.addEventListener('mouseout', () => {
        let styleDisplay = item.querySelector('.close').style.display
        // это мы подцепились к стилю текущей карточки item

        if(styleDisplay == 'flex') {
            item.querySelector('.close').style.display = 'none'
            // если кнопка х видна, то делаем ее́ невидимой
        }
    })




}
// &times; - это символ крестика, он достаточно красиво отображается
// можно  использовать символ X,  ну он будет немного по разному выглядеть в зависимости от шрифта,  что не очень
// То, что кнопки встала в самом в правом верхнем углу, это благодаря CSS

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

.close:hover {
  background-color: #000;
  color: #fff;
}
*/



