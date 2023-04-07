

// xử lí khi loading trang web
window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});

// xử lí khi cuộn chuột thì thêm class sticky vào header
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
    const moveTop = document.querySelector('.top');
    moveTop.classList.toggle('sticky', window.scrollY > 0);
});

const navLinks = document.querySelectorAll(".header__nav--link"); // lấy tất cả link của navigation
const currentSection = document.querySelectorAll("section"); // lấy tất cả section liên quan đến các link

// xử lí khi click vào link thì remove class active khỏi tất cả và thêm class active vào link mới click
navLinks.forEach( link => {
    link.addEventListener("click", () => {
        navLinks.forEach( link => link.classList.remove("active"));
        link.classList.add("active");
    });
});

// hàm xử lí khi cuộn chuột thì thêm class active vào section hiện tại trên màn hình
function handleScroll() {
    const scrollPosition = window.scrollY;

    // duyệt qua từng link
    navLinks.forEach( link => {

        // lấy id của vùng tương ứng với link
        const currentSectionID = link.getAttribute("href");

        // lấy vùng tương ứng với id
        const section = document.querySelector(currentSectionID);

        // Nếu vùng đó nằm trong màn hình, thì add class active vào link
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", handleScroll); // gọi hàm handleScroll khi người dùng cuộn chuột

// Menu media

const menu = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".header__menu");
const menuOverlay = document.querySelector(".header__nav--overlay");
const closeBtn = document.querySelector(".menu__close");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
    menuOverlay.style.display = "block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    menuOverlay.style.display = "none";
    menuBtn.style.display = "block";
});

menuOverlay.addEventListener("click", () => {
    menu.classList.remove("active");
    menuOverlay.style.display = "none";
});

// slider

const sliderBtns = document.querySelectorAll(".slider__nav--btn");
const slideImgs = document.querySelectorAll(".home__slider--img");
const slideContents = document.querySelectorAll(".home__content");

var sliderNav = function (manual) {
    sliderBtns.forEach(btn => {
        btn.classList.remove("active");
    });

    slideImgs.forEach(img => {
        img.classList.remove("active");
    });

    slideContents.forEach((content, index) => {
        content.classList.remove("active");
    });

    sliderBtns[manual].classList.add("active");
    slideImgs[manual].classList.add("active");
    slideContents[manual].classList.add("active");
};

sliderBtns.forEach((btn, i) => {
    btn.addEventListener("click", (manual) => {
        sliderNav(i);
    });
});

let currentSlide = 0;

setInterval(() => {
    currentSlide++;
    if (currentSlide === sliderBtns.length) {
        currentSlide = 0;
    }
    sliderNav(currentSlide);
}, 8000);

// Clock timer

var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 2);

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".sales__timer--clock .day h2").text(days);
    $(".sales__timer--clock .hour h2").text(hours);
    $(".sales__timer--clock .minute h2").text(minutes);
    $(".sales__timer--clock .second h2").text(seconds);

    if (distance < 0) {
        clearInterval(x);
        $(".sales__timer--clock").html("EXPIRED");
    }
}, 1000);

// Button open form


const slideBtn = document.querySelectorAll(".button-text");
const formOverlay = document.querySelector(".form-overlay");
const screenForm = document.querySelector(".screen-form");
const screenClose = document.querySelector(".close--btn");
const saleBtn = document.querySelector(".sales__info--btn");
const productBtn = document.querySelectorAll(".product__btn--order");
const otherProductBtn = document.querySelectorAll(".shop__card--btn");

slideBtn.forEach( btn => {
    btn.addEventListener("click", () => {
        formOverlay.classList.add("active");
        screenForm.classList.add("active");
    });
});

screenClose.addEventListener("click", () => {
    formOverlay.classList.remove("active");
    screenForm.classList.remove("active");
});

formOverlay.addEventListener("click", () => {
    formOverlay.classList.remove("active");
    screenForm.classList.remove("active");
});

saleBtn.addEventListener("click", () => {
    formOverlay.classList.add("active");
    screenForm.classList.add("active");
});

productBtn.forEach( btn => {
    btn.addEventListener("click", () => {
        formOverlay.classList.add("active");
        screenForm.classList.add("active");
    });
});

otherProductBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        formOverlay.classList.add("active");
        screenForm.classList.add("active");
    });
});







