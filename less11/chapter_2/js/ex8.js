// Создание слайдера методом учителя Исмаила Усеинова:
function sliderFromTeacher() {

    let btns = document.querySelectorAll('.slider__item') // В переменную поместили все кнопки

    // Далее циклом для каждой кнопки добавим обработчик события:
    for (let btn of btns) {
        btn.onclick = function () { //  навешиваем на каждую из кнопок свой обработчик события, при каждом щелчке по любой кнопке будет срабатывать код, который написан ниже в текущих фигурных скобках для безымянной функции
            console.log(this); // В зависимости от выбранной кнопки: <button class="slider__item active">1</button>
            console.log(this.innerHTML); // 1
            console.log('\n');

            document.querySelector('.slider__breadcrumbs .active').classList.remove('active')
            // выбираем первый элемент с классом .active внутри элемента с классом .slider__breadcrumbs (на любом уровне вложенности)
            // При написания классов, между ними стоит пробел, если его не поставить, то будет ошибка и код работать не будет. Если пробела нет, то стили будут применены только к тому элементу, который содержит все перечисленные селекторы в себе (не находится вложенным в первый, а именно у себя имеет все перечисленные классы).
            // Без пробела, и с пробелом - это два разных селектора на CSS! В модуле про CSS это было.
            // Статья: https://doka.guide/css/combined-selectors/
            // в списке классов удаляем класс active
            // в итоге после нажатия на любой из элементов JS сканирует весь <div class="slider__breadcrumbs"> находит первый попавшийся элемент с классом active и удаляет класс active их списка классов. В самом начале у нас на странице только один элемент имеет такой класс, после нажатия например на 7-ую кнопку с первой кнопки снимается класс, и в итоге не останется ни одного активного элемента
            this.classList.add('active')
            // this - это в данном случае та кнопка, на которую мы нажали
            // в classList текущей кнопки добавили класс active
            // в итоге текущая кнопка подсветилась как активная, и тыкая по разным кнопкам, класс актив перемещается на ту кнопку, на которую тыкнули

            // Изменим изображение с помощью изменения атрибута src у изображения
            document.querySelector('.slider__image img').setAttribute('src', `../img/${this.innerHTML}.jpg`)
            // Но этот метод работает только если название изображений совпадает с названием внутри кнопки. Если название изображения будет другим, то там придётся придумывать другой алгоритм
        }
    }

    // Изначально кнопок 7, ну если мы сделаем например 11 кнопок, и добавим дополнительные соответствующие картинки jpg до 11 штук, то у нас всё будет также работать
    // За счёт использования цикла for у нас написан код прослушивания для каждой кнопки один раз, а кнопок 7, и поэтому нам не нужно повторять 7 раз один и тот же код меняя только атрибут src
}

sliderFromTeacher()

// Метод от Сергей Власов.
// Найти элемент перед циклом и использовать его быстрее, чем каждый раз искать в цикле.

function sliderFromStudent() { // изолируем

    let btns = document.querySelectorAll('.slider__item')
    let img = document.querySelector('.slider__image img')

    for (let btn of btns) {
        btn.onclick = function () {
            // сначала меняем изображение в соответствии с нажатой кнопкой
            img.src = `../img/${this.innerHTML}.jpg`

            document.querySelector('.slider__breadcrumbs .active').classList.remove('active')
            this.classList.add('active')
        }
    }
}
// sliderFromStudent()

/*
* Вопрос: Выставьте в правильной последовательности для удаления класса у элемента ...
* Расположите элементы списка в правильном порядке
* Ответ:
1) document
2) querySelector
3) classList
4) remove

*/