document.addEventListener("DOMContentLoaded", function() {
    // JSON dosyasını yükleyelim
    fetch('motor.json')
        .then(response => response.json())
        .then(data => {
            // motor.json'dan gelen veriyi kullanarak butonları oluşturalım
            const motorContainer = document.querySelector('.button-container');

            // Örneğin Golf 8 motorları için, golf_8 anahtarını kullanarak butonları oluşturuyoruz
            const motorlar = data.golf_8;

            motorlar.forEach(motor => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'btn btn-custom';
                button.setAttribute('onclick', `showCategory('${motor}')`);
                button.textContent = motor.split('_').join(' ');  // Buton textini daha okunabilir hale getiriyoruz
                motorContainer.appendChild(button);
            });
        })
        .catch(error => console.error('Motor verileri yüklenirken hata oluştu:', error));
});
