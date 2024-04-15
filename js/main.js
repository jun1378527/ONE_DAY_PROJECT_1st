const carousel = document.querySelector(".carousel");
const banner = document.querySelector(".banner");
const btns = document.querySelectorAll(".btn");
const pics = [
  "img/event1.png",
  "img/event2.png",
  "img/event3.png",
  "img/event4.png",
];
const gradients = [
  "bg-gradient-1",
  "bg-gradient-2",
  "bg-gradient-3",
  "bg-gradient-4",
];
let selected = 0;

carousel.style.backgroundImage = `url(${pics[selected]})`;
banner.classList.add(gradients[selected]);
btns[selected].classList.add("active");

btns.forEach((btn, index) => {
  btn.onclick = function () {
    carousel.style.backgroundImage = `url(${pics[index]})`;
    banner.className = "banner " + gradients[index];
    btns[selected].classList.remove("active");
    btn.classList.add("active");
    selected = index;
  };
});

setInterval(() => {
  btns[selected].classList.remove("active");
  selected = (selected + 1) % pics.length;
  carousel.style.backgroundImage = `url(${pics[selected]})`;
  banner.className = "banner " + gradients[selected];
  btns[selected].classList.add("active");
}, 7000);

document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("loginModal").style.display = "block";
    document.getElementById("signUpModal").style.display = "none";
  });

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "none";
});
document.querySelector(".close2").addEventListener("click", function () {
  document.getElementById("signUpModal").style.display = "none";
});
document.getElementById("signUpbtn").addEventListener("click", function () {
  document.getElementById("signUpModal").style.display = "block";
});
window.onclick = function (event) {
  if (event.target == document.getElementById("loginModal")) {
    document.getElementById("loginModal").style.display = "none";
  } else if (event.target == document.getElementById("signUpModal")) {
    document.getElementById("signUpModal").style.display = "none";
  }
};
