const inputBlurEl = document.querySelector("#validation-input");
console.log(inputBlurEl);
inputBlurEl.addEventListener('blur', inputLength);
function inputLength(event) {
    
    inputBlurEl.classList.remove("invalid");
    if (inputBlurEl.value.length === Number(inputBlurEl.dataset.length)) {
        inputBlurEl.classList.add("valid");
    } else {
        inputBlurEl.classList.add("invalid")
    }
}

