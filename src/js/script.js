
        
        window.onload = function() {
            alert("Welcome to my portfolio!");
        };

       
        const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.querySelector('.nav-list');
        
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active'); // Toggle the active class to show/hide the menu
        });