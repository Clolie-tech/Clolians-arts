// Sample artwork data
const artworks = [
    {
        id: 1,
        title: "Twilight City Study",
        category: "Urban",
        description: "A moody street sketch where the city breathes in light and shadow.",
        image: "images/gallery/1000590088.jpg"
    },
    {
        id: 2,
        title: "Ethereal Portrait Line",
        category: "Portrait",
        description: "An expressive portrait with delicate lines and emotive atmosphere.",
        image: "images/gallery/1000652336.jpg"
    },
    {
        id: 3,
        title: "Misty Forest Passage",
        category: "Nature",
        description: "A calm landscape captured with soft texture and gentle contrast.",
        image: "images/gallery/1000419287.jpg"
    },
    {
        id: 4,
        title: "Quiet Studio Still Life",
        category: "Still Life",
        description: "An intimate arrangement of objects rendered with patient detail.",
        image: "images/gallery/1000435082.jpg"
    },
    {
        id: 5,
        title: "Nocturnal Street Sketch",
        category: "Urban",
        description: "A nighttime scene alive with rhythm, movement, and texture.",
        image: "images/gallery/1000300916.jpg"
    },
{    
        id: 6,
        title: "Dreamscape Figure Study",
        category: "Figure",
        description: "A captivating figure study with bold gesture and fine tone.",
        image: "images/gallery/1000301184.jpg"
    },
    {
        id: 7,
        title: "Echoes of Loneliness",
        category: "Dark Surrealism",
        description: "A haunting surreal piece that explores themes of isolation and inner turmoil.",
        image: "images/gallery/1000670641.jpg"
    },    
    {
        id: 8,
        title: "Dance in the Shadows",
        category: "Figurative art",
        description: "A timeless monographic sketch capturing an intimate embrace between two lovers, rendered with delicate lines and subtle shading to evoke a sense of romance and nostalgia.",
        image: "images/gallery/1000672400.png"
    },

];

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const modal = document.getElementById('artworkModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.querySelector('.modal-close');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    initTheme();
});

// Load gallery
function loadGallery() {
    galleryGrid.innerHTML = '';
    artworks.forEach(artwork => {
        const item = createGalleryItem(artwork);
        galleryGrid.appendChild(item);
    });
}

// Create gallery item
function createGalleryItem(artwork) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    item.innerHTML = `
        <div class="gallery-item-image">
            <img src="${artwork.image}" alt="${artwork.title}">
        </div>
        <div class="gallery-item-info">
            <h3 class="gallery-item-title">${artwork.title}</h3>
            <p class="gallery-item-category">${artwork.category}</p>
            <p class="gallery-item-description">${artwork.description}</p>
        </div>
    `;
    
    item.addEventListener('click', () => openModal(artwork));
    return item;
}

// Adjust color shade
function adjustColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return "#" + (0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1);
}

// Modal functions
function openModal(artwork) {
    modalImage.src = artwork.image;
    modalImage.alt = artwork.title;
    
    modalTitle.textContent = artwork.title;
    modalDescription.textContent = artwork.description;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// Theme toggle
function initTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update icon
    if (isDarkMode) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Contact form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name') || contactForm.querySelector('input[type="text"]').value,
        email: formData.get('email') || contactForm.querySelector('input[type="email"]').value,
        message: formData.get('message') || contactForm.querySelector('textarea').value
    };
    
    // Simple validation
    if (data.name && data.email && data.message) {
        // In a real application, you would send this data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Modal close events
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Navigation link active state
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth scroll update nav active link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
