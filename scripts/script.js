const buttons = document.querySelectorAll('.theme-button');

function themeChange(event) {

    const container = document.getElementById('demo-theme');
    const clickedButton = event.target;
    const chosenTheme = clickedButton.value;

    container.style.setProperty('--theme', chosenTheme);

    buttons.forEach(btn => btn.classList.remove('active'));

    clickedButton.classList.add('active');
};

buttons.forEach(button => {
    button.addEventListener('click', themeChange);
});