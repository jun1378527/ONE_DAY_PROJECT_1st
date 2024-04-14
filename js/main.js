const carousel = document.querySelector(".carousel");
       
const pics = [
    "img/supreme_margiela_T-shirts1.png",
    "img/supreme_margiela_T-shirts2.png",
    "img/chromehearts_lgmambk.jpg",
    "img/palace_gap_jacket1.png",
    "img/gentlemonster_margiela_sunglass1.png",
    "img/gentlemonster_margiela_sunglass2.png",
    "img/nike_sb_dunk_low_chicago.png",
    "img/CHANEL_ALLURE.jpg"
]


// carousel의 초기 이미지와 버튼색 초기값 설정
let selected = 0;

carousel.style.backgroundImage = `url(${pics[selected]})`;
carousel.style.backgroundRepeat = "no-repeat";

const btns = document.querySelectorAll(".btn");
btns[selected].style.backgroundColor = "black";

for (let i = 0 ; i < pics.length; i++) {
    btns[i].onclick = () => {
        btns[selected].style.backgroundColor = "white";
        carousel.style.backgroundImage = `url(${pics[i]})`;
        btns[i].style.backgroundColor = "black";
        selected = i;  
    }
}

setInterval(() => {
    btns[selected].style.backgroundColor = "white"; // 값을 증가시키기 전에 이전에 활성화되었던 버튼색을 초기화
    selected++; 
    if(selected >= pics.length) selected = 0; // 현재 증가된 값이 pics의 length보다 크다면 다시 0으로 초기화
    carousel.style.backgroundImage = `url(${pics[selected]})`;
    btns[selected].style.backgroundColor = "black"; 
}, 5000); 
