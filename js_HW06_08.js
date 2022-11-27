const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
      if (email.length === 0 || password.length === 0) {
          alert("всі поля повинні бути заповнені");
          return;
    }
    const formElData = {
        email,
        password,
    };
    console.log(formElData);
    formEl.reset();
}
