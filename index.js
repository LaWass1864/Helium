// Mouse Events

const greenmouse = document.querySelector('.greenmouse');
const graymouse = document.querySelector('.graymouse');
const blackmouse = document.querySelector('.blackmouse');
const link = document.querySelector("a");
const logo = document.querySelector("h2");


link.addEventListener('mouseover', () => {  
  greenmouse.style.cursor = "pointer";
  logo.style.cursor = "pointer";  
})

window.addEventListener("mousemove", (e) => {
    blackmouse.style.left = e.pageX + "px";
    blackmouse.style.top = e.pageY + "px";   
    graymouse.style.left = e.pageX + "px";
    graymouse.style.top = e.pageY + "px";
    greenmouse.style.left = e.pageX + "px";
    greenmouse.style.top = e.pageY + "px";
  });

link.addEventListener('click', () => {
  link.style.background.toggle = "pink";
})


// ForEach
