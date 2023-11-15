const log = (...info) => console.log(...info);

const container = document.querySelector(".container");

const input = document.querySelector(".input");

// кнопки с цифрами
const numbersContainer = document.querySelector(".numbers");
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

// кнопки с операторами
const operatorsContainer = document.querySelector(".operators");
const operators = ["*", "/", "+", "-", "="];

/**
 * Функция создаёт HTML элемент с тэгом div
 * @param {*} value - значение, которое будет добавлено в элемент
 * @param {*} classList - список классов, передаваемый строкой
 * @returns
 */
const createEl = (value, classList, callback) => {
  const element = document.createElement("div");

  element.textContent = `${value}`;

  // проверка на наличие классов
  if (classList) {
    element.classList = `${classList}`;
  }

  element.addEventListener("click", callback);

  console.log(classList);

  return element;
};

const numbersElements = numbers.map((element) =>
  createEl(element, "", numberCallback)
);

numbersContainer.append(...numbersElements);

const operatorsElements = operators.map((element) =>
  createEl(element, "operator", operatorCallback)
);

operatorsContainer.append(...operatorsElements);

function numberCallback() {
  const currentValue = input.textContent;
  if (currentValue === "0") {
    input.textContent = this.textContent;
  } else {
    input.textContent = `${currentValue}${this.textContent}`;
  }
}

function operatorCallback() {
  // сохраняем значение числа
  if (this.textContent === "=") {
    calculcator.secondNumber = Number(input.textContent);

    const operator = calculcator.lastOperator
      ? calculcator.lastOperator
      : calculcator.currentOperator;

    calculcator.equality(calculcator.secondNumber, operator);

    return;
  }

  if (!calculcator.currentOperator) {
    calculcator.firstNumber = Number(input.textContent);
    calculcator.lastOperator = "";
  } else {
    return;
  }

  // получаем тип операции
  calculcator.currentOperator = this.textContent;

  // обнулить значение инпута
  input.textContent = 0;

  log(calculcator);
}

const calculcator = {
  firstNumber: 0,
  secondNumber: 0,
  result: 0,

  currentOperator: "",

  // функция суммирования - это функция вычисляет сумму двух значений и выводит в консоль
  sum(number1, number2) {
    const result = number1 + number2;

    console.log(`${number1} + ${number2} = ${result}`);

    return result;
  },

  // функция вычитания - это функция вычисляет разность двух значений и выводит в консоль
  minus(number1, number2) {
    const result = number1 - number2;

    console.log(`${number1} - ${number2} = ${result}`);

    return result;
  },

  // функция умножения - это функция вычисляет произведение двух значений и выводит в консоль
  multiply(number1, number2) {
    const result = number1 * number2;

    console.log(`${number1} * ${number2} = ${result}`);

    return result;
  },

  // функция деления - это функция вычисляет деление двух значений и выводит в консоль
  divide(number1, number2) {
    const result = number1 / number2;

    console.log(`${number1} / ${number2} = ${result}`);

    return result;
  },

  equality(secondNumber, operator) {
    // получаем операцию
    const operation = this.getOperation(operator);

    console.log(operation(this.firstNumber, this.secondNumber), this);

    if (this.result) {
      this.result = operation(+this.result, +secondNumber);
    } else {
      this.result = operation(+this.firstNumber, +this.secondNumber);
    }

    input.textContent = this.result;

    //
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.lastOperator = this.currentOperator;
    this.currentOperator = "";
  },

  getOperation(operator) {
    switch (operator) {
      case "+":
        return this.sum;
      case "-":
        return this.minus;
      case "*":
        return this.multiply;
      case "/":
        return this.divide;
      default:
        console.error("Выбрана неизвестная операция");
        return;
    }
  },
};

// Логика выполнения оператора - после того, как мы ввели первое число и нажали на оператор - нам необходимо
//запомнить значение первого числа
//обнулить значение в инпуте
//  начать ввод второго числа
// при нажатии на равно - у нас происходит выполнении указанного оператора, т.е. сама операция будет выполнять только после нажатия на равно, значит нам необходимо запоминать название оператора
