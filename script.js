function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}
const button = document.getElementById('toggleButton');
const bulb = document.querySelector('.bulb-glow');

let isOn = false;

button.addEventListener('click', () => {
    isOn = !isOn;
    bulb.style.fill = isOn ? 'rgba(255, 255, 0, 0.9)' : 'rgba(255, 255, 0, 0.2)';
});

