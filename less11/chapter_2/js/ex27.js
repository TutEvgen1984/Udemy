// Пример 27 - Слайдер (Range)

// Вывод координат на html-страницу:
let elem = document.getElementById('clientXY');

document.addEventListener('mousemove', function(event) {
	elem.innerHTML = 'event.clientX:' + event.clientX + ' | ' + 'event.clientY:' + event.clientY;
});


// Подцепимся к кружку, который внутри полоски:
let btn = slider.querySelector('.slider__btn');

//  Нам нужно высчитать позицию мышки и перетащить туда нашу кнопку.

btn.onmousedown = function (e) {

    // Предотвратим какое-либо случайное выделение при щелчке:
    e.preventDefault()

    // Далее будем использовать специальные метрики для того, чтобы наш слайдер независимо от ширины, которую мы можем установить в CSS. В результате у нас будет всё универсально.

    // В переменной будет храниться позиция нашей кнопки
    let shiftX = e.clientX - btn.getBoundingClientRect().left;

    console.log("🚀 ~ e.clientX:", e.clientX) // 34 . Это - координаты курсора мышки относительно окна пользователя

    console.log("🚀 ~ btn.getBoundingClientRect().left:", btn.getBoundingClientRect().left) //25
    // btn.getBoundingClientRect().left - это координаты начала изображения нашего шарика-ползунка, так как мы его все время передвигаем, то и координаты левой его стороны меняются. Если щелкать в ползунок так, чтоб он не двигался, то координаты остаются одинаковыми
    // при каждом щелчке и перетаскивании ползунка числа меняются, но разница остается = примерно 15
    console.log(shiftX); // 13 | 11 | 8 | ...

    document.addEventListener('mousemove', onMouseMove);
    // Каждое движение мыши при зажатой ЛКМ над элементом генерирует это событие.
    // onMouseMove - своя функция

    document.addEventListener('mouseup', onMouseUp);
    // mouseup - Кнопка мыши будет отпущена над элементом.
    // onMouseUp - своя функция

    // Функция, которая будет срабатывать в тот момент, когда мы двигаем мышкой:
    function onMouseMove(e) {
        // Высчитываем новое значение нашего ползунка:
        let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left;
        console.log('slider.getBoundingClientRect().left : ' + slider.getBoundingClientRect().left);
        // Неизменно: 25

        if (newLeft < 0) {
            newLeft = 0;
            // если курсор мышки пользователь перевёл левее поля для ползунка, то не позволяем координате стать меньше 0
        }

        // создадим переменную правой границы:
        let rightEdge = slider.offsetWidth - btn.offsetWidth;
        // slider.offsetWidth - ширина слайдера.
        // btn.offsetWidth -  ширина нашей кнопки.

        if (newLeft > rightEdge) {
            newLeft = rightEdge;
            // если курсор мышки пользователь потянет правее поля для ползунка, то не позволяем координате стать больше правой границы. Это будет крайняя правая точка.
        }

        //  Для ползунка устанавливаем левую координату:
        btn.style.left = newLeft + 'px';
    }

    // Напишем функцию в тот момент, когда кнопка пользователем отпущена:
    function onMouseUp(e) {
        // Удалим обработчики события с документа:
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

}

// когда начинается перетаскивание какого либо элемента, срабатывает стандартное событие JS ondragstart:
btn.ondragstart = function () {
    return false;
    // это стандартное событие нам не подходит поэтому мы предотвращаем его срабатывание по умолчанию, и обрабатываем все сами кодом выше так как нам требуется
}

