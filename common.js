let currentIndex1 = 0;
const slider1 = document.getElementById("image-slider1");
const slides1 = document.querySelectorAll(".slide-image");
const totalSlides1 = 3;
console.warn({ totalSlides1 });
setInterval(() => {
  currentIndex1 = (currentIndex1 + 1) % totalSlides1;
  updateSlider1();
}, 3000); // Change slide every 3 seconds

function updateSlider1() {
  const translateValue1 = -currentIndex1 * 100 + "%";
  slider1.style.transform = "translateX(" + translateValue1 + ")";
}

// JavaScript for image sliding - Card 2
let currentIndex2 = 0;
const slider2 = document.getElementById("image-slider2");
const slides2 = document.querySelectorAll(".slide-image");
const totalSlides2 = 3;

setInterval(() => {
  currentIndex2 = (currentIndex2 + 1) % totalSlides2;
  updateSlider2();
}, 3000); // Change slide every 3 seconds

function updateSlider2() {
  const translateValue2 = -currentIndex2 * 100 + "%";
  slider2.style.transform = "translateX(" + translateValue2 + ")";
}

// JavaScript for image sliding - Card 3
let currentIndex3 = 0;
const slider3 = document.getElementById("image-slider3");
const slides3 = document.querySelectorAll(".slide-image");
const totalSlides3 = 3;

setInterval(() => {
  currentIndex3 = (currentIndex3 + 1) % totalSlides3;
  updateSlider3();
}, 3000); // Change slide every 3 seconds

function updateSlider3() {
  const translateValue3 = -currentIndex3 * 100 + "%";
  slider3.style.transform = "translateX(" + translateValue3 + ")";
}

// JavaScript for image sliding - Card 4
let currentIndex4 = 0;
const slider4 = document.getElementById("image-slider4");
const slides4 = document.querySelectorAll(".slide-image");
const totalSlides4 = 3;

setInterval(() => {
  currentIndex4 = (currentIndex4 + 1) % totalSlides4;
  updateSlider4();
}, 3000); // Change slide every 3 seconds

function updateSlider4() {
  const translateValue4 = -currentIndex4 * 100 + "%";
  slider4.style.transform = "translateX(" + translateValue4 + ")";
}
