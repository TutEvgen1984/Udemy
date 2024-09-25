function myTimer (seconds) {
    let startDate = new Date() // стартовая дата генерируется браузером у каждого пользователя во время запуска кода скрипта
    let endDate = new Date() // по началу конечная дата такая же как начальная
    // Далее изменим конечную дату
    endDate = endDate.setSeconds(endDate.getSeconds() + seconds) // прибавили количество секунд сколько было в параметре функции, и теперь конечная и начальная даты будут отличаться
    let leftTime = endDate - startDate // это время, в течении которого будет выполняться наш таймер
    let interval = setInterval(() => {
        let currentDate = new Date()
        let leftPercent = Math.trunc((endDate - currentDate) / (endDate - startDate) * 100) // Math.trunc округляет, это нам нужно чтобы отбросить дробную часть
        // вместо (endDate - startDate) можно было использовать переменную leftTime (мы её не использовали)
        let pastPercent = +(100 - leftPercent)

        document.querySelector('.timer-progressbar__fill').textContent = pastPercent + '%'
        document.querySelector('.timer-progressbar__fill').style.width = pastPercent + '%'
        document.querySelector('.timer-progressbar__empty').textContent = leftPercent + '%'
        document.querySelector('.timer-progressbar__empty').style.width = leftPercent + '%'

        if (leftPercent == 0) {
            clearInterval(interval)
            document.querySelector('.timer-progressbar__empty').style.display = 'none'
        }
        console.log(1); // это для того, чтобы в консоли увидеть сколько циклов выполнилось
        // при myTimer(9) получаем 9
        // при myTimer(4) получаем 4
    }, 1000);
}
myTimer(9)
// В результате наш прогресс-бар выполняется за 9 секунд