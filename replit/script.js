document.addEventListener('DOMContentLoaded', function() {
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const wasActive = section.classList.contains('active');
            
            // Toggle the active state
            section.classList.toggle('active');
            
            // Add a little bounce animation
            if (!wasActive) {
                section.style.animation = 'bounceIn 0.5s ease';
                setTimeout(() => {
                    section.style.animation = '';
                }, 500);
            }
        });
    });
    
    // Optional: Open the first section by default
    const firstSection = document.querySelector('.collapsible-section');
    if (firstSection) {
        firstSection.classList.add('active');
    }
});

// Add a subtle parallax effect on scroll
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.prototype-card');
    const scrolled = window.pageYOffset;
    
    cards.forEach((card, index) => {
        const speed = 0.05 + (index % 3) * 0.02;
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px) rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`;
    });
});
