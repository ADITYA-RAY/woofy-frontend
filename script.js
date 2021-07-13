const mainMenu = document.querySelector(".mainMenu");
var closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-120%";
}

function openlogin(){
  document.getElementsByClassName("herotxt")[0].style.opacity="0";
  document.getElementsByClassName("loginwrap")[0].style.opacity="1";
  document.getElementsByClassName("loginwrap")[0].style.display="block";
  document.getElementsByClassName("hero")[0].style.opacity="0.3";
  
}

function closelogin(){
  document.getElementsByClassName("herotxt")[0].style.opacity="1";
  document.getElementsByClassName("loginwrap")[0].style.opacity="0";
  document.getElementsByClassName("loginwrap")[0].style.display="none";
  document.getElementsByClassName("hero")[0].style.opacity="1";
  
}

function opensignup(){
  document.getElementsByClassName("loginwrap")[0].style.opacity="0";
  document.getElementsByClassName("loginwrap")[0].style.display="none";
  document.getElementsByClassName("signupwrap")[0].style.opacity="1";
  document.getElementsByClassName("signupwrap")[0].style.display="block";
  
}
function closesignup(){
  document.getElementsByClassName("herotxt")[0].style.opacity="1";
  document.getElementsByClassName("signupwrap")[0].style.opacity="0";
  document.getElementsByClassName("signupwrap")[0].style.display="none";
  document.getElementsByClassName("hero")[0].style.opacity="1";
}

function opensignin(){
  document.getElementsByClassName("loginwrap")[0].style.opacity="1";
  document.getElementsByClassName("loginwrap")[0].style.display="block";
  document.getElementsByClassName("signupwrap")[0].style.opacity="0";
  document.getElementsByClassName("signupwrap")[0].style.display="none";
  
}

