document.addEventListener('DOMContentLoaded', function() {
    const hoverWords = document.querySelectorAll('.hover-word');
    const imageContainer = document.getElementById('hover-image-container');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    let latched = false;
    let latchedImg = null;
    
    hoverWords.forEach(word => {
        word.addEventListener('mouseenter', function() {
            if (!latched) {
                showImage(word.dataset.img);
            }
        });
        word.addEventListener('mouseleave', function() {
            if (!latched) {
                hideImage();
            }
        });
        word.addEventListener('click', function() {
            if (latched && latchedImg === word.dataset.img) {
                latched = false;
                latchedImg = null;
                hideImage();
            } else {
                latched = true;
                latchedImg = word.dataset.img;
                showImage(word.dataset.img);
            }
        });
    });

    function showImage(imgSrc) {
        imageContainer.innerHTML = `<img src="${imgSrc}" alt="Hover Image">`;
        imageContainer.style.display = 'block';
    }
    function hideImage() {
        imageContainer.style.display = 'none';
        imageContainer.innerHTML = '';
    }
    
    // Hamburger menu functionality
    if (hamburgerMenu && navLinks) {
        const body = document.body;
        const navLinksItems = navLinks.querySelectorAll('a');
        
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('no-scroll');
            if (hamburgerMenu.classList.contains('active')) {
                window.scrollTo(0, 0);
            }
        });
        
        // Close menu when clicking on a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    }
    

});