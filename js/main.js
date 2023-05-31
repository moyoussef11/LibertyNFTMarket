// Setup
let nav = document.querySelector('.container .header nav');
let bar = document.querySelector('.bars');
let headerContainer = document.querySelector('header .container');
let headerContainerHeader = document.querySelector('header .container .header');
let imageSlide = document.querySelector('#banner');
let sections = document.querySelectorAll("section");
let Links = document.querySelectorAll('.container .header nav ul li a');




// Events
bar.addEventListener('click', show);
window.addEventListener('scroll', fullHeader);


// functions
Links.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector('.container .header nav ul li a.active').classList.remove('active');
        link.classList.add('active');
        let target = link.dataset.filter;
        sections.forEach(section => {
            if (section.classList.contains(target)) {
                section.scrollIntoView({
                    behavior:'smooth'
                })
            }
        })
    })
});
function show() {
    nav.classList.toggle('show');
};
function fullHeader() {
    if (scrollY > 100) {
    headerContainer.style.width = `100%`;
    headerContainerHeader.style.borderRadius = '0';
    headerContainerHeader.style.position = 'fixed';
    headerContainerHeader.style.top='0'    
    } else {
    headerContainer.style.width = `80%`;
    headerContainerHeader.style.borderRadius = `50px`;
    headerContainerHeader.style.position = 'static';
    }
};
let imageArr = ["images/banner-01.png", "images/banner-02.png"];
let count = 0;
function slideImage() {
    let num = imageArr.length - 1;
    imageSlide.setAttribute('src', imageArr[count]);
    if (count === num) {
        count=0;
    } else {
        count++;
    }
    setTimeout(function () {
        slideImage();
    },4000)
};
slideImage();



