const carousel = document.querySelector(".carousel");
const btns = document.querySelectorAll(".btn");
const pics = [
  "img/supreme_margiela_T-shirts1.png",
  "img/supreme_margiela_T-shirts2.png",
  "img/chromehearts_lgmambk.jpg",
  "img/palace_gap_jacket1.png",
  "img/gentlemonster_margiela_sunglass1.png",
  "img/gentlemonster_margiela_sunglass2.png",
];

// carousel의 초기 이미지와 버튼색 초기값 설정
let selected = 0;

carousel.style.backgroundImage = `url(${pics[selected]})`;

btns.forEach((btn, index) => {
  btn.onclick = function () {
    carousel.style.backgroundImage = `url(${pics[index]})`;
    btns[selected].classList.remove("active");
    btn.classList.add("active");
    selected = index;
  };
});

setInterval(() => {
  btns[selected].classList.remove("active");
  selected = (selected + 1) % pics.length;
  carousel.style.backgroundImage = `url(${pics[selected]})`;
  btns[selected].classList.add("active");
}, 5000);
