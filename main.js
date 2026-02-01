
const generateBtn = document.getElementById('generate-btn');
const lottoNumbers = document.querySelectorAll('.number');

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
