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

const todoList = {
  data: [],
  container: document.querySelector(".task-container"),

  render(tasks) {
    this.data = tasks;

    let html = "";

    this.data.forEach((task) => (html += this.createTask(task)));

    // в контейнер всех задач добавляем все задачи
    this.container.insertAdjacentHTML("beforeend", html);
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
    </div>
    `;

    return html;
  },
};

todoList.render(taskData);
