// Your code goes here
const mainImage = document.querySelector("header.intro img");
mainImage.addEventListener("mouseover", (e) => {
  e.target.style.transform = "scale(1.2)";
  e.target.style.zIndex = "1";
});
mainImage.addEventListener("mouseout", (e) => {
  e.target.style.transform = "scale(1)";
  e.target.style.zIndex = "0";
});
document.body.addEventListener("keydown", (e) => {
  const welcome = document.querySelector("div.container header.intro");
  if (e.keyCode === 68) {
    welcome.style.display = "none";
  } else if (e.keyCode === 65) {
    welcome.style.display = "block";
  }
});

const images = document.querySelectorAll("section.content-section img");
images.forEach((img) => {
  img.addEventListener("dblclick", (e) => {
    if (e.target.getAttribute("src") === "img/adventure.jpg")
      e.target.src = "img/fun.jpg";
    else if (e.target.getAttribute("src") === "img/fun.jpg")
      e.target.src = "img/adventure.jpg";
  });
});

const text = document.querySelectorAll("p");
text.forEach((img) => {
  img.addEventListener("wheel", (e) => {
    if (e.target.style.color === "" || e.target.style.color === "black")
      e.target.style.color = "green";
    else if (e.target.style.color === "green") e.target.style.color = "black";
  });
});

const windowSize = document.getElementById("windowSize");
showResize();
function showResize() {
  windowSize.textContent = `H: ${window.innerHeight} W:${window.innerWidth}`;
}
window.onresize = showResize;

const package = document.querySelector(".package");
const buttons = document.querySelectorAll("section.content-pick div.btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const text = e.target.parentNode.querySelector("h4").textContent;
    package.value = text;
  });
});
const name = document.querySelector(".name");
name.addEventListener("focus", (e) => {
  if (package.value === "") alert("Please remember to select a package.");
});
name.addEventListener("select", (e) => {
  alert("Stop selecting stuff");
});

window.addEventListener("load", (e) => {
  console.log("Page Loaded...");
});

window.addEventListener("scroll", (e) => {
  console.log("Window", window.scrollY);
});

const movingImg = document.querySelector(".content-destination img");
movingImg.addEventListener("drag", (e) => {
  e.target.style.transform = "scale(.8)";
});
movingImg.addEventListener("mouseout", (e) => {
  e.target.style.transform = "scale(1)";
});

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
