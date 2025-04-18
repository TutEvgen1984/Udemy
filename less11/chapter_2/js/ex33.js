// Пример 33 - События change / input

// событие change срабатывает по окончании изменения элемента.  Таким образом можно отслеживать чекбоксы, радиокнопки, инпуты, селекты, текстарии.
// его недостаток: оно срабатывает после изменения элемента, а это означает, что для инпута это событие происходит после потери фокуса.
// поэтому существует специальное событие которое называется импут,  которая срабатывает каждый раз при изменении поля ввода,  его можно использовать так же с чекбоксами и селектами
//  поэтому рассмотрим только события input

input.oninput = function () {
    console.log(input.value);
    // п
    // пр
    // при
    // прив
    // приве
    // привет
}
// теперь как только мы начнём что то вводить в поле импут, оно сразу появляется в консоли. Срабатывает событие при вводе каждой буквы.
// событие инпут нельзя предотвратить с помощью preventDefault() так как оно происходит после изменения значения ив этот момент уже поздно что-то менять

input2.onchange = function () {
    console.log(input2.value);
}
// теперь введённый текст появляется в консоли только после перевода фокуса на другое место

