// Пример 40 - Депозитный калькулятор

// подцепимся к форме по имени формы:
let form = document.forms.calculator; // <form name="calculator">

// ниже для 3-х полей присвоим 3 события и для всех в качестве обработчика события присвоим функцию calculate, которую напишем позже

form.money.oninput = calculate;

form.months.onchange = calculate; // для select'а поставим onchange вместо oninput

form.interest.oninput = calculate;

function calculate () {

    // переменная initial - начальная сумма
    let initial = +form.money.value;
    // + для того, чтобы превратить строку в число

    // проверим поле money, если оно пустое, то выходим из функции и ничего не делаем
    if (!initial) return;

    // возьмём значение поля input, где процентная ставка, умножим на 0,01 чтобы большое целое число перевести в математические проценты
    let interest = form.interest.value * 0.01; // например 5*0.01 = 0.05

    // проверим поле interest, если оно пустое, то выходим из функции и ничего не делаем
    if (!interest) return;

    // срок вклада мы будем рассчитывать в годах, поэтому мы значение поля в месяцах поделим на 12
    // это потому что процентная ставка у нас в год, а не в месяц; была бы в месяц, ничего делить не надо было бы
    let year = form.months.value / 12;
    // если будет выбрано 3 месяца, то получим year = 3/12=0.25

    // так же сделаем проверку, если значение в поле отсутствует, то будем выходить из функции (правда у нас здесь select, и значение не может отсутствовать)
    if (!year) return;

    // результат округляем до ближайшего целого
    // initial(начальная сумма) + initial(начальная сумма)*interest(математические проценты) * year (количество лет вклада) ) )
    let result = Math.round(initial * (1 + interest * year));

    // Далее нужно вывести результат в виде цветного столбца, для этого рассчитаем высоту столбца
    // первый оранжевый столбец это 100% то есть столько сколько было, имеющий заданный размер height:100px
    // второй столбец надо найти, он помечен id="height-after" и начальная высота height:0.
    let newHeight = result / form.money.value * 100 + 'px';

    // для зеленого <div></td> выставим новую высоту (изначально была равна 0)
    document.getElementById('height-after').style.height = newHeight;

    // в <th id="money-before"></th> (изначально пустое) вставляем значение из <input name="money">
    document.getElementById('money-before').innerHTML = form.money.value;

    // в <th id="money-after"></th> (изначально пустое) вставляем рассчитанное значение
    document.getElementById('money-after').innerHTML = result;
}
// эту функцию нужно вызвать один раз для первоначального расчёта
calculate ();

// а уже после изменений мы будем это все пересчитывать при изменении формы благодаря тому, что мы навесили обработчики событий на 3 элемента







