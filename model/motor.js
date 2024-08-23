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

            motorlar.forEach((motor) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'btn btn-motor';
                button.setAttribute('data-motor', motor);
                button.textContent = motor.split('_').join(' ');

                button.addEventListener('click', function() {
                    // Diğer butonların 'active' sınıfını kaldır
                    document.querySelectorAll('.btn-motor').forEach(btn => btn.classList.remove('active'));
                    // Tıklanan butonu 'active' yap
                    button.classList.add('active');
                    showCategory(motor);  // Motor parametresini geçiriyoruz
                });

                motorContainer.appendChild(button);
            });

            // İlk butona tıklama işlevini ekleyin
            function activateFirstButton() {
                const firstButton = document.querySelector('.btn-motor');
                if (firstButton) {
                    // Diğer butonların 'active' sınıfını kaldır
                    document.querySelectorAll('.btn-motor').forEach(btn => btn.classList.remove('active'));
                    // İlk butonu 'active' yap
                    firstButton.classList.add('active');
                    // İlk butona tıklayın
                    firstButton.click();
                }
            }

            // İlk butona tıklamayı sayfa tamamen yüklendiğinde yapın
            setTimeout(activateFirstButton, 100);  // Küçük bir gecikme ile çalıştır
        })
        .catch(error => console.error('Motor verileri yüklenirken hata oluştu:', error));
});
