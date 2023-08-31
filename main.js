// Function To Change Icon
let icon = document.querySelector(".i");

let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

// Function To Open Menu

let menu = document.querySelector(".ul");

icon.addEventListener("click", function () {
  menu.classList.toggle("block");
});

// Botton To Top

let btn = document.getElementById("btn");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
