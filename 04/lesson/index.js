const tasksContainter = document.querySelector(".tasks");

const itemContainer = document.createElement("div");
const itemCheckbox = document.createElement("input");

// блок с информацией о задачах
const itemDescription = document.createElement("div");
const itemTitle = document.createElement("p");
const itemSubtitle = document.createElement("p");

itemCheckbox.type = "checkbox";
itemCheckbox.id = "checkbox";
itemCheckbox.classList = "item-checkbox";

itemDescription.classList = "item-description";

itemTitle.textContent = "Заголовок";
itemTitle.classList = "item-title";

itemSubtitle.textContent = "Подзаголовок";
itemSubtitle.classList = "item-subtitle";
itemContainer.classList = "item";

itemDescription.append(itemTitle, itemSubtitle);
itemContainer.append(itemCheckbox, itemDescription);

tasksContainter.append(itemContainer);
