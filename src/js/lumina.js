// Light effect
function activateLightEffect() {
    const containers = document.querySelectorAll('.container');
    
    containers.forEach(container => {
        if (!container.hasAttribute('data-light-enabled')) {
            container.setAttribute('data-light-enabled', 'true');
            container.addEventListener('mousemove', (e) => {
                const light = container.querySelector('.light');
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                light.style.transform = `translate(${x}px, ${y}px)`;
                light.style.opacity = 1;
            });
            container.addEventListener('mouseleave', () => {
                const light = container.querySelector('.light');
                light.style.opacity = 0;
            });
        }
    });
}
