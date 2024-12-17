// Пример 23 - Комбинация клавиш

// Ловим Alt+Shift+Клик:
document.querySelector('.btn1').onclick = function (e) {
    if (e.altKey && e.shiftKey) {
        console.log('Alt+Shift+Клик'); // при удержании Alt+Shift + ЛКМ = Alt+Shift+Клик
    }
}

// Ловим Ctrl+Shift+Клик:
document.querySelector('.btn2').onclick = function (e) {
    if ((e.ctrlKey && e.shiftKey) || (e.metaKey && e.shiftKey)) {
        console.log('для пользователей win: Ctrl+Shift+Клик'); // при удержании Ctrl+Shift + ЛКМ = Ctrl+Shift+Клик
        console.log('для пользователей Mac: CMD+Shift+Клик'); // CMD+Shift+Клик
    }
}

// metaKey позволяет отслеживать кнопку command на MAc, этот код не будет работать в Win и Linux, но если мы разрабатываем приложение которым будут разбираться на Mac,  то лучше позаботиться об этих пользователях, он у них вместо CTRL,  поэтому надо будет взаимные сообщения предусмотреть с Cmd + Shift