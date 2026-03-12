const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    validateInputs();
});
function validateInputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (nameValue === "") {
        setError(nameInput, "Name cannot be empty");
    } else {
        setSuccess(nameInput);
    }
    if (emailValue === "") {
        setError(emailInput, "Email cannot be empty");
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, "Enter a valid email");
    } else {
        setSuccess(emailInput);
    }
    if (passwordValue === "") {
        setError(passwordInput, "Password cannot be empty");
    } else if (passwordValue.length < 6) {
        setError(passwordInput, "Password must be at least 6 characters");
    } else {
        setSuccess(passwordInput);
    }
}
function setError(input, message) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector("small");
    small.innerText = message;
    input.classList.add("error-border");
    input.classList.remove("success-border");
}
function setSuccess(input) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector("small");
    small.innerText = "";
    input.classList.add("success-border");
    input.classList.remove("error-border");
}
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}