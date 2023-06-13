// Mouse Events

const greenmouse = document.querySelector('.greenmouse');
const graymouse = document.querySelector('.graymouse');
const blackmouse = document.querySelector('.blackmouse');
const link = document.querySelector("a");
const logo = document.querySelector("h2");

window.addEventListener("mousemove", (e) => {
    blackmouse.style.left = e.pageX + "px";
    blackmouse.style.top = e.pageY + "px";   
    graymouse.style.left = e.pageX + "px";
    graymouse.style.top = e.pageY + "px";
    greenmouse.style.left = e.pageX + "px";
    greenmouse.style.top = e.pageY + "px";
  });

// On peut l'optimiser ForEach peu importe le nb d'elements qu'il y a

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";

  });
});
