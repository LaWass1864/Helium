// Mouse Events

const greenmouse = document.querySelector('.greenmouse');
const graymouse = document.querySelector('.graymouse');
const blackmouse = document.querySelector('.blackmouse');
const link = document.querySelector("a");


link.addEventListener('mouseover', () => {  
  greenmouse.style.cursor = "pointer";

})

window.addEventListener("mousemove", (e) => {
    blackmouse.style.left = e.pageX + "px";
    blackmouse.style.top = e.pageY + "px";   
    graymouse.style.left = e.pageX + "px";
    graymouse.style.top = e.pageY + "px";
    greenmouse.style.left = e.pageX + "px";
    greenmouse.style.top = e.pageY + "px";
  });


//   window.open("http://google.com", "cours js", "height=600, width=800");
