const femaleBtn = document.getElementById("female");
const maleBtn = document.getElementById("male");
const selectAgeInput = document.getElementById("select-age");
const feetInput = document.getElementById("height-feet");
const inchesInput = document.getElementById("height-inches");
const weightInput = document.getElementById("weight");
const lifestyleInput = document.getElementById("lifestyle-dropdown");
const calculateBtn = document.getElementById("calculate-button");
const resultDiv = document.getElementById("results");

for (let i = 1; i < 101; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectAgeInput.appendChild(option);
}

for (let i = 0; i < 9; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    feetInput.appendChild(option);
}

for (let i = 0; i < 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    inchesInput.appendChild(option);
}

const maleMacroCalc = () => {
    const weight = Number(weightInput.value) * 0.453592;
    const height= ((Number(feetInput.value) * 12) + Number(inchesInput.value)) * 2.54;
    const age = Number(selectAgeInput.value);
    const lifestyle = Number(lifestyleInput.value);

    return Math.round((10 * weight + 6.25 * height - 5 * age + 5) * lifestyle);
};

const femaleMacroCalc = () => {
    const weight = Number(weightInput.value) * 0.453592;
    const height= ((Number(feetInput.value) * 12) + Number(inchesInput.value)) * 2.54;
    const age = Number(selectAgeInput.value);
    const lifestyle = Number(lifestyleInput.value);

    return Math.round((10 * weight + 6.25 * height - 5 * age - 161) * lifestyle);
};

calculateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    resultDiv.innerHTML = "";
    let macros;
    
    if (femaleBtn.checked) {
        macros = femaleMacroCalc();
    } else if (maleBtn.checked) {
        macros = maleMacroCalc();
    }

    if (macros) {
        const carbs = Math.round((macros * .40) / 4);
        const protiens = Math.round((macros * .30) / 4);
        const fats = Math.round((macros * .30) / 9);
        
        resultDiv.innerHTML = `
        <div> Your Average Daily calorie intake should be around: ${macros} calories</div>
        <div> You should have around ${carbs} grams of carbs, ${protiens} grams of proteins, and ${fats} grams of fats per day</div>
        `;
    } else {
        resultDiv.innerHTML +=  `<div>Please make sure all fields are filled out correctly.</div>`;
    }

    
});