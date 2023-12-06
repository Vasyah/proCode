function setCounter(initialValue) {
  let counter = initialValue;

  console.log(counter);

  return function (value) {
    counter += value;

    console.log(counter);
  };
}

const incrementCounter = setCounter(10);
const incrementAnotherCounter = setCounter(7);

incrementCounter(3);
incrementCounter(4);

incrementAnotherCounter(5);
incrementAnotherCounter(6);
