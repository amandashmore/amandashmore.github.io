const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
const rexbutton = document.querySelector("h4");
const snoopybutton = document.querySelector("h5")
myHeading.addEventListener("click", function () {
    myHeading.textContent = "Welcome to Amanda's Website!";
});
document.getElementById("rexbutton").addEventListener("click", function() {
    document.getElementById("rex").style.display = "block";
});
document.getElementById("snoopybutton").addEventListener("click", function() {
    document.getElementById("rex").style.display = "block";
});