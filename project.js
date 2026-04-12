const buttons = document.querySelectorAll('.button');
const circle = document.querySelector('.circle');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const Style = window.getComputedStyle(btn);
        const color = Style.backgroundColor; 

        circle.style.backgroundImage = `radial-gradient(circle, ${color}, transparent)`;
        circle.style.backgroundColor = 'transparent';
        circle.classList.add('is-large');

        circle.classList.add('is-large');
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            circle.classList.remove('is-large');
        }, 1000);
    });
  });