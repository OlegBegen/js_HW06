const inputScrolEl = document.querySelector("#font-size-control");
const textScrolEl = document.querySelector("#text");

inputScrolEl.addEventListener('input', inputScrol);
function inputScrol(event) {
    textScrolEl.style.fontSize = event.currentTarget.value + "px";
}
