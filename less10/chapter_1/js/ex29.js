
// * Далее метод Исмаила Усеинова в котором убран бесполезный цикл for i=1-12:
function ismail() {
    people.forEach(function (item) { // у нас 4 человека, поэтому метод сделает цикл на 4 итерации, каждую итерацию в качестве item у нас будет перебирающийся один из 4 объектов из массива people
        // Для каждого человека создадим переменную, содержащую ФИО;
        let fio = `${item["name"]["f"]} ${item["name"]["i"]} ${item["name"]["o"]}`

        // Для каждого человека создадим переменную, содержащую дату рождения с месяцем в виде текста. Поля с датой рождения может и не быть, для этого делаем предварительную проверку с помощью тернарного оператора:
        let date = item["date"] ?
            // "?" означает - если item с ключом date существует, то переменной date присваиваем следующее
            `${item["date"]["d"]} ${month[+item["date"]["m"]]} ${item["date"]["y"]}` : ``
        // Получили: 17 июня 1996
        // ":" означает - если item с ключом date НЕ существует, то в переменную date присваиваем пустую строку

        // Далее используем переменные fio и date
        let element = document.createElement('p') // создали абзац
        element.innerHTML = fio + " " + date // в этот абзац поместили: "Степанов Борис Иванович 17 июня 1996"
        // Но на html-страницу этот абзац не помещаем пока

        // Далее создадим карточку:
        let i = +item["date"]["m"] // переменная, содержащая месяц в виде числа
        if (document.querySelector(`.items > div .item${i}`) == null) {
            // проверяем существует ли уже карточка для этого месяца (она создастся на первом человеке родившимся в июне, а попав на второго человека родившегося тоже в июне без этой проверки мы будем создавать карточку второй раз, что является косяком): селектором ищем элемент имеющий класс .items, внутри которого вложен div, у которого в атрибуте class написано item${i}. Это в CSS называется комбинированный селектор: когда пишется сначала элемент, а после него точка и имя класса p.class12 (причём пробела между ними быть не должно вроде), означает что оформление применится только к элементу p имеющему класс class12, здесь комбинируется выбор элемента с выбором класса, поэтому называется комбинированным.
            // == null означает, что карточки такой не существует и тем самым мы поймём, что карточка не была создана ни разу. С помощью такой конструкции мы ищем селектор динамически, а не с помощью заранее установленной конструкции
            let div_element = document.createElement('div') // создали div для серой карточки
            div_element.classList.add('item') // присвоили ей класс item, тем самым покрасив её с помощью CSS
            div_element.innerHTML = `
                    <h4>${monthIp[i]}</h4>
                    <div class="item${i}"></div>
                    `
            // <h4>${monthIp[i]}</h4>: в карточке написали ИЮНЬ
            // <div class="item${i}"></div> в карточку поместили пустой div с классом item6

            document.querySelector('.items').append(div_element) // в общий пустой div располагающийся изначально на html-странице добавляем серую карточку, содержащую ИЮНЬ и пустой div с классом item6
        } // завершили создание пустой карточки
        // Далее в пустую карточку добавим абзац с текстом:
        document.querySelector(`.items > div .item${i}`).append(element)
        // В существующую серую карточку в пустой div в конец впихнули Степанов Борис Иванович 17 июня 1996
        // когда итерация forEach переключится на второго человека тоже родившегося в июне, в div с классом item6, в который уже до этого был запихнут один человек, мы подпихнём второго человека, при этом карточка не создастся так как сработает проверка if

    }) // закрытие функции forEach
} // конец изолирования
ismail()

// * Далее метод Алексей Чванов из комментариев
function aleksei() { // изолируем код чтобы его не выполнять

    // Далее создадим карточки:
    let months = [] // Создаём пустой массив чтобы по нему выявлять совпадение
    people.forEach(person => { // Пробег №1 по переменной people
        let div_element = document.createElement('div')
        div_element.classList.add('item') // класс для покраски в CSS
        let monthName = `${monthIp[+person['date']['m']]}` // Июнь
        if (!months.includes(monthName)) { // если в months не содержит Июнь, то:
            div_element.innerHTML = `<h4>${monthName}</h4>` // <h4>Июнь</h4>
            months.push(monthName) // в массив добавили Июнь
            document.querySelector('.items').append(div_element)
        } // закрытие if

        // Далее заполним карточки
        let fio = `${person["name"]["f"]} ${person["name"]["i"]} ${person["name"]["o"]}`
        let date = person["date"] ? `${person["date"]["d"]} ${month[+person["date"]["m"]]} ${person["date"]["y"]}` : ``
        let element = document.createElement('p')
        element.innerHTML = `${fio} - ${date}<br>` // добавляем br так как ниже нет div который бы самопроизвольно начался бы с новой строки, дальше будет "p" который пойдет в этой же строке
        // Далее найдем карточку, куда будем вставлять содержимое
        let items = document.querySelectorAll('.item') // на каждом шаге forEach находим все карточки
        items.forEach(item => {
            if (item.querySelector('h4').textContent == monthName) { // для каждой найденной карточки проверяем не содержится ли в ней, в h4, название месяца
                item.appendChild(element) // всовываем содержимое в карточку. Разницы между appendChild и append не видно

                /* appendChild() это DOM метод, а append() это метод jQuery, но практически ключевое отличие заключается в том, что appendChild принимает node в качестве параметра. под этим я подразумеваю, что если вы хотите добавить пустой абзац в DOM, вам нужно сначала создать этот p элемент

                var p = document.createElement('p')

                затем вы можете добавить его в DOM, тогда как jQuery append() создает этот узел для вас и сразу добавляет его в DOM, будь то текстовый элемент, html-элемент или комбинация!

                $('p').append('<span> I have been appended </span>');*/
            } // закрытие if
        }) // закрытие items.forEach
    }) // закрытие people.forEach

} // Конец изоляции
// aleksei()

// * Далее из урока с бесполезным циклом for i=1-12 (можно не читать):
function lesson_with_for_1to12() {
    people.forEach(function (item) { 
        let fio = `${item["name"]["f"]} ${item["name"]["i"]} ${item["name"]["o"]}`

        let date = item["date"] ? `${item["date"]["d"]} ${month[+item["date"]["m"]]} ${item["date"]["y"]}` : ``

        let element = document.createElement('p')
        element.innerHTML = fio + " " + date

        for (let i = 1; i <= 12; i++) { // находясь внутри какой-либо одной из 4-ёх итерации прохода forEach по людям, делаем ещё 12 циклов for
            if (item["date"]["m"] == i) { // если у текущего элемента массива месяц будет совпадать с i, то:
                // причём совпадёт он только на 6-ом проходе, а 5 первых циклов пролетит в ноль, а так же с 7 до 12 в ноль.
                if (document.querySelector(`.items > div .item${i}`) == null) {
                    let div_element = document.createElement('div')
                    div_element.classList.add('item')
                    div_element.innerHTML = `
                        <h4>${monthIp[i]}</h4>
                        <div class="item${i}"></div>`

                    document.querySelector('.items').append(div_element)
                }
                document.querySelector(`.items > div .item${i}`).append(element)
            }
        }
    })
} // закрытие изолирующей функции
