// Пример 34 - События cut / copy / paste

//  для всех трёх событий укажем один обработчик
input.oncut = input.oncopy = input.onpaste = function (e) {
    console.log(e.type + ' - ' + e.clipboardData.getData('text/plain'));
    // text/plain указывается чтобы получить из буфера только текст, так как там могут быть изображения и прочее
    return false; // предотвратили стандартное проведение
}

// при копировании, вырезании и вставке проучили в консоли:
// cut -
// copy -
// paste - <title>Пример 34 (сюда вставилось то что было в буфере)



