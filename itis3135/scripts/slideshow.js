const images = document.getElementsByClassName("images");
const captions = document.getElementsByClassName("captions");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");

images[0].style.display = "block";
captions[0].style.display = "block";

let index = 0;

nextButton.addEventListener("click", () => {
    images[index].style.display = "none";
    captions[index].style.display = "none";
    
    index =  (index + 1) % images.length;

    images[index].style.display = "block";
    captions[index].style.display = "block";
});

backButton.addEventListener("click", () => {
    images[index].style.display = "none";
    captions[index].style.display = "none";
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    
    images[index].style.display = "block";
    captions[index].style.display = "block";
});