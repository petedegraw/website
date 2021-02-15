import './styles.scss';

window.onload = () => document.querySelector('section').classList.add('active');
let activeSection = 'home';
let devSection = document.getElementById('dev');
document.body.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName == 'A') {
        e.preventDefault();
        activeSection = e.target.href.split('#')[1];
        setTimeout(function () {
            document.querySelector('section.active').classList.remove('active');
            document.getElementById(activeSection).classList.add('active');
            if (Array.from(document.getElementById('dev').classList).includes('active')) {
                Array.from(document.querySelectorAll('.highlights li')).forEach((el, index) => {
                    let value = el.getAttribute('data-highlight');
                    setTimeout(function () {
                        el.style.width = Number(value) * 10 + '%';
                        el.classList.add('animated');
                    }, index * 100 + 100);
                });
            } else {
                Array.from(document.querySelectorAll('.highlights li')).forEach((el, index) => {
                    let value = el.getAttribute('data-highlight');
                    setTimeout(function () {
                        el.style.width = 40 + '%';
                        el.classList.remove('animated');
                    }, index * 100 + 100);
                });
            }
        }, 300);
    }
});
