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
        // С помощью метода join объединяем 2 номера через запятую (объединяем 2 элемента массива), если его не поставить, то номера сами сольются вместе через запятую и пробела не будет между ним, это работает только для массивов (для объектов не работает)

        // День рождения месяц указываем не в виде числа, а в виде Текста, который хранится в константе month под соответствующим индексом, month[1] это будет 'Января', а номер месяца из соответствующего числа записанного в константе people в виде числа используется как индекс для константы month. "+"" перед people стоит специально, чтобы в случае если там не число а строка, то преобразовать её в число

        document.querySelector('.items').append(item)
    }

// * Создадим из нашей программы функцию:
// querySelector('.items') меняем на querySelector(selector)
// С помощью Найти (CTRL+F) заменяем константу people на array
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

// удобство функции в том, что теперь мы можем указывать с каким аналогичным содержимым работать (любой другой подобный массив), и можем указывать любое место на html-странице, куда вставлять результат

// * Сортировка карточек по фамилии:

// let people_sorted_by_f =  people.sort((a,b) => a.name.f > b.name.f ? 1 : -1)
// на первом шаге В качестве "a" берётся нулевой элемент массива, то есть весь объект {}, в котором room: 8
// В качестве "b" берётся первый элемент массива, то есть весь объект {}, в котором room: 3
// Если a.name.f больше b.name.f, то вернуть 1, (что для метода является сигналом на то, что надо поменять операнды местами)
// В противном случае (если меньше или равенство), то вернуть -1 (сигнал ничего не делать)
// В случае если они равны, то по идее должен быть 0, который даёт сигнал ничего не делать (такой же как при -1)
// ! при это сортируется оригинальный people. если в консоли написать people и нажать enter, то получим массив в котором первый элемент Архипов и так далее, то есть оригинал отсортирован

// ! Существует ещё метод toSorted, который не сортирует оригинал - не изменяет оригинальный массив.

let people_sorted_by_f =  people.toSorted((a,b) => a.name.f > b.name.f ? 1 : -1)

createCords('.sorted_by_f', people_sorted_by_f) // убрать комментирование для выполнения

// * Сортировка карточек по номеру комнаты:
let people_sorted_by_room =  people.toSorted((a,b) => a.room - b.room)
// так как в ключах room содержатся числа, то метод будет работать с числами сам и не нужно прописывать действия того, что делать если получится больше 1 или меньше

createCords('.sorted_by_room', people_sorted_by_room) // убрать комментирование для выполнения

// * Напишите код, чтобы извлечь число 2485841 из объекта PHONE_NUMBER
// Объект PHONE_NUMBER находится в файле const.js, который вы скачали в начале этого модуля. Он выглядит так:
/*// Номера телефонов
const PHONE_NUMBER = {
    'Группа номеров 1': [
      ['Номер 1', '2591514'],
      ['Номер 2', '2182742'],
      ['Номер 3', '2791821']
    ],
    'Группа номеров 2': [
      ['Номер 1', '2485841']
    ],
    'Группа номеров 3': [
      ['Номер 1', '212433, 243574'],
      ['Номер 2', '442431, 552432']
    ]
  }*/

// Заполните пропуски (для тестирования результата совет использовать консоль, да прибудет с вами сила)
// Решение:
// let num = PHONE_NUMBER["Группа номеров 2"][0][1]
/*Верно решили 277 учащихся
Из всех попыток 20% верных

PHONE_NUMBER["Группа номеров 2"][0]
После ["Группа номеров 2"] пишем [0] потому что в константе после ":" есть дополнительные как бы лишние квадратные скобки, в которых должно быть несколько значений массива (в нашем случае несколько массивов через запятую). Обманка в том, что в нашем случае имеется всего 1 элемент массива, и-за чего хочется после ["Группа номеров 2"] сразу написать [1] обратившись к номеру 2485841 в массиве ['Номер 1', '2485841'], а нужно указать [0] уточнив, что берём нулевой элемент в массиве [ ['Номер 1', '2485841'] ] несмотря на то, что там всего один элемент массива.
*/