//1
//Написать цикл, который выводит все числа от 1 до 10.  - while do

let counter = 1;

while (counter <= 10) {
  console.log(counter);

  counter += 1;
}

/* 2 Написать цикл, который выводит все четные числа от 1 до 100. - do while
    - пройтись по циклу от 1 до 100, определить является ли число чётным, если да,
    то выводим его в консоль, иначе ничего не происходит
*/

counter = 1;
console.log("####Следующее задание");

do {
  const isEven = counter % 2 === 0;

  if (isEven) {
    console.log(counter);
  }

  counter++;
} while (counter <= 100);

console.log("#### Следующая задача");

//3
//Написать цикл, который выводит все числа от 100 до 1 (в обратном порядке). `for`

// for (let counter = 100; counter >= 1; counter--) {
//     console.log(counter);
// }

for (let counter = 0; counter < 100; counter++) {
  const MAX_VALUE = 100;

  console.log(100 - counter);
}

console.log("#### Следующая задача");
/* 4
    Написать цикл, который выполняется 20 раз, 
    каждую итерацию выводится сообщение на экран - число ${число} - ${чётное / нечётное} , 
    т.е, внутри цикла сперва необходимо определить является ли число чётным или нет - for
*/

// for (let counter = 0; counter < 20; counter++) {
//   const isEven = counter % 2 === 0;

//   if (isEven) {
//     console.log(`число ${counter} - чётное`);
//   } else {
//     console.log(`число ${counter} - нечётное`);
//   }
// }

for (let counter = 0; counter < 20; counter++) {
  const isEven = counter % 2 === 0;

  const numberType = isEven ? "чётное" : "нечётное";

  const message = `число ${counter} - ${numberType}`;

  console.log(message);
}

//5 Написать функцию, которая считает сумму всех чисел от 1 до 100. и выводит результат на экран

let result = 0;

for (let counter = 1; counter <= 100; counter++) {
  const sum = result + counter;

  console.log(`${result} + ${counter} =  ${sum}`);

  result += counter;
}

console.log(`Результат равен: ${result}`);

/* Проект: калькулятор
1. Реализовать функцию `суммирования` калькулятора 
2. Реализовать функцию `вычитания` калькулятора 
3. Реализовать функцию `умножения` калькулятора
4. Реализовать функцию `деления` калькулятора

    Важно реализовать калькулятор таким образом, чтобы результат после выполнения операции сохранялся.
    К примеру, мы вызвали функцию сумму - 4 + 3, в результате получили 7 , 
    при следующем вызове этой функции в качестве аргументов мы передаём результат
    предыдущего вычисления - 7
*/

// Общий результат вычислений кулькулятора
let calcResult = 0;

// функция суммирования - это функция вычисляет сумму двух значений и выводит в консоль
const sum = (number1, number2) => {
    const result = number1 + number2;

    console.log(`${number1} + ${number2} = ${result}`);

    return result;
}

// функция вычитания - это функция вычисляет разность двух значений и выводит в консоль
const minus = (number1, number2) => {
    const result = number1 - number2;

    console.log(`${number1} - ${number2} = ${result}`);

    return result;
}

// функция умножения - это функция вычисляет произведение двух значений и выводит в консоль
const multiply = (number1, number2) => {
    const result = number1 * number2;

    console.log(`${number1} * ${number2} = ${result}`);

    return result;
}

// функция деления - это функция вычисляет деление двух значений и выводит в консоль
const divide = (number1, number2) => {
    const result = number1 / number2;

    console.log(`${number1} / ${number2} = ${result}`);

    return result;
}

calcResult = sum(1, 4);
calcResult = sum(calcResult, 4);
calcResult = sum(calcResult, 999);
calcResult = minus(calcResult, 500);
calcResult = minus(calcResult, 300);
calcResult = minus(calcResult, 200);
calcResult = multiply(calcResult, 2);
calcResult = multiply(calcResult, 0.5);
calcResult = divide(calcResult, 2);
calcResult = divide(calcResult, 3);

console.log(calcResult);