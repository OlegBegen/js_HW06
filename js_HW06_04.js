const counterValue = document.querySelector("#value");
let counter = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

const handleClickDecrementet = () => {
    counter -= 1;
    counterValue.textContent = counter;
};
const handleClickIncrementet = () => {
    counter += 1;
    counterValue.textContent = counter;
};

buttonDecrement.addEventListener("click", handleClickDecrementet);
buttonIncrement.addEventListener("click", handleClickIncrementet);

