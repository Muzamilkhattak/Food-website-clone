document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('Order process starting!');
});

// Smooth scroll effect for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
