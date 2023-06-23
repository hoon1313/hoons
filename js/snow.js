const body = document.querySelector("body");
const time = 10;

function makeSnow() {
    const snowflake = document.createElement("div");
    const delay = Math.random() * 10;
    const initialOpacity = Math.random();
    const duration = Math.random() * 20 + time;

    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * window.screen.width}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = initialOpacity;
    snowflake.style.animation = `snow ${duration}s linear`
    
    body.appendChild(snowflake);

    setTimeout(() => {
        body.removeChild(snowflake);
        makeSnow();
    }, (duration + delay) * 1000);
}

for (let i = 0; i < 50; i++) {
    setTimeout(makeSnow, 500 * i);
}