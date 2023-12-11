// структура задачи
const taskData = [
  {
    id: 1,
    title: "Zoolab",
    description: "Pillsbury Baptist Bible College",
    isComplete: true,
  },
  {
    id: 2,
    title: "Home Ing",
    description: "London School of Business & Finance",
    isComplete: true,
  },
  {
    id: 3,
    title: "Fix San",
    description: "University of Catania",
    isComplete: true,
  },
  {
    id: 4,
    title: "Stronghold",
    description: "Christelijke Hogeschool Windesheim",
    isComplete: false,
  },
  {
    id: 5,
    title: "Zamit",
    description: "Xi'an University of Technology",
    isComplete: true,
  },
  {
    id: 6,
    title: "It",
    description: "Barnard College - Columbia University",
    isComplete: true,
  },
  {
    id: 7,
    title: "Tampflex",
    description: "Shimer College",
    isComplete: true,
  },
  {
    id: 8,
    title: "Stronghold",
    description:
      "Fachhochschule Biberach, Hochschule für Bauwesen und Wirtschaft",
    isComplete: true,
  },
  {
    id: 9,
    title: "Bamity",
    description: "Albany State University",
    isComplete: false,
  },
  {
    id: 10,
    title: "Fixflex",
    description: "Gaziosmanpasa University",
    isComplete: false,
  },
];

// Создаём объект todoList

const todoList = {
  tasks: [],
  taskContainer: document.querySelector(".task-container"),

  render(tasks) {
    this.tasks = tasks;

    this.updateDOM(this.tasks, this.taskContainer);
  },

  createTask(task) {
    const isChecked = task.isComplete ? "checked" : "";

    const html = `
    <div class="item">
            <input
              class="complete"
              type="checkbox"
              id="${task.id}"
              name="${task.id}"
              ${isChecked}
            />
            <div class="info">
              <h3 class="title">${task.title}</h3>
              <p class="description">${task.description}</p>
            </div>
            <div class="item-control">
              <button class="btn outline">Редактировать</button>
              <button class="btn outline">Удалить</button></div>
          </div>`;

    return html;
  },

  updateDOM(tasks, container) {
    container.innerHTML = "";
    let html = "";

    this.tasks.forEach((task) => {
      html += this.createTask(task);
    });

    container.insertAdjacentHTML("afterbegin", html);
  },
};

todoList.render(taskData);

// элемент формы
const modal = document.querySelector("#modal-overlay");
// элемент формы
const form = document.querySelector("#modal-form");
// кнопка отмены
const cancelButton = document.querySelector("#modal-cancel");
// кнопка открытия модалки
const openModalButton = document.querySelector("#open-modal");

const handleSubmit = (event) => {
  console.log(event);
  event.preventDefault();

  const data = serializeForm(form);

  data.id = Math.floor(Math.random() * 1000);

  // добавляем новую задачу в список задач
  const newTasks = todoList.tasks.concat(data);
  setVisible(false);
  todoList.render(newTasks);
};

/**
 * Функция отвечает за отображение модального окна
 * @param visible - флаг отображения модального окна
 */
const setVisible = (visible) => {
  // элемент формы
  const modal = document.querySelector("#modal-overlay");

  if (visible) {
    modal.classList = "visible";
  } else {
    modal.classList = "";
  }
};

// обработка создания задачи
form.addEventListener("submit", handleSubmit);

openModalButton.addEventListener("click", function () {
  setVisible(true);
});

cancelButton.addEventListener("click", function () {
  setVisible(false);
});

const serializeForm = (form) => {
  const elements = form.elements;
  const elementsData = {};

  Array.from(elements).forEach((element) => {
    console.log(element);
    if (element.type === "checkbox") {
      elementsData[element.name] = element.checked;
    } else {
      elementsData[element.name] = element.value;
    }
  });

  return elementsData;
};
