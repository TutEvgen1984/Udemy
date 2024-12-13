// Пример 17 - Раскрывающееся меню

// Создание содержимого html-страницы из объекта JS:
let data = {
    "Овощи": {
        "огурцы": 5,
        "помидоры": 3
    },
    "Фрукты": {
        "красные": {
            "клубника": 2,
            "малина": 4
        },
        "зеленые": {
            "яблоко": 6,
            "лайм": 2
        }
    }
}

function createTree(container, obj) {
    document.querySelector(container).append(createUl(obj))
}

function createUl(obj) {
    if (!Object.keys(obj).length) return
    let ul = document.createElement('ul')
    for (let key in obj) {
        let li = document.createElement('li')

        if (!isNaN(obj[key]))
            li.textContent = key + ` ${obj[key]}`
        else
            li.textContent = key

        let childrenUl = createUl(obj[key])
        if (childrenUl) {
            li.append(childrenUl)
        }
        ul.append(li)
    }
    return ul
}

createTree('body', data); // Конец создания содержимого html

let ul = document.querySelector('ul')
for(let li of ul.querySelectorAll('li')) {
    let span = document.createElement('span') // 
    li.prepend(span) // span добавился отдельно перед текстом Овощи
    span.append(span.nextSibling) // Поместили с помощью метода nextSibling текстовый узел 
}


