import './styles.scss';

let activeSection = 'home';
const devSection = document.getElementById('dev');

function isDevSectionActive() {
    return Array.from(document.getElementById('dev').classList).includes('active') ? true : false;
}

function toggleListItemAnimation() {
    const elToAnimate = '.highlights li';
    const highlightedElementActive = Array.from(
        document.querySelector(elToAnimate).classList
    ).includes('animated');
    if (isDevSectionActive()) {
        Array.from(document.querySelectorAll(elToAnimate)).forEach((el, index) => {
            let value = el.getAttribute('data-highlight');
            setTimeout(function () {
                if (isDevSectionActive()) {
                    el.style.width = Number(value) * 10 + '%';
                    el.classList.add('animated');
                } else {
                    el.style.width = 40 + '%';
                    el.classList.remove('animated');
                }
            }, index * 100 + 100);
        });
    } else if (highlightedElementActive) {
        console.log('we got one');
        Array.from(document.querySelectorAll(elToAnimate)).forEach((el, index) => {
            let value = el.getAttribute('data-highlight');
            el.style.width = 40 + '%';
            el.classList.remove('animated');
        });
    }
}

document.body.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName == 'A' && e.target.href.includes('#')) {
        e.preventDefault();
        activeSection = e.target.href.split('#')[1];
        setTimeout(function () {
            document.querySelector('section.active').classList.remove('active');
            document.getElementById(activeSection).classList.add('active');
            toggleListItemAnimation();
        }, 300);
    }
});

window.onload = () => {
    document.querySelector('body').classList.remove('no-js');
    document.querySelector('section').classList.add('active');
};
