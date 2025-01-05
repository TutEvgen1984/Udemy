// 12.2 Анимация на JS и CSS

// при ЛКМ на тексте  создадим событие по изменению  цвета фона
document.querySelector('.animated').onclick = function () {
    this.style.backgroundColor = 'tomato';
    // здесь в JS мы установили только другой цвет при щелчке, но так как в CSS  прописано:
    /* .animated {
        transition-property: background-color;
        transition-duration: 3s;
     }  */
    // то  получаем не резкое изменение цвета,а планок в течении 3 сек
  }

/* в transition-property (свойство перехода) записываются свойства, которые нужно анимировать, здесь могут быть любые CSS свойства,  анимировать можно не все свойства, но большинство из них.
transition-property: all - означает анимировать всё.

transition-duration - длительность перехода - определяет сколько времени займёт анимация, время должно быть задано в формате css то есть в s и ms.

transition-delay определяет задержку анимации. Если стоит 1 секунда при transition-duration: 3s, то анимация начнётся через 1 секунду после изменения и продлится те же 3 секунды, итого анимация будет 4 секунды.
его поставить отрицательное значение, то анимация начнется с середины
transition-duration: 3s;
transition-delay: -2s;
итог: 3-2 = 1 секунда
то есть пропускается момент её плавного появления

Свойство transition это шорткат (сокращение). Как, например, margin или background. Оно включает в себя несколько подсвойств:

transition-property — указываем свойство, которое хотим плавно изменить;
transition-duration — длительность перехода;
transition-timing-function — функция, описывающая скорость изменения свойства;
transition-delay — задержка перед началом изменения.

статья: https://doka.guide/css/transition/
*/

// кнопка Анимация передвинет все объекты слева в положение 450px (начальное значение 0)
document.querySelectorAll('button')[0].onclick = function () { // выбрали 1-ю кнопку
    document.querySelector('.move0').style.left = '450px'; // двигаем координату положения "Лево" в положение 450px
    document.querySelector('.move1').style.left = '450px';
    document.querySelector('.move2').style.left = '450px';
    document.querySelector('.move3').style.left = '450px';
    document.querySelector('.move4').style.left = '450px';
}

// кнопка Сбросить передвинет все объекты справа налево в положение 0px
document.querySelectorAll('button')[1].onclick = function () { // выбрали вторую кнопку
    document.querySelector('.move0').style.left = '0px'; // двигаем координату положения "Лево" в положение 0px
    document.querySelector('.move1').style.left = '0px';
    document.querySelector('.move2').style.left = '0px';
    document.querySelector('.move3').style.left = '0px';
    document.querySelector('.move4').style.left = '0px';
}

// В итоге JS только изменяет положение из одного состояния в другое резко, а CSS делает изменение плавным превращая это в анимацию.








