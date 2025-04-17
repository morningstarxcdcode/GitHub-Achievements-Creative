document.getElementById('animateButton').addEventListener('click', function() {
    const animationArea = document.getElementById('animationArea');
    animationArea.innerHTML = '<div class="achievement">🎉 Achievement Unlocked!</div>';
    
    // Add animation effect
    setTimeout(() => {
        animationArea.innerHTML = '';
    }, 2000);
});

// CSS for animation
const style = document.createElement('style');
style.innerHTML = `
    .achievement {
        font-size: 24px;
        animation: fadeIn 1s, fadeOut 1s 1s;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
