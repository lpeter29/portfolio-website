document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Close mobile navigation menu
                mobileNav.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable scrolling
                // Scroll to section with smooth behavior
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; // Disable scrolling on the body when menu is open
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling when menu is closed
        }
    });
        
    // Adding event listeners to buttons for notifications
    document.getElementById('download-cv').addEventListener('click', function() {
        alert('CV Downloading...');
    });

    document.getElementById('contact-me').addEventListener('click', function() {
        alert('Contact form opening...');
    });

    document.getElementById('read-more').addEventListener('click', function() {
        alert('Loading more info...');
    });

    document.getElementById('lets-talk').addEventListener('click', function() {
        alert('Opening chat...');
    });

    document.getElementById('submit-form').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission for the demo
        alert('Form submitted!');
    });
    document.getElementById('copy-number').addEventListener('click', function(e) {
        e.preventDefault();
        const phoneNumber = '09215949177';
        navigator.clipboard.writeText(phoneNumber).then(function() {
            alert('Phone number copied to clipboard!');
        }, function(err) {
            alert('Failed to copy text: ' + err);
        });
    });
});
