// const btn = document.querySelector('.button');
// const square = document.querySelector('.square');

// function getColor() {
//     const colors = [
//       '#49A16C', '#064236',
//       '#ED6742', '#F498AD',
//       '#1A5AD7', '#AFC9DA',
//       '#FFD829', '#282A2E',
//       '#5E6064', '#E6E6E6'
//     ]
//     return colors[Math.floor(Math.random() * colors.length)]
//   }
// btn.addEventListener('click', function() {
//     square.style.backgroundColor = getColor();
// });

const btn = document.querySelector(".button");
const square = document.querySelector(".square");

function getColor() {
  const colors = ["#49A16C", "#064236", "#ED6742", "#F498AD", "#1A5AD7"];
  const rndValue = Math.random();
  const rndValueWithMask = rndValue * colors.length;
  const roundedValue = Math.floor(rndValueWithMask);

  console.log({ rndValue, rndValueWithMask, roundedValue });

  return colors[Math.floor(Math.random() * colors.length)];
}

btn.addEventListener("click", function () {
  square.style.backgroundColor = getColor();
});
