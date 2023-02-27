const anim = lottie

anim.loadAnimation ({
    container: document.querySelector('#lottie_test'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './sources/lottie_icon1.json'
});

anim.loadAnimation ({
    container: document.querySelector('#lottie_test1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './sources/lottie_icon2.json'
});

anim.loadAnimation ({
    container: document.querySelector('#lottie_test2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './sources/lottie_icon4.json'
});

anim.loadAnimation ({
    container: document.querySelector('#lottie_test3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './sources/lottie_icon5.json'
});

anim.setSpeed(0.5)