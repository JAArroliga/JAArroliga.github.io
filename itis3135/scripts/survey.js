const nameInput = document.getElementById("name-input");
const mascotInput = document.getElementById("mascot-input");
const imageInput = document.getElementById("image-input");
const captionInput = document.getElementById("caption-input");
const personalBackgroundInput = document.getElementById("personal-background-input");
const professionalBackgroundInput = document.getElementById("professional-background-input");
const academicBackgroundInput = document.getElementById("academic-background-input");
const webDevBackgroundInput = document.getElementById("web-dev-background-input");
const computerPlatformInput = document.getElementById("computer-platform-input");
const coursesInput = document.getElementById("courses-input");
const funnyThingInput = document.getElementById("funny-thing-input");
const anythingElseInput = document.getElementById("anything-else-input");

const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const addClassButton = document.getElementById("add-class-button");
const removeClassButton = document.getElementById("remove-class-button");

const byodiv = document.getElementById("byo-div");
const courseDiv = document.getElementById("course-div");
const result = document.getElementById("result");


const inputs = [
    nameInput,
    mascotInput,
    imageInput,
    captionInput,
    personalBackgroundInput,
    professionalBackgroundInput,
    academicBackgroundInput,
    webDevBackgroundInput,
    computerPlatformInput,
    funnyThingInput,
    anythingElseInput
];

function resetForm() {
    document.getElementById("byo-form").reset();

    result.hidden = true;
    byodiv.hidden = false;

    const courseInputs = document.querySelectorAll(".course-input");
    courseInputs.forEach(input => input.remove());
}

addClassButton.addEventListener("click", () => {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.classList.add("course-input");
    newInput.required = true;

    courseDiv.appendChild(newInput);
});

removeClassButton.addEventListener("click", () => {
    const courseInputs = document.querySelectorAll(".course-input");
    if (courseInputs.length > 0) {
        courseInputs[courseInputs.length - 1].remove();
    }
});

submitButton.addEventListener("click", () => {
    event.preventDefault();

    const filled = inputs.every(input => input.value !== "");
    const courseInputs = document.querySelectorAll(".course-input");
    const courses = [];

    courseInputs.forEach(course => {courses.push(course.value)});

    if (!filled) {
        alert("Please make sure all fields are filled out");
        return;
    }

    byodiv.hidden = true;

    const image = URL.createObjectURL(imageInput.files[0]);

    result.innerHTML = `
       <h2>Introduction</h2>
        
        <figure>
            <a href="${image}">
                <img src="${image}" alt="${captionInput.value}" height="300" width="auto"> 
            </a>
            <figcaption> ${captionInput.value}</figcaption>
        </figure>
        <ul>
            <li><b>Personal Background:</b> ${personalBackgroundInput.value}</li>
            <li><b>Professional Background:</b> ${professionalBackgroundInput.value}</li>
            <li><b>Academic Background:</b> ${academicBackgroundInput.value}</li>
            <li><b>Primary Computer Platform:</b> ${computerPlatformInput.value}</li>
            <li><b>Courses I&#39;m Taking, & Why:</b> 
                <ul>
                    ${courses.map(value => `<li>${value}</li>`).join('')}
                </ul>
            </li>
            <li><b>Funny Thing?: </b> ${funnyThingInput.value}</li>
            <li><b>Anything Else?:</b> ${anythingElseInput.value}</li>
        </ul> 
    `;
    
    const newResetButton = document.createElement("button");
    newResetButton.id = "new-reset-button";
    newResetButton.innerText = "Reset";
    newResetButton.type = "button";
    newResetButton.addEventListener("click", resetForm);
    result.appendChild(newResetButton);

    result.hidden = false;
});

resetButton.addEventListener("click", resetForm);