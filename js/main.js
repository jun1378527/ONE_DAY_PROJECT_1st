const carousel = document.querySelector(".carousel");
const banner = document.querySelector(".banner");
const btns = document.querySelectorAll(".btn");
const pics = ["img/event1.png", "img/event2.png", "img/event3.png"];
const gradients = ["bg-gradient-1", "bg-gradient-2", "bg-gradient-3"];
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

// 로그인 버튼 클릭 이벤트
document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 기본 이벤트를 방지합니다.
    document.getElementById("loginModal").style.display = "block"; // 로그인 모달을 표시합니다.
  });

// 닫기 버튼 클릭 이벤트
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "none"; // 로그인 모달 숨김
});

// 윈도우 밖 클릭 시 로그인 창 닫기
window.onclick = function (event) {
  if (event.target == document.getElementById("loginModal")) {
    document.getElementById("loginModal").style.display = "none";
  }
};
