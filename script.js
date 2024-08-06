document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const colorChanger = document.getElementsByClassName('color-changer')[0];

    colorChanger.addEventListener('click', () => {
        let randomNumber = Math.floor(Math.random() * 5);
        switch (randomNumber) {
            case 0:
                color1 = '#e15e6e';
                color2 = '#f4f0e5';
                break;
            case 1:
                color1 = '#5bb7b6';
                color2 = '#feffd6';
                break;
            case 2:
                color1 = '#839cb5';
                color2 = '#f2e4f9';
                break;
            case 3:
                color1 = '#8cb0b0';
                color2 = '#f2e0a0';
                break;
            case 4:
                color1 = '#c93e4f';
                color2 = '#f5ea95';
                break;
            default:
                break;
        }
        root.style.setProperty('--color-1', color1);
        root.style.setProperty('--color-2', color2);
        colorChanger.classList.toggle('animate');
    });
});