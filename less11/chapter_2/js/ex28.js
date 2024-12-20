// Пример 28 - События клавиатуры

// Существует 2 события клавиатуры: keydown и keyup
// событие keydown - когда клавиша нажата, при этом если держать клавишу, то срабатывание будет очень частым как из пулемёта
// событие keyup -  когда клавиша отпущена, это поможет  отдавать клавишу при нажатии без многократного срабатывания как у keydown, так как кнопку нельзя отпустить 2 раза

// на документ добавит обработчик события keyup
/* document.addEventListener('keyup', function (e) {
    console.log('физический код клавиши e.code: ' + e.code); // KeyF
    console.log('символ e.key: ' + e.key); // f
    console.log('\n');
}) */

// создадим обработчик, следящий за сочетанием Ctrl+Z
document.addEventListener('keydown', function (e) {
    if ((e.code == "KeyZ") && (e.ctrlKey || e.metaKey)) {
    console.log('вы нажали Ctrl+Z')}; // вы нажали Ctrl+Z
})

