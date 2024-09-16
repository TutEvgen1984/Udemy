// * Создадим карточки для каждого человека из константы people и поместим их на страницу html
    for (let i = 0; i < people.length; i++) {
        let item = document.createElement('div') // для каждой карточки свой дополнительный div
        item.classList.add('item') // это заранее созданный класс для оформления карточки
        item.innerHTML = `
        ФИО: ${people[i]["name"]['f']} ${people[i]["name"]['i']} ${people[i]["name"]['o']} <br>
        Номера телефона: ${people[i]['number'].join(', ')} <br>
        День рождения: ${people[i]['date']['d']} ${month[+people[i]['date']['m']]} ${people[i]['date']['y']} <br>
        Комната: ${people[i]["room"]} <br>
    `
        // С помощью метода join объединяем 2 номера через запятую (объединяем 2 элемента массива), если его не поставить, то номера сами сольются вместе через запятую и пробела не будет между ним, это работает только для массивов (для элементов не работает)

        // День рождения месяц указываем не в виде числа, а в виде Текста, который хранится в константе month  под соответствующим индексом, month[1] это будет 'Января', а номер месяца из соответствующего числа записанного в константе people, и это число используется как индекс для константы month. "+"" перед people стоит специально, чтобы в случае если там не число а строка, то преобразовать её в число

        document.querySelector('.items').append(item)
    }

// * Создадим из нашей программы функцию:
function createCords(selector, array) {
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('div')
        item.classList.add('item')
        item.innerHTML = `
        ФИО: ${array[i]["name"]['f']} ${array[i]["name"]['i']} ${array[i][`name`]['o']} <br>
        Номера телефона: ${array[i]['number'].join(', ')} <br>
        День рождения: ${array[i]['date']['d']} ${month[+array[i]['date']['m']]} ${array[i]['date']['y']} <br>
        Комната: ${array[i]["room"]} <br>
    `
        document.querySelector(selector).append(item)
    }
}