document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const colorChanger = document.getElementsByClassName('color-changer')[0];

    colorChanger.addEventListener('click', () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        color1 = `rgb(${R},${G},${B})`;
        color2 = `rgb(${255- R},${255-G},${255-B})`;
        root.style.setProperty('--color-1', color1);
        root.style.setProperty('--color-2', color2);
        colorChanger.classList.toggle('animate');
    });
});
