let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let front = document.getElementById('mountains_front');
let behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', () => {
    let varY = window.scrollY;
    stars.style.left = varY + 'px';
    moon.style.top = varY * 1.1 + 'px';
    text.style.marginRight = varY * 1.8 +'px';
    text.style.marginTop = varY * 1.2 +'px';
    btn.style.marginTop = varY * 1.5 +'px';
    front.style.top = varY * 0.05 +'px'
})

