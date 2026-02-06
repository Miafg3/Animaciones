const percentage = 70;
const circle = document.querySelector(".progress-circle");
const text = document.getElementById("percentage");

const radius = 80;
const circumference = 2 * Math.PI * radius;

const offset = circumference - (percentage / 100) * circumference;

circle.style.strokeDasharray = circumference;
circle.style.setProperty("--offset", offset);

text.textContent = `${percentage}%`;