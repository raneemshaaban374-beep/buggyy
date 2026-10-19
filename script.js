const button = document.getElementById("toggle");//typo//
const body = document.querySelector("body");//typo//

button.addEventListener("click", toggleTheme);

function toggleTheme(){
  body.classList.toggle("dark");
}