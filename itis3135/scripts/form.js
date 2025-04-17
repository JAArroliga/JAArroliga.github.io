const selectValue = document.getElementById("rats");
const phoneNumberInput = document.getElementById("phone-number-input");
const resetButton = document.getElementById("reset-button");

for (let i = 0; i < 101; i++) {
    const option = document.createElement("option");
    if (i === 100) {
        option.value = "100+";
        option.textContent = "100+";
    } else {
        option.value = i;
        option.textContent = i;
    }
    selectValue.appendChild(option);
}

phoneNumberInput.addEventListener("input", () => {
    const value = phoneNumberInput.value;
    const regex = /^1?\s?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;

    if (!regex.test(value)) {
        alert("Please enter a valid phone number");
    }
});

resetButton.addEventListener("click", () => {
    document.getElementById("survey").reset();
});