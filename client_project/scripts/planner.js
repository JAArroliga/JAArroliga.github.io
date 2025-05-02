const newExerciseBtn = document.getElementById("add-new-button");
const exerciseForm = document.getElementById("exercise-form");
const addExerciseBtn = document.getElementById("add-exercise-button");
const cancelBtn = document.getElementById("cancel-button");

const exerciseName = document.getElementById("exercise-name");
const exerciseDuration = document.getElementById("exercise-duration");
const exerciseDurationType = document.getElementById("exercise-duration-type");
const exerciseType = document.getElementById("exercise-type");
const selectDay = document.getElementById("select-day");
const exerciseDescription = document.getElementById("exercise-description");

newExerciseBtn.addEventListener("click", () => {
    exerciseForm.style.display = "block";
    newExerciseBtn.style.display = "none";
});

addExerciseBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    const name = exerciseName.value;
    const duration = exerciseDuration.value;
    const durationType = exerciseDurationType.value;
    const type = exerciseType.value;
    const day = selectDay.value;
    const description = exerciseDescription.value;

    if (!name || !duration || !durationType || !type || !day || !description) {
        alert("Please fill in all fields");
        return;
    }

    const column = document.getElementById(day);

    column.innerHTML += `
                        <div class="added-exercise">
                            <p><strong> ${duration} ${durationType} of ${name}  <br>                                  
                            Cateogry: </strong>${type}</p>
                            <p><strong>Description:</strong><br>${description}</p>
                        </div>
                        `;
    

    exerciseForm.style.display = "none";
    newExerciseBtn.style.display = "block";
    
    exerciseForm.reset();
    alert("Exercise added!");
});

cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    exerciseForm.style.display = "none";
    newExerciseBtn.style.display = "block";
});

