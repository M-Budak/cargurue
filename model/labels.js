// labels.js

document.addEventListener('DOMContentLoaded', function() {
    fetch('labels.json')
        .then(response => response.json())
        .then(labels => {
            // Özellikler bölümü başlığı
            document.querySelector('h2.genel-baslik-2:nth-of-type(1)').textContent = labels.sections.features;

            // Yorumlar bölümü başlığı
            document.querySelector('h2.genel-baslik-2:nth-of-type(2)').textContent = labels.sections.reviews;

            // İlgini Çekebilecek Araçlar bölümü başlığı
            document.querySelector('h2.genel-baslik-2:nth-of-type(3)').textContent = labels.sections.related_cars;
        })
        .catch(error => console.error('Error loading labels:', error));
});
