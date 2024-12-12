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

    console.log(e.target);
    // Получили тот элемент по которому щёлкнули:
    // <div onclick="alert('DIV 3')" style="border: 2px solid tomato; padding: 10px" class="stop">
    // DIV 3
    // </div>
})
// При нажатии мышкой на DIV3 получаем срабатывание подряд alert('DIV 3') alert('DIV 2') alert('DIV 1'). Это - из-за эффекта всплытия. То есть в этом эффекте недостаток заключается в том, что нажали на 3-ий по вложенности элемент, а сработали все 3, и если к этим 3-м элементам привязаны разные события нужные, то они сработают как бы самопроизвольно ошибочно без нажатия.


