document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Menu filtering
    const menuItems = [
        {
            name: "Bruschetta",
            description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
            price: "$8.99",
            category: "starters",
            image: "images/Bruschetta.jpg"
        },
        {
            name: "Caesar Salad",
            description: "Romaine lettuce, croutons, parmesan cheese with Caesar dressing",
            price: "$10.99",
            category: "starters",
            image: "images/salad.jpg"
        },
        {
            name: "Grilled Salmon",
            description: "Fresh salmon fillet with lemon butter sauce and seasonal vegetables",
            price: "$22.99",
            category: "mains",
            image: "images/salmon.jpg"
        },
        {
            name: "Filet Mignon",
            description: "8oz tender beef filet with red wine reduction and mashed potatoes",
            price: "$28.99",
            category: "mains",
            image: "images/mignon.jpg"
        },
        {
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
            price: "$7.99",
            category: "desserts",
            image: "images/cake.jpg"
        },
        {
            name: "Tiramisu",
            description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
            price: "$8.99",
            category: "desserts",
            image: "images/tiramisu.jpg"
        }
    ];

    const menuContainer = document.querySelector('.menu-items');
    const categoryButtons = document.querySelectorAll('.menu-categories button');

    // Display all menu items initially
    displayMenuItems(menuItems);

    // Filter menu items when category button is clicked
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.category;
            const filteredItems = category === 'all' 
                ? menuItems 
                : menuItems.filter(item => item.category === category);

            displayMenuItems(filteredItems);
        });
    });

    function displayMenuItems(items) {
        menuContainer.innerHTML = '';
        
        if (items.length === 0) {
            menuContainer.innerHTML = '<p class="no-items">No items found in this category.</p>';
            return;
        }

        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="price">${item.price}</span>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});

