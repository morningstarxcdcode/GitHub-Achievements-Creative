// Function to dynamically load badges
const badges = [
    { src: "path/to/badge1.png", alt: "Badge 1" },
    { src: "path/to/badge2.png", alt: "Badge 2" },
    { src: "path/to/badge3.png", alt: "Badge 3" },
    // Add more badge objects up to 1200
];

function loadBadges() {
    const animationArea = document.getElementById('animationArea');
    badges.forEach(badge => {
        const img = document.createElement('img');
        img.src = badge.src;
        img.alt = badge.alt;
        img.className = 'badge';
        img.addEventListener('click', () => {
            alert(`You unlocked: ${badge.alt}`);
        });
        animationArea.appendChild(img);
    });
}

// Call the function to load badges
loadBadges();
