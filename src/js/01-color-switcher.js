function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timerId = null;

btnStart.addEventListener("click", () => {
    timerId = setInterval(() => {
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
    }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
});

btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    btnStop.disabled = true;
    btnStart.disabled = false;
});
