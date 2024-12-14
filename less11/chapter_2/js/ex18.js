// Пример 18 - Сортировка таблицы

table.onclick = function (e) { // на всю таблицу вешаем один обработчик события и будем проверять нажать ли наш th

    if (e.target.tagName != 'TH') return //  если цель клика не является заголовочной ячейкой, то выходим из обработчика и дальнейший код не выполняем. То  есть мы проверяем, что это заголовочный тег TH. Если  щёлкаем по нему, то выполняется сортировка, если это какие-то другие ячейки, то сортировка выполняться не должна

    let th = e.target // в переменную запишем цель щелчка,  это будет один из нескольких <th> таблицы так как  этот код будет выполняться  только если верхнее условие не сработает, то  если только если цель щелчка была именно th

    // далее начнём выполнять свою функцию сортировки, которую напишем ниже по коду
    sortTable(th.cellIndex, th.dataset.type);
    // в качестве 1-го параметра подставим свойство cellIndex у переменной th. Это сектантское свойство у тегов в таблице для того, чтобы определить индекс ячейки. Если это будет первый столбец Имя, то это будет индекс "0" (и все ячейки этого первого столбца тоже будут иметь индекс "0"),  если второй столбец Возраст, то индекс будет "1" (также у всех ячеек второго столбца).
    // в качестве 2-го параметра подставим значение data-type, которое может быть либо "string" либо "number"

    // создадим свою функцию сортировки:
    function sortTable(colNum, type) { // 2 параметра: номер колонки и тип содержимого
        let tbody = table.querySelector('tbody') // подцепилось к tbody, хранящем данные, чтобы не сортировать thead в котором заголовки

        let rowsArray = Array.from(tbody.rows) // из всех рядов tbody создали массив

        let compare; //  создали пустыню переменную в которую в зависимости от типа затем поместим одну из функций

        switch (type) { //  переключатель в зависимости от type (2ой  аргумента нашей функции)
            case 'number':
                compare = function (rowA, rowB) {
                    return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
                    // таким образом в случае типа number в переменную compare  поместили функцию сортировки числового типа данных
                }
                break;
            case 'string':
                compare = function (rowA, rowB) {
                    return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
                    //  строковые символы мы не можем выбрать, поэтому мы их сравниваем с помощью знака >,  и если этот символ будет больше, то мы возвращаем 1, а если меньше, то -1
                    // в консоли: "в" > "а" получаем true
                }
                break;
        }
        // результатом switch будет не сортировка, а созданная переменная compare, в которую записан текстовый код функции сортировки (либо для чисел либо для строк)

        rowsArray.sort(compare) //  к массиву рядов применили методы сортировки, в качестве параметра которого указана переменная compare, содержащая код функции сортировки чисел/строк

        tbody.append(...rowsArray)
        // в тело таблицы помещаем с помощью метода append отсортированные строки  ив результате старые заменяться новыми, три точки ставим чтобы все по отдельности элементы поместить в tbody
    }
}

// Код с учётом локализации от студента:
function ErikEr() {

    table.onclick = function (e) {

        if (e.target.tagName != 'TH') return;

        let th = e.target;

        sortTable(th.cellIndex, th.dataset.type, 'ru', { sensitivity: 'base' });

    }


    function sortTable(colNum, type, locales, options) {

        let tbody = document.querySelector('tbody');

        let rowsTable = Array.from(tbody.rows);

        let compare;

        switch (type) {

            case 'number':

                compare = function (row0, row1) {

                    return row0.cells[colNum].innerHTML - row1.cells[colNum].innerHTML;

                }

                break;

            case 'string':

                const collator = new Intl.Collator(locales, options);

                compare = function (row0, row1) {

                    return collator.compare(row0.cells[colNum].innerHTML, row1.cells[colNum].innerHTML);

                }

                break;

        }

        rowsTable.sort(compare);

        tbody.append(...rowsTable);

    }

}