import './styles.scss';

let activeSection = 'home';
const devSection = document.getElementById('dev');

const isDevSectionActive = () =>
    Array.from(devSection.classList).includes('active') ? true : false;

const toggleListItemAnimation = () => {
    const elToAnimate = '.highlights li';
    const elToAnimateArr = Array.from(document.querySelectorAll(elToAnimate));
    const isAnimatedElActive = Array.from(document.querySelector(elToAnimate).classList).includes(
        'animated'
    );
    if (isDevSectionActive()) {
        elToAnimateArr.forEach((el, index) => {
            let value = el.getAttribute('data-highlight');
            setTimeout(() => {
                el.style.width = Number(value) * 10 + '%';
                el.classList.add('animated');
            }, index * 100 + 100);
        });
    } else if (isAnimatedElActive) {
        elToAnimateArr.forEach((el, index) => {
            let value = el.getAttribute('data-highlight');
            el.style.width = 40 + '%';
            el.classList.remove('animated');
        });
    }
};

document.body.addEventListener('click', (e) => {
    // const isJavaScriptDisabled = !document.querySelector('body').classList.contains('no-js');
    if (e.target && e.target.nodeName == 'A' && e.target.href.includes('#')) {
        e.preventDefault();
        activeSection = e.target.href.split('#')[1];
        setTimeout(() => {
            document.querySelector('section.active').classList.remove('active');
            document.getElementById(activeSection).classList.add('active');
            toggleListItemAnimation();
            document.querySelector('section.active').scrollTo(0, 0);
        }, 300);
    }
});

window.onload = () => {
    document.querySelector('body').classList.remove('no-js');
    document.querySelector('section').classList.add('active');
    console.log('woohoo, you opened the JavaScript console! zero frameworks here.');
};
