//  Второй способ использования ключевого слова this в querySelector

document.querySelector('.btn').onclick = function() {
    alert(this.innerHTML) // Получили: Кнопка 2
    // так как мы применили обработчик события к кнопке, внутри которой есть html-код, то с помощью this.innerHTML получили надпись внутри кнопки
}
    // Если применить этот способ к input, то получим пустоту, потому что input - это НЕ парный тег - он одинарный и внутри него нет HTML кода между открывающим и закрывающим тегом. А вот например для кнопки button существует html-код
