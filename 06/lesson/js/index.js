const container = document.querySelector(".container");

const input = container.querySelector(".input");
const createTextEl = (operator, className, listener) => {
  const container = document.createElement("div");

  container.textContent = operator;

  // при наличии className добавляем элементу класс
  if (className) {
    container.classList = `${className}`;
  }

  if (listener) {
    container.addEventListener("click", listener);
  }

  return container;
};

// операторы
const operatorContainer = container.querySelector(".operators");
const operators = ["/", "*", "-", "+", "="];

const operatorElements = operators.map((operator) =>
  createTextEl(operator, "operator")
);

operatorContainer.append(...operatorElements);

// числа
const numbersContainer = container.querySelector(".numbers");
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

let firstNum = 0;
const numberElements = numbers.map((operator) =>
  createTextEl(operator, "", function () {
    const isEmpty = input.textContent === "0";
    input.textContent = isEmpty
      ? this.textContent
      : `${input.textContent}${this.textContent}`;
  })
);

numbersContainer.append(...numberElements);
