const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
})

const mainFn = () => {
    if (window.pageYOffset > navbarOffsetTop) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, index) => {
        if (window.pageYOffset > section.offsetTop - 10) {
            navbarLinks.forEach(link => {
                link.classList.remove('change');
            })
            navbarLinks[index].classList.add('change');
        }
    })

    if (window.pageYOffset + window.innerHeight > progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, idx) => {
            el.style.width = `${progressBarPercents[idx]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[idx];
        })
    }
}

mainFn();

window.addEventListener('scroll', mainFn);
window.addEventListener('resize', mainFn);