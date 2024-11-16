const container = document.querySelector('.container');
const light = document.querySelector('.light');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    light.style.top = `${y}px`;
    light.style.left = `${x}px`;
});
