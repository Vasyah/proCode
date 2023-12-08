"use strict";

const categories = ["Дом", "Семья", "Машина"];
const wallet = document.querySelector(".wallet");
const form = document.querySelector("#form");
const modal = document.querySelector(".modal");
const createButton = document.querySelector("#create-payment");

const payment = {
  name: "Кофе",
  amount: 140,
  categories: categories[0],
  date: new Date(),
};
const payments = [
  {
    id: 1,
    name: "Soup - Campbells Bean Medley",
    category: "Drama",
    amount: 1,
    date: "12/14/2022",
  },
  {
    id: 2,
    name: "Sauce - Roasted Red Pepper",
    category: "Comedy|Drama",
    amount: 2,
    date: "6/8/2023",
  },
  {
    id: 3,
    name: "Gatorade - Xfactor Berry",
    category: "Documentary",
    amount: 3,
    date: "7/3/2023",
  },
  {
    id: 4,
    name: "Bagel - 12 Grain Preslice",
    category: "Comedy|Romance",
    amount: 4,
    date: "1/21/2023",
  },
  {
    id: 5,
    name: "Jam - Blackberry, 20 Ml Jar",
    category: "Action|Adventure|Fantasy|Romance",
    amount: 5,
    date: "6/16/2023",
  },
  {
    id: 6,
    name: "Lettuce - Baby Salad Greens",
    category: "Comedy|Western",
    amount: 6,
    date: "1/9/2023",
  },
  {
    id: 7,
    name: "Garam Marsala",
    category: "Horror|Thriller",
    amount: 7,
    date: "4/26/2023",
  },
  {
    id: 8,
    name: "Tea - Decaf 1 Cup",
    category: "Adventure|Musical",
    amount: 8,
    date: "8/5/2023",
  },
  {
    id: 9,
    name: "Pastry - Lemon Danish - Mini",
    category: "Documentary",
    amount: 9,
    date: "3/22/2023",
  },
  { id: 10, name: "Okra", category: "Drama", amount: 10, date: "5/3/2023" },
];
function PaymentFactory(name, amount, date, category) {
  this.id = getRandomId();
  this.name = name;
  this.amount = amount;
  this.date = date;
  this.category = category;
}

const getRandomId = () => Math.floor(Math.random() * 10000);

const Wallet = {
  payments: payments,

  init(payments, categories) {
    let html = "";
    // все payments добавить в DOM
    payments.map((payment) => {
      const paymentEl = this.getPaymentEl(payment);

      html += paymentEl;
    });

    wallet.insertAdjacentHTML("afterbegin", html);
    // все категории добавить в DOM
  },
  getPaymentEl({ id, name, amount, date, category }) {
    return `
        <div class="payment" data-id=${id}>
            <div class="cell name">${name}</div>
            <div class="cell">${amount}</div>
            <div class="cell">${category}</div>
            <div class="cell">${date}</div>
            <div class="control">
                <button id="edit">edit</button>
                <button id="delete">delete</button>
            </div>
        </div>
`;
  },
  updateDOM() {
    wallet.innerHTML = "";
    this.init(this.payments);
  },
};

const serializeForm = (formNode) => {
  const { elements } = formNode;
  const elementsData = {};

  Array.from(elements).forEach((element) => {
    elementsData[element.name] = element.value;
  });

  return elementsData;
};

const setModalVisible =  (state) => {
  if(state){
    modal.classList = 'modal visible'
  }else{
    modal.classList = 'modal'
  }
}

const handleCreate = (event) => {
  // сделать модалку видимой
  modal.classList = "modal visible";
  // добавить подписку на закрытие
  const cancelButton = document.querySelector("#modal-cancel");
  cancelButton.addEventListener('click', () => setModalVisible(false))
};
const handleSubmit = (event) => {
  event.preventDefault();

  const data = { ...serializeForm(form), id: getRandomId() };

  Wallet.payments = [...Wallet.payments, data];
  Wallet.updateDOM();

  setModalVisible(false)
};

form.addEventListener("submit", handleSubmit);
createButton.addEventListener("click", handleCreate);

Wallet.payments = payments;

Wallet.init(Wallet.payments);
