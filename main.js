
const generateBtn = document.getElementById('generate-btn');
const lottoNumbers = document.querySelectorAll('.number');
const themeToggleButton = document.getElementById('theme-toggle-button');
const body = document.body;

const themeConfirmationModal = document.getElementById('theme-confirmation-modal');
const colorPreview = document.getElementById('color-preview');
const confirmThemeChangeBtn = document.getElementById('confirm-theme-change');
const cancelThemeChangeBtn = document.getElementById('cancel-theme-change');

let targetTheme;

// Function to apply the theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = '밝게';
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.textContent = '어둡게';
    }
    localStorage.setItem('theme', theme);
};

// Check for saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no theme is saved, check system preference
    applyTheme('dark');
} else {
    applyTheme('light');
}


// Event listener for theme toggle button
themeToggleButton.addEventListener('click', () => {
    targetTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    
    if (targetTheme === 'dark') {
        colorPreview.style.backgroundColor = '#2c2c2c';
    } else {
        colorPreview.style.backgroundColor = '#f0f2f5';
    }
    
    themeConfirmationModal.style.display = 'block';
});

// Event listener for confirm button
confirmThemeChangeBtn.addEventListener('click', () => {
    applyTheme(targetTheme);
    themeConfirmationModal.style.display = 'none';
});

// Event listener for cancel button
cancelThemeChangeBtn.addEventListener('click', () => {
    themeConfirmationModal.style.display = 'none';
});


generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    lottoNumbers.forEach((number, index) => {
        // Add a small delay for each ball to appear
        setTimeout(() => {
            number.textContent = sortedNumbers[index];
            // A simple scale animation
            number.style.transform = 'scale(1.1)';
            setTimeout(() => {
                number.style.transform = 'scale(1)';
            }, 100);
        }, index * 100);
    });
});
