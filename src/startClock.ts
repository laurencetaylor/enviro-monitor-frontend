const tickClock = (): void => {
    const targetDiv = document.querySelector('.current-time');
    const currentTime = new Date();
    targetDiv.innerHTML = currentTime.toLocaleTimeString();
};

const startClock = (): void => {
    tickClock();
    setInterval(tickClock, 1000);
};

export { startClock };
