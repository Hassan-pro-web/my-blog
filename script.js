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
document.addEventListener("mousemove", function (event) {
    let bulb = document.getElementById("lightbulb");
    let x = event.clientX / window.innerWidth - 0.5;
    let y = event.clientY / window.innerHeight - 0.5;
    bulb.style.transform = `translateX(-50%) rotate(${x * 20}deg) translateY(${y * 20}px)`;
});
let bulb = document.getElementById("lightbulb");

bulb.addEventListener("click", function () {
    if (bulb.style.fill === "yellow") {
        bulb.style.fill = "#424242"; // Off
    } else {
        bulb.style.fill = "yellow"; // On
    }
});

