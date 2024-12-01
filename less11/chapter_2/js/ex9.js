function darkThemeByTeacher(params) {
    // подцепимся к чекбоксу
    let checkbox = document.querySelector('.theme-checkbox')
    console.log(checkbox); // Получили в консоли чекбокс в виде раскрывающегося объекта.
    // Раскрываем объект и видим свойство checked
    // Это особое свойство checked, которое есть у чекбоксов. Значение этого поля булево, и мы можем использовать это в нашей функции
    // Статья: https://doka.guide/js/deal-with-forms/

    // Вдобавок есть Атрибут checked, который делает отмеченным по умолчанию флажок checkbox или переключатель radio. Является атрибутом без значения.
    // В следующем примере сделаны два флажка checkbox: первый будет отмечен (так как ему дан атрибут checked), а второй - нет:
    // <input type="checkbox" checked>
    // <input type="checkbox"></input>
    // https://code.mu/ru/markup/manual/html/attr/checked/

    // Событие onchange происходит, когда изменяется значение элемента HTML. Это событие похоже на событие oninput. Разница в том, что событие oninput происходит сразу после изменения значения элемента, а onchange происходит, когда элемент теряет фокус, после изменения содержимого. Другое отличие в том, что событие onchange также работает с элементами <select>: <select onchange="myFunction()">.
    // Синтаксис In HTML: <element onchange="myScript">
    // Синтаксис In JavaScript: object.onchange = function(){myScript};
    // Статья: https://www.schoolsw3.com/jsref/event_onchange.php

    // Сразу после загрузки страницы начинаем проверять не установил ли пользователь в прошлый раз тёмную тему:
    if (localStorage.getItem('darkTheme') == "true") { // с помощью нестрогого равенства проверяем значение на true (обязательно писать в кавычках, без кавычек работать не будет потому что в localStorage оно хранится в виде строки, а не в виде булева)
        theme.setAttribute("href", '../css/dark.css') // по id="theme" у link меняем атрибут подключения CSS на файл для тёмной темы
        checkbox.checked = true //  принудительно устанавливаем чекбокс положение true (горит галочка). Если этого не сделать, то тема тёмная применится, а галочка стоять не будет - это будет странно и пользователь запутается
    }
    // Этот код, который выше, сработает только в том случае, если ранее пользователь выбрал тёмную тему

    // Далее к чекбоксу прикрепим функцию, срабатывающую при изменении значения чекбокса
    checkbox.onchange = function () {
        console.log('onchange сработал'); // onchange сработал (несколько раз)

        console.log(this.checked); // true / false  в зависимости от галочки (есть или нет)

        console.log('\n');

        if (this.checked) { // если checked=true (то есть если галочка стоит = пользователь установил тёмную тему)
            theme.setAttribute("href", "../css/dark.css") // меняем атрибут у link по id="theme"
            localStorage.setItem('darkTheme', true) // в локальном хранилище создаём переменную darkTheme и присваиваем ей значение true так как тема установлена на тёмную
        } else { // то есть если this.checked будет false
            theme.setAttribute("href", "../css/light.css")
            localStorage.setItem('darkTheme', false)
        }
        // Без localStorage работает переключение темы сайта. Но если обновить страницу, то тема возвращается в светлую по умолчанию. Поэтому используем для сохранения выбранные темы localStorage
        // F12/Приложение/Локальное хранилище : смотреть наши изменяющиеся значения
        // localStorage.setItem первоначально устанавливает значение, но если оно уже существует, то он его только меняет
    }
}
darkThemeByTeacher()

// Код от студента Алексей Чванов:
function darkThemeByAlekseyChvanov() {
    // Проверка локального хранилища:
    let onChecked = localStorage.getItem('darkTheme') == 'true'
    console.log("🚀 ~ onChecked:", onChecked) // 🚀 ~ onChecked: false / true
    // onChecked присвоится true если darkTheme = true
    // onChecked присвоится false если там нет записи true

    let checkbox = document.querySelector('.theme-checkbox')

    // установка checkbox согласно localStorage
    checkbox.checked = onChecked

    // установка CSS у элемента link согласно localStorage
    theme.setAttribute("href", onChecked ? '../css/dark.css' : '../css/light.css')

    checkbox.onchange = function () {
        //При каждом нажатии пользователя на чекбокс задаем переменой onChecked текущее актуальное значение input
        let onChecked = this.checked

        // подключаем CSS в соответствии со значением onChecked
        theme.setAttribute("href", onChecked ? '../css/dark.css' : '../css/light.css')

        // в localStorage записываем значение в соответствии со значением onChecked
        localStorage.setItem('darkTheme', onChecked)
    }
}
// darkThemeByAlekseyChvanov()

// Код от студента Арсений Спирин:
function darkThemeByArseniySpirin() {
    checkbox.onchange = function () {
        // в localStorage записываем значение в соответствии с текущим значением свойства checked у input
        localStorage.setItem('darkTheme', this.checked)

        if (this.checked) { // если у чекбокса свойства checked=true
            // подключаем тёмный CSS
            theme.setAttribute('href', '../css/dark.css')
        } else {
            // подключаем светлый CSS
            theme.setAttribute('href', '../css/light.css')
        }

    }
}

/*

* Вопрос: Как проверить что чекбокс нажат?
* Ответ: this.checked

*/