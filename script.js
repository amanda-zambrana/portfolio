/* ------------------------------------------------------------------------------------------ */

/* BEGIN SCRIPT FOR RAINBOW SQUIGGLY LINE */

// Select the canvas and set up the drawing context
const canvas = document.getElementById('squigglyCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the window size 
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Animation variables for the rainbow squiggle
let progress = -50; // start off-screen
const speed = 10; // speed of animation
const amplitude = 20; // height of the squiggles
const frequency = 0.03; // how frequent the waves are
const numLines = 6; // one line for each rainbow color
const lineSpacing = 10; // Space between each line

const colors = ['#ff6970', '#ffad69', '#ffeb69', '#6dd964', '#6ec8f5', '#b572fc']

// Function to draw the squiggly lines across the screen
function drawSquigglyLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numLines; i++) {
        ctx.strokeStyle = colors[i]; // setting the colors for each line
        ctx.lineWidth = 11;
        ctx.beginPath();

        // Offset each line vertically
        let yOffset = i * lineSpacing;

        // Extend drawing range beyond the screen edges
        let startX = -50; // start before the screen on the left
        let endX = canvas.width + 50; // extend beyond the screen on the right

        for (let x = startX; x < Math.min(progress, endX); x +=5) {
            let y = canvas.height / 2 + Math.sin(x * frequency) * amplitude + yOffset;
            if (x == startX) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    }

    // increment progress and continue the animation
    if (progress < canvas.width + 50) {
        progress += speed;
        requestAnimationFrame(drawSquigglyLines);
    }
}

// Draw the squiggly line when the page loads
window.addEventListener('load', () => {
    progress = -50; // start animation off screen
    drawSquigglyLines();
});

/* END SCRIPT FOR RAINBOW SQUIGGLY LINE */
/* ----------------------------------------------------------------------------------------- */
