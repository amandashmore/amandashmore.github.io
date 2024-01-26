const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
const myImage = document.querySelector("img");
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
  myImage.setAttribute("src", "images/yellowlab.jpeg");
 } else {
   myImage.setAttribute("src", "images/blacklab.jpeg");
  }
};