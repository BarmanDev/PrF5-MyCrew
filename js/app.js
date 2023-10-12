function toggleMenu() {
    let menu = document.querySelector(".menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

const img = ["../assets/img/1.jpg", "../assets/img/2.jpg", "../assets/img/3.jpg"];

let count = 0;

function slider(container) {
    container.addEventListener('click', element => {
        let back = container.querySelector('.btn-back');
        let forward = container.querySelector('.btn-forward'); 
        let imgElement = container.querySelector('img');
        let target = element.target; 

        if (target === back) {
            count = (count - 1 + img.length) % img.length; 
            imgElement.src = img[count]; 

        } else if (target === forward) {
            count = (count + 1) % img.length;
            imgElement.src = img[count];

        }
    });
}

function toggleSlogan() {
    const logo = document.getElementById('logo');
    const slogan = document.querySelector('.slogan');

    logo.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el enlace del logo redirija a otra página

        slogan.classList.add('visible');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector('.container-slider');
    slider(container);
    toggleSlogan();
});