// 1 задание
const name = "Vasilii";
const name2 = "Nikita";

if (name === "Vasilii") {
  console.log(`Приветствую, ${name}`);
} else {
  console.log("Вы еще не зарегистрированы. Зарегистроваться?");
}

if (name2 === "Vasilii") {
  console.log(`Приветствую, ${name2}`);
} else {
  console.log("Вы еще не зарегистрированы. Зарегистроваться?");
}

// 2 задание
const health = 75;

if (health === 100) {
  console.log("Вы здоровы");
} else if (health < 100 && health >= 75) {
  // от 75-99 жизней
  console.log("Не помешало бы подлечиться");
} else if (health < 75 && health >= 50) {
  // от 50-74 жизней
  console.log("Желательно подлечиться");
} else if (health < 50 && health > 0) {
  // от 1-49 жизней
  console.log("Срочно надо подлечиться, уровень здоровья слишком низкий");
} else if (health === 0) {
  // 0 жизней
  console.log("Вы мертвы");
} else {
  console.log(`Ваш уровень здорвья: ${health}`);
}
