let nav = document.querySelector(".menu");
let navBtn = document.querySelector(".toggler");
let hedenMenu = document.querySelector(".heden-menu");
let showMenu = document.querySelector(".show-menu");



navBtn.onclick = function () {
 
  if (!nav.classList.contains("show-menu")) {
   nav.classList.add("show-menu");

    hedenMenu.style.cssText = `display: block;`;
    showMenu.style.cssText = `display: none;`;
  
  } else {
    nav.classList.remove("show-menu");
    showMenu.style.cssText = `display: block;`;
    hedenMenu.style.cssText = `display: none;`;
  
  }
};




