// Пример 32 - Управление с клавиатуры

function byAuthor() { // изоляция кода
    image.tabIndex = 0;
    // Это чтобы он самым первым получал фокус при нажатии клавиши tab
    // теперь при нажатии tab и при ЛКМ картинка выделяется - появляется фокус

    image.onclick = function () {
        this.style.position = 'fixed';
        this.style.left = this.getBoundingClientRect().left + 'px';
        this.style.top = this.getBoundingClientRect().top + 'px';
        // * position: fixed: элемент будет на экране всегда даже при прокрутке страницы далеко вниз, потому что это положение фиксированное относительно окна пользователя.
        // теперь как только мы щелкаем на элемент картинки, его координаты левой верхней точки становятся текущими и позиция становится фиксированной
    }
    // по умолчанию к элементам применяется position: static, что означает что элемент отпозиционирован статически, то есть никак.
    // Элемент с position: static ещё называют не позиционированным.
    // Свойства left/top не будут работать для position:static. Если их всё же поставить, браузер их проигнорирует. Эти свойства предназначены для работы только с позиционированными элементами.

    // position: absolute
    // Абсолютное позиционирование делает 3 вещи:
    // 1) Элемент исчезает с того места, где он должен быть и позиционируется заново. Остальные элементы, располагаются так, как будто этого элемента никогда не было.
    // 2) Координаты top/bottom/left/right для нового местоположения отсчитываются от ближайшего позиционированного родителя, т.е. родителя с позиционированием, отличным от static. Если такого родителя нет – то относительно документа.
    // 3) Ширина элемента с position: absolute устанавливается по содержимому. Детали алгоритма вычисления ширины описаны в стандарте.

    // position: fixed. Это подвид абсолютного позиционирования.
    // Позиционирует объект точно так же, как absolute, но относительно window.
    // Разница в нескольких словах:
    // Когда страницу прокручивают, фиксированный элемент остаётся на своём месте и не прокручивается вместе со страницей.

    // Статья: https://learn.javascript.ru/position


    image.onkeydown = function (e) {
        switch (e.key) {
            case 'ArrowLeft':

                this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px'
                // Конвертировали в целое число текущее значение и отняли ширину изображения, то есть левая точка изображения сдвинется влево скачком на величину "-ширина изображения" в пикселях

                return false; // чтобы предотвратить стандартное поведение кнопок и заодно выходим наружу из обработчика событий не указывая здесь break

            case 'ArrowRight':
                this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px'
                // сдвиг левой точки изображения вправо на 1 ширину
                return false;

            case 'ArrowUp':
                this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px'
                // сдвиг верхней точки изображения вверх на 1 высоту
                return false;

            case 'ArrowDown':
                this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px'
                // сдвиг верхней точки изображения вниз на 1 высоту
                return false;

        }
    }
} // Конец изоляции

byAuthor()

function byStudent() { // изоляция
    image.tabIndex = 0

    image.onclick = function () {
        this.style.left = this.getBoundingClientRect().left + 'px';
        this.style.top = this.getBoundingClientRect().top + 'px';
        this.style.position = 'fixed';
    }

    // Если обновить страницу и выбрать фокус, используя Tab, то картинка не двигается. А если выбрать кликом, снять фокус и затем выбрать Tab'ом, то все начинает работать. Поэтому добавим еще один обработчик для фокуса, вдобавок к клику:

    image.addEventListener('focus', function () {
        this.style.left = this.getBoundingClientRect().left + 'px'
        this.style.top = this.getBoundingClientRect().top + 'px'
        this.style.position = 'fixed'
    })

    image.onkeydown = function (e) {
        switch (e.code) {
            case 'ArrowRight':
                if (parseInt(this.style.left) + this.offsetWidth > window.innerWidth - this.offsetWidth) {
                    this.style.borderRight = '4px solid red'
                    setTimeout(() => this.style.borderRight = '', 100)
                    return false
                }
                this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
                return false
            case 'ArrowLeft':
                if (parseInt(this.style.left) - this.offsetWidth < 0) {
                    this.style.borderLeft = '4px solid red'
                    setTimeout(() => this.style.borderLeft = '', 100)
                    return false
                }
                this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
                return false
            case 'ArrowDown':
                if (parseInt(this.style.top) + this.offsetHeight > window.innerHeight - this.offsetHeight) {
                    this.style.borderBottom = '4px solid red'
                    setTimeout(() => this.style.borderBottom = '', 100)
                    return false
                }

                this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
                return false
            case 'ArrowUp':
                if (parseInt(this.style.top) - this.offsetHeight < 0) {
                    this.style.borderTop = '4px solid red'
                    setTimeout(() => this.style.borderTop = '', 100)
                    return false
                }
                this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
                return false
        }
    }
} //  конец изоляции

// byStudent()