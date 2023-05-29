const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate a random color close to purple with 50% opacity
function getRandomColor() {
    const r = Math.floor(Math.random() * 50 + 150);
    const g = Math.floor(Math.random() * 50);
    const b = Math.floor(Math.random() * 50 + 150);
    const a = 0.25;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Draw random overlapping circles
function drawCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 100;
        const color = getRandomColor();

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}

// Redraw circles on window resize
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCircles();
});

// Initial drawing
drawCircles();
