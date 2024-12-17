// Пример 22 - Какая кнопка мыши нажата

// Отловим кнопки мыши:
document.querySelector('.bgc').addEventListener('mousedown', function(e) {
    console.log(e.button); // 0 (ЛКМ) / 1 (СКМ) / 2 (ПКМ)
    switch (e.button) {
        case 0:
        console.log('Нажата левая кнопка мыши'); // Нажата левая кнопка мыши
        break;

        case 1:
        console.log('Нажата средняя кнопка мыши'); // Нажата средняя кнопка мыши
        break;

        case 2:
        console.log('Нажата правая кнопка мыши'); // Нажата правая кнопка мыши
        break;
    }
})
// В старом коде вы можете встретить event.which свойство – это старый нестандартный способ получения кнопки
// специального кода для отслеживания двойного клика нет
// Статья про which: https://learn.javascript.ru/mouse-events-basics
// Статья про switch: https://doka.guide/js/switch/