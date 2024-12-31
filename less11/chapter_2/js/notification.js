// Пример 42 - Уведомления

// вызовем функцию обновления чтобы сразу применить все что в ней написано; в частности нам нужно скрыть раздел уведомлений:
update();

// подцепимся к кнопке OK и повышаем обработчик события:
document.querySelector('.notification__form button').addEventListener('click', function () {
    // в переменную запишем время из <input type="time">:
    let time = document.querySelector('.notification__form input').value;

    // в переменную запишем  текста из <textarea>:
    let message = document.querySelector('.notification__form textarea').value;

    // если мы не время ни текст не ввели,  то нам нужно указать об этом в уведомлении
    // подцепимся к  <div class="notification__info"></div>:
    let info = document.querySelector('.notification__info');

    // если переменной time нет или она заполнена не полностью, ИЛИ (логическое) тоже самое для message, то:
    if (!time || !message) {
        info.textContent = 'Укажите время и сообщение';
        info.style.opacity = 1;
        // непрозрачность ставим 1 чтобы полностью его показать (по умолчанию opacity: 0;)

        // через 2 секунды скроем сообщение (видимость исчезнет, но сам текст останется):
        setTimeout(() => {
            info.style.opacity = 0;
        }, 2000);

        // через 3 секунды сотрём текст у <div class="notification__info"></div>
        setTimeout(() => {
            info.textContent = ''; // значение пустой строки
        }, 3000);

        return; //  выход из функции

        // в итоге если ничего не ввести и нажать ОК, то появляется "Укажите время и сообщение" и плавно исчезает (transition: 1s;)
    }

    // если верхнее условие не сработало,в котором выход функции не сработал (return  в условии), то:

    // добавим в локальное хранилище в качестве ключа значение time, в качестве значения добавим значение переменной message:
    localStorage.setItem(time, message);

    // вызовем функцию обновления:
    update();
    // это для того чтобы после добавления уведомлений они у нас появились в списке
})

// опишем поведение кнопки <button>Очистить список</button>
document.querySelector('.notification__list > button').addEventListener('click', function () {
    if (localStorage.length && confirm('Очистить список уведомлений?')) {
        // если есть в хранилище хотя бы одна запись и тут же вызывается всплывающее окно с вопросом, и в нём будет нажат OK:

        localStorage.clear(); // очищаем всё локальное хранилище

        // вызовем функцию обновления 
        update();

        // скроем весь список уведомлений:
        document.querySelector('.notification__list').hidden = true;
    } else if (!localStorage.length) {
        // если локальное хранилище пустое, то выведем  всплывающее окно:
        alert('Уведомлений нет!');
    }
})

function update() {
    if (!localStorage.length) {
        // если хранилище пустое, то будем скрывать весь список уведомлений:
        document.querySelector('.notification__list').hidden = true;
    } else {
        // в противном случае мы их будем показывать:
        document.querySelector('.notification__list').hidden = false;
    }

    // очистим контейнер содержащий уведомления:
    document.querySelector('.notification__list > div').innerHTML = '';

    // сбросим сообщение с информацией:
    document.querySelector('.notification__info').textContent = '';

    // добавим все уведомления, которые есть в локальном хранилище в текущий список:
    for (let key of Object.keys(localStorage)) {
        document.querySelector('.notification__list > div').insertAdjacentHTML('beforeend', `
            <div class="notification__item">
                <div>${key} - ${localStorage.getItem(key)}</div>
                <button data-time="${key}">&times;</button>
            </div>
           `)
                // ${key} - это значение ключа, то есть само время уведомления
                // data-time=${key} собственный атрибут содержащий время для удобства его последующего удаления
    }

    // сбросим поля ввода времени:
    document.querySelector('.notification__form input').value = '';

    // сбросим  оставшееся введенным в прошлый раз текстовое поле:  
    document.querySelector('.notification__form textarea').value = '';
}
