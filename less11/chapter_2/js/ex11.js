document.querySelector('.block').addEventListener("click", function(e) {
    // .block это класс, привязанный к DIV 3

    console.log(this);
    // Контекст изменился и стал как бы неправильным:
    // Получили в консоли весь DIV1 со всеми вложенными в него DIVами:
    // <div onclick="alert('DIV 1')" style="border: 2px solid tomato; padding: 10px" class="block">
    // DIV 1
    // <div onclick="alert('DIV 2')" style="border: 2px solid tomato; padding: 10px">
    //   DIV 2
    //   <div onclick="alert('DIV 3')" style="border: 2px solid tomato; padding: 10px" class="stop">
    //     DIV 3
    //    </div>
    //  </div>
    // </div>
    // если в процессе работы сайта появляются ошибки, то скорее всего контекст this является не тем элементом, на который мы нажимаем, а его родителем, чтобы этого избежать используют e.target, о котором далее.

    console.log(e.target);
    // Получили конкретно тот элемент, по которому щёлкнули:
    // <div onclick="alert('DIV 3')" style="border: 2px solid tomato; padding: 10px" class="stop">
    // DIV 3
    // </div>
})
// При нажатии мышкой на DIV3 получаем срабатывание подряд alert('DIV 3') alert('DIV 2') alert('DIV 1'). Это - из-за эффекта всплытия. То есть в этом эффекте недостаток заключается в том, что нажали на 3-ий по вложенности элемент, а сработали все 3, и если к этим 3-м элементам привязаны разные события нужные, то они сработают как бы самопроизвольно ошибочно без нажатия.

// Далее попробуем прекратить всплытие:

// Раскомментировать:
// document.querySelector('.stop').addEventListener("click", function(e) {
//     e.stopPropagation()
// })

// Теперь при клике по DIV 3 сработал только alert('DIV 3'), а 'DIV 2 и DIV 1 не сработали, в консоли пусто. Всплытие прекратилось на элементе DIV 3 и ничего далее не выполняется. ПРи этом если к DIV 3 привязано несколько обработчиков события addEventListener, то они все сработают и выполнят свои функции, а вот далее это не пойдет.

// 3 Фазы:
// Фаза 1 - погружение ( Capture Phase (1) )
// Фаза 2 - цель (Target Phase (2) )
// Фаза 3 - Всплытие (Bubbling Phase (3) )
