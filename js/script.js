
window.addEventListener('load', () => {
    const container = document.querySelector('.parallax');
    const image = document.querySelector('.overlap-img');

    container.addEventListener('mousemove', (e) => {
    // 1. Get the width and height of the container
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // 2. Calculate cursor position relative to the center (values between -0.5 and 0.5)
    const mouseX = (e.clientX / width) - 0.5;
    const mouseY = (e.clientY / height) - 0.5;

    // 3. Set how many pixels max you want the image to move (e.g., 30px)
    const movementStrength = 10; 

    const moveX = mouseX * movementStrength;
    const moveY = mouseY * movementStrength;

    // 4. Apply the movement while maintaining the original centering transform
    image.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });

    // Optional: Reset image position when the mouse leaves the container
    container.addEventListener('mouseleave', () => {
    image.style.transform = 'translate(-50%, -50%)';
    });
})
