// Пример 42 - Уведомления

// вызовем функцию обновления чтобы сразу применить все что в ней написано; в частности нам нужно скрыть раздел уведомлений:
update();

// подцепимся к кнопке OK и повешаем обработчик события:
document.querySelector('.notification__form button').addEventListener('click', function () {
    // в переменную запишем время из <input type="time">:
    let time = document.querySelector('.notification__form input').value;

    // в переменную запишем текст из <textarea>:
    let message = document.querySelector('.notification__form textarea').value;

    // если мы не время ни текст не ввели, то нам нужно указать об этом в уведомлении
    // подцепимся к <div class="notification__info"></div>:
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

    // если верхнее условие не сработало, в котором выход функции не сработал (return в условии), то:

    // добавим в локальное хранилище в качестве ключа значение time, в качестве значения добавим значение переменной message:
    localStorage.setItem(time, message);

    // вызовем функцию обновления:
    update();
    // это для того чтобы после добавления уведомлений они у нас появились в списке
});

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
});

function update() {
    if (!localStorage.length) {
        // если хранилище пустое, то будем скрывать весь список уведомлений:
        document.querySelector('.notification__list').hidden = true;
    } else {
        // в противном случае мы их будем показывать:
        document.querySelector('.notification__list').hidden = false;
    }

    // очистим контейнер, содержащий уведомления:
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

    // сбросим оставшееся введенным в прошлый раз текстовое поле:
    document.querySelector('.notification__form textarea').value = '';

    // далее удалим звуковое уведомление, если оно имеется:
    if (document.querySelector('.audioAlert')) { // если будет существовать элемент с классом .audioAlert
        document.querySelector('.audioAlert').remove(); // удаляем звук
    }
};

// удаление отдельных уведомлений крестиком:
// повышаем обработчик события на весь список уведомлений ис помощью делегирования будем  вычислять какую кнопку нажал пользователь и удалять соответствующую строку
document.querySelector('.notification__list').addEventListener('click', function (e) {
    // если это не кнопка с крестиком, то выходим из функции:
    if (!e.target.dataset.time) {
        return;
        // если элемент по которому мы щёлкнули НЕ имеет любого значения внутри атрибута data-time="${key}", то это значит что элемент по которому мы кликнули это не кнопка с крестиком, значит нас этот элемент не интересует и мы выходим из функции
    }

    // если верхнее условие не сработало и оказалось, что это все же крестик, то делаем следующее:
    localStorage.removeItem(e.target.dataset.time);
    // удалили из локального хранилища строку ключи-значение по названию ключа содержащемуся в атрибуте крестика

    // так как мы здесь только удалили одно содержимое из локального хранилища, а нужно еще и на странице удалить все и перерисовать, то для этого воспользуется функцией обновления:
    update();
});

// далее сделаем функционал уведомления пользователя о наступившем событии.
// создадим цикл с интервалом в 1 секунду, который каждую секунду будет проверять настал ли тот момент, который есть у нас в локальном хранилище по времени, и если да, то вывести уведомление
setInterval(() => {

    let currentDate = new Date(); // текущее полное время, но нам нужны только часы и минуты
    // каждую секунду устанавливаем новое время

    // сделаем для переменной часов в виде двузначного числа в пределах 0-9 так как у нас время в виде 05:30:
    let currentHour = currentDate.getHours(); // +1 потому что иначе получим число на 1 час меньше чем сейчас
    if (currentHour < 10) {
        currentHour = '0'+ currentHour; // прибавили 0 спереди
    }

    // то же самое для минут:
    let currentMinute = currentDate.getMinutes();
    if (currentMinute < 10) {
        currentMinute = '0'+ currentMinute; // прибавили 0 спереди
    }

    // переменная, хранящая время в необходимом нам виде:
    let currentTime = `${currentHour}:${currentMinute}`;

    // обойдём циклом локальное хранилище:
    for (let key of Object.keys(localStorage)) {
        // в переменной key  у нас будет один из ключей 05:30, который разобьём с помощью split()
        let keyHour = key.split(':')[0]; // под индексом 0 получаем часы
        let keyMinute = key.split(':')[0]; // под индексом 1 получаем минуты

        if ( (key == currentTime) || ((keyHour == currentHour) && (keyMinute < currentMinute)) ) {
        // либо полное совпадение времён, либо часы совпадают, а минуты могут быть меньше (время по минутам уже прошло например когда браузер был закрыт)
        // если момент часов прошёл, то нет необходимости в уведомлении

        // подсветим уведомление, которое сработало с помощью добавления класса, который просто добавляет цвет div'у:
        document.querySelector(`button[data-time="${key}"]`).closest('.notification__item').classList.add('notification__warning');
        // <div class="notification__item"> содержит всё уведомление: и название и крестик

        // работа со звуком:
        if (!document.querySelector('.audioAlert')) {
            // звуковой элемент нам нужен всего один на странице
            // если нет элемента содержащего звука, то создадим его:
            document.querySelector('body').insertAdjacentHTML('afterbegin', '<audio loop class="audioAlert"><source src="../source/alert.mp3" type="audio/mpeg"></source></audio>');

            // теперь нужно заставить аудиофайл играть
            document.querySelector('.audioAlert').play();
        }
    }
    }
}, 1000);

(function() {

    var message = "Привет";
  
    alert(message); // Привет
  
  })();


