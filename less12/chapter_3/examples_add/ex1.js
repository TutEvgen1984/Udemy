// Пример 1 - Работа с файлами и FileReader
// в JS мы нативно можем считывать информацию из файлов без установки каких либо сторонних программ и серверов в которых ещё нужно будет дописать дополнительные скрипты, но записывать не можем так как JS не имеет доступа к файловой системе. Чтобы записывать файлы нужен сервер, который можно самостоятельно создавать на Node JS.


// создадим функцию, которая используется в <input type="file" onchange="openFile(this)">
function openFile(input) { // в качестве параметра input у нас будет input type="file" (который мы подпихнули как this) с помощью которого мы выбирали файл который хотим обработать
    let file = input.files[0]
    // через input можно выбрать несколько файлов. input.files - это псевдомассив выбранных файлов. Поэтому мы здесь с помощью [0] берём из этого массива файл под нулевым индексом
    // теперь переменная file является объектом и мы можем из неё извлекать различные свойства

    console.log("file.name:", file.name) // ex1.txt

    console.log("file.lastModified:", file.lastModified + " (TimeStamp)") // 1735972322957
    // это timestamp для даты последнего изменения этого файла

    // создадим отдельную переменную на основе класса FileReader
    let reader = new FileReader();

    // для того чтобы прочитать файл выполняем встроенный метод у ридера readAsText()
    reader.readAsText(file); // метод чтения текста, в качестве аргумента указываем созданную выше переменную file содержащую файл

    // теперь сделаем обработку события для reader
    reader.onload = function () { // событие onload возникает когда файл полностью загружен
        console.log("reader.result:")
        console.log(reader.result)
        // Получили содержимое файла:
        // Строка 1
        // Строка 2
        // Проверка 3
    }

    // Специальное событие при ошибках:
    reader.onerror = function () {
        console.log(reader.error);
    }
}



// Написал такую простенькую функцию, которая подсчитывает количество букв 'a' в файле и по их количеству меняет имя файла, если больше 25 букв, то 'Big.расширение', если меньше 25 букв - 'small.расширение'

function student() { // изолируем код
    function openFile(input) {

        let file = input.files[0]; // получаем файл

        let reader = new FileReader(); // reader является объектом класса FileReader

        onsole.log('reader.name:' + reader.name);
        // получили:
        // reader.name:undefined
        // у объекта reader есть свойство name

        let b = 0; // начальное суммарное количество букв а в файле

        let name = file.name + ''; // прибавляем  к имени пустую строку чтобы получилось точно строка (и без этого работает)

        // массив содержащий имя файла до точки и расширение после точки
        let arr__name = name.split('.'); // [ex1, txt]

        reader.readAsText(file);

        reader.onload = function () {

            // перебор буков в полученном файле:
            for (let i of reader.result) {

                if (i == 'a') {

                    b++

                }

            }

            if (b > 25) {

                reader.name = 'big' // присваиваем свойству name объекта reader значение big

            } else {

                reader.name = 'small' // присваиваем свойству name объекта reader значение small

            }

            console.log(`${reader.name}.${arr__name[1]}`)
            // small.txt
            // по факту reader.name не поменял имя файла
            // что эти хотел сделать студент пока не понятно

        }

        reader.onerror = function () {

            console.log(reader.error)

        }

    }
}