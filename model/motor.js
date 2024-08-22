document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedModel = urlParams.get('model');

    if (!selectedModel) {
        console.error('Model parametresi bulunamadı.');
        return;
    }

    fetch('motor.json')
        .then(response => response.json())
        .then(data => {
            const motorContainer = document.querySelector('.button-container');
            motorContainer.innerHTML = '';  // Butonları temizle

            const motorlar = data[selectedModel];
            if (!motorlar) {
                console.error(`Model "${selectedModel}" bulunamadı.`);
                return;
            }

            motorlar.forEach((motor, index) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'btn btn-motor';
                button.setAttribute('data-motor', motor);
                button.textContent = motor.split('_').join(' ');

                button.addEventListener('click', function() {
                    document.querySelectorAll('.btn-motor').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    showCategory(motor);
                });

                motorContainer.appendChild(button);

                if (index === 0) {
                    button.classList.add('active');
                    button.click();
                }
            });
        })
        .catch(error => console.error('Motor verileri yüklenirken hata oluştu:', error));
});

function showCategory(category) {
    showFeatures(category);
    showScores(category);
    showReviews(category);
}
