document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector('h1');
    setInterval(() => {
        h1.style.visibility = h1.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 1000);
});
