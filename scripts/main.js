const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
const rexbutton = document.querySelector("h4");
const snoopybutton = document.querySelector("h5")
myHeading.addEventListener("click", function () {
    myHeading.textContent = "Welcome to Amanda's Website!";
});
rexbutton.addEventListener("click", function () {
    rexbutton.textContent = "He is 7 years old.";
});
snoopybutton.addEventListener("click", function () {
    snoopybutton.textContent = "He is 4 years old.";
});

