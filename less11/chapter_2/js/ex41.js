// Пример 41 - Генератор тени

function generateCss () {
    // подцепимся к <input type="checkbox" id="inset" checked>
    // нас интересует наличие или отсутствие установленного свойства checked (true/false)
    let inset = document.getElementById('inset').checked;

    // далее с помощью тернарного оператора переменную  из true/false конвертируем в строку:
    inset = inset ? ' inset' : '';
    // если inset=true, то inset = ' inset', если inset=false, то inset = ''
    // специально сделали пробел спереди

    // создадим переменные и поместим в них значения остальных ползунков:
    let offsetX = document.getElementById('offsetX').value;
    let offsetY = document.getElementById('offsetY').value;
    let blur = document.getElementById('blur').value;
    let stretch = document.getElementById('stretch').value;

    let color = document.getElementById('color').value;
    // '#000000' это чёрный цвет в 16-ой системе координат
    // '#rrggbb'

    // разобьем наш цвет на 3 отдельных компонента:
    // из переменной color уберём # и возьмём первые 2 значения и переведём в 10-ную систему счисления
    let red = parseInt(color.slice(1,3), 16); // 0
    // ', 16' означает основание в 16-ной системе счисления

    let green = parseInt(color.slice(3,5), 16); // 0

    let blue = parseInt(color.slice(5,7), 16); // 0

    // прозрачность:
    let opacity = document.getElementById('opacity').value;

    // подцепимся к цветному <div id="result"></div>
    let result = document.getElementById('result');

    // подцепимся к результирующему текстовому полю
    let textarea = document.getElementById('cssCode');

    // сгенерируем правильный css-код для тени:
    let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px rgba(${red}, ${green}, ${blue}, ${opacity})`;

    // вставим css-код в поле textarea:
    textarea.value = 'box-shadow:' + str;

    // получившийся код для тени применим к <div id="result"></div>
    result.style.boxShadow = str;
}

// ко всем элементам input привяжем обработчик
for (let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateCss)
}

// один раз вызовем функцию для первоначального стартового расчёта значений:
generateCss ();
// если этого не сделать, то после обновления страницы в поле результата будет пусто до тех пор пока не поменяем любой ползунок

// Ссылки на генераторы:
// https://morphismail.github.io/myInstruments/index.html
// https://www.colorzilla.com/gradient-editor/
