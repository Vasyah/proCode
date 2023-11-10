const taskData = [{
  id: 700,
  isEnable: true,
  title: "Заголовок задачи",
  subTitle: "Подзаголовок",
},{
    id: 701,
    isEnable: true,
    title: "Новый заголовок задачи",
    subTitle: "Подзаголовок",
  },{
    id: 702,
    isEnable: false,
    title: "Купить машину",
    subTitle: "Купить новую машину по последнему писку моды",
  },{
    id: 703,
    isEnable: true,
    title: "Съездить в Сочи",
    subTitle: "Найти способ попасть в Сочи, сходить в поход",
  }];

const tasksContainter = document.querySelector(".tasks");

/**
 * Функция создаёт элемент Checkbox
 * @param {Ф} id
 * @param {*} isEnable
 * @returns
 */
const createCheckbox = (id, isEnable) => {
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.id = `${id}`;
  checkbox.name = `${id}`;
  checkbox.checked = isEnable;
  checkbox.classList = "item-checkbox";

  return checkbox;
};

/**
 * Функция создаёт элемент с описанием задачи
 * @param {*} title - заголовок
 * @param {*} subTitle - подзаголовок
 * @returns
 */
const createDescription = (title, subTitle) => {
  // блок с информацией о задачах
  const itemDescription = document.createElement("div");
  const itemTitle = document.createElement("p");
  const itemSubtitle = document.createElement("p");

  itemDescription.classList = "item-description";

  itemTitle.textContent = `${title}`;
  itemTitle.classList = "item-title";

  itemSubtitle.textContent = `${subTitle}`;
  itemSubtitle.classList = "item-subtitle";

  itemDescription.append(itemTitle, itemSubtitle);

  return itemDescription;
};

const createItem = (task) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList = "item";

  itemContainer.append(
    createCheckbox(task.id, task.isEnable),
    createDescription(task.title, task.subTitle)
  );

  return itemContainer;
};


taskData.forEach(data => {
    tasksContainter.append(createItem(data));
});