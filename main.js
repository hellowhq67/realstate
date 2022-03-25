var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navBar');
if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

const slideshowElements = document.querySelectorAll(".slideshow-element");

let countElements = 1;

setInterval(() => {
  countElements++;
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (countElements > slideshowElements.length) {
    slideshowElements[0].classList.add("current");
    countElements = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 3000);



