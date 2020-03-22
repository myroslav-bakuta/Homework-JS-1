console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

console.log('Завдання 1: змінні');

var myNum = 10; // имя переменной: myNum, значение: 10

var myStr = 'строка'; // имя переменной: myStr, значение: 'строка'

var myBool = true; // имя переменной: myBool, значение: true

var myArr = [1, 2, 3, 4, 5]; // имя переменной: myArr, значения: 1, 2, 3, 4, 5

var myObj = {
    first: 'First Name',
    last: 'Last Name'
}; // имя переменной myObj, значения: first: 'First Name', last: 'Last Name'

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

console.log('Завдання 2: округлення числа');
var decimal2 = myNum.toFixed(2);
console.log(decimal2); // decimal2

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

console.log('Завдання 3: операції з змінной i');
var i = 10; // i

console.log('префіксний інкремент (значення 1) -', ++i);
console.log('префіксний інкремент (значення 2) -', ++i);
console.log('префіксний інкремент (значення 3) -', ++i);
console.log(i);

console.log('префіксний декремент (значення 1) -', --i);
console.log('префіксний декремент (значення 2) -', --i);
console.log('префіксний декремент (значення 3) -', --i);
console.log(i);

console.log('постфіксний інкремент (значення 1) -', i++);
console.log('постфіксний інкремент (значення 2) -', i++);
console.log('постфіксний інкремент (значення 3) -', i++);
console.log(i);

console.log('постфіксний декремент (значення 1) -', i--);
console.log('постфіксний декремент (значення 1) -', i--);
console.log('постфіксний декремент (значення 1) -', i--);
console.log(i);

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

console.log('Завдання 4: операції з змінной myTest');
var myTest = 20; // myTest

myTest += 5; // +=
console.log('+=', myTest);
myTest -= 5; // –=
console.log('-=', myTest);
myTest *= 5; // *=
console.log('*=', myTest);
myTest /= 5; // /=
console.log('/=', myTest);
myTest %= 100; // %=
console.log('%=', myTest);

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

console.log('Завдання 5: Math');
var myPi = Math.PI // константа Pi → myPi
console.log('Число Пі -', myPi);

var myRound = Math.round(89.279); // округленное значение числа 89.279 → myRound
console.log('Округлення до цілого -', myRound);

var myRandom = Math.random() * 10; // случайное число между 0..10 → myRandom
console.log('Псевдорандомне значення -', myRandom);

var myPow = Math.pow(3, 5); // 3 в 5 степени → myPow
console.log('3 в степені 5 -', myPow);

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

console.log('Завдання 6: strObj + length');
var strObj = {
    str: 'Мама мыла раму, рама мыла маму'
}; // Мама мыла раму, рама мыла маму

strObj.length = strObj.str.length; // strObj
console.log('Довжина рядка -', strObj.length);
// https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/length

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

console.log('Завдання 7: strObj + рама');

var isRamaPos = strObj.str.indexOf('рама');
console.log('Позиція -', isRamaPos); // isRamaPos

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

console.log('Завдання 8: strObj + replace');

console.log('Оригінальний текст -', strObj.str);
var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму'); // strReplace
console.log('Замінений текст -', strReplace);
/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */

console.log('Завдання 9: текст в верхньому, а потім нижньому регістрі');
var myText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ea?';
console.log(myText);
console.log(myText.toUpperCase());
//  console.log(myText);
console.log(myText.toLowerCase());
//  console.log(myText);