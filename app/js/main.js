window.addEventListener('scroll', () => {
    let value = window.scrollY;

    document.querySelector('.title').style.marginTop = value * 2.5 + 'px';
    document.querySelector('.leaf').style.top = value * -1.5 + 'px';
    document.querySelector('.leaf').style.right = value * -1.5 + 'px';

    document.querySelector('.hill1').style.top = value * 1 + 'px';
    document.querySelector('.hill4').style.left = value * -1.5 + 'px';
    document.querySelector('.hill5').style.right = value * -1.5 + 'px';
});


document.querySelector('.body').addEventListener('touchmove', () => {
    let value = document.querySelector('.body').scrollY;

    document.querySelector('.title').style.marginTop = value * 2.5 + 'px';
    document.querySelector('.leaf').style.top = value * -1.5 + 'px';
    document.querySelector('.leaf').style.right = value * -1.5 + 'px';

    document.querySelector('.hill1').style.top = value * 1 + 'px';
    document.querySelector('.hill4').style.left = value * -1.5 + 'px';
    document.querySelector('.hill5').style.right = value * -1.5 + 'px';

    console.log('fg');
});