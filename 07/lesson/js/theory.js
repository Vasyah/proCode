let active;
let counter = 0;

// обрабатываем событие click на всех <div>
let divs = Array.from(document.querySelectorAll("div")).reverse();

for (let i = 0; i < divs.length; ++i) {
  const isLast = i + 1 === divs.length;

  divs[i].addEventListener("click", clickHandlerGenerator(isLast));
}

function clickHandlerGenerator(isLast = false) {
  return function () {
    let me = this;

    setTimeout(function () {
      if (active) {
        active.classList.remove("active");
      }

      me.classList.add("active");

      active = me;

      if (isLast) {
        setTimeout(function () {
          active.classList.remove("active");
          active = undefined;
          counter = 0;
        }, 300);
      }
    }, counter * 300);
    ++counter;
  };
}

const container = document.querySelector(".my-container");

const element = document.createElement("p");

element.textContent = "Я элемент";
element.classList = "new-class";
element.style.fontSize = "24px";
