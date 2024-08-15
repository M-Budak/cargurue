document.addEventListener("DOMContentLoaded", function() {
    fetch('model.json')
        .then(response => response.json())
        .then(data => {
            // URL'den model ID'sini alın (Örneğin: egea_sedan)
            const urlParams = new URLSearchParams(window.location.search);
            const modelId = urlParams.get('model') || 'egea_sedan'; // Default olarak 'egea_sedan' kullanılır - bu ne abi neden default bunu alıyorum?!

            const model = data.models.find(m => m.id === modelId);

            if (model) {
                // Title
                document.title = model.title;

                // H1 Başlığı
                document.querySelector('.genel-baslik-1').textContent = model.name;

                // Açıklama Paragrafı
                document.querySelector('.container p').textContent = model.description;

                // Görsel
                const imgElement = document.querySelector('.container img');
                imgElement.src = model.image;
                imgElement.alt = model.alt;
            } else {
                console.error('Model bulunamadı!');
            }
        })
        .catch(error => console.error('JSON dosyası yüklenirken hata oluştu:', error));
});
