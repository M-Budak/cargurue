document.addEventListener('DOMContentLoaded', function () {
    // JSON dosyasının yolu
    const jsonURL = 'data/model.json';
    
    fetch(jsonURL)
        .then(response => response.json())
        .then(data => {
            populateCards('yeni', data.yeni);
            populateCards('yorum', data.yorum);
            populateCards('popular', data.popular);
        })
        .catch(error => console.error('Veri yüklenirken bir hata oluştu:', error));

    function populateCards(sectionId, models) {
        const section = document.getElementById(sectionId);
        section.innerHTML = ''; // Önceki içerikleri temizle

        models.forEach(model => {
            const cardHtml = `
                <div class="col-lg-6 col-12">
                    <div class="card car-card">
                        <a href="${model.link}">
                            <img src="${model.image}" class="card-img-top-brand" alt="${model.title}">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">${model.title}</h5>
                        </div>
                    </div>
                </div>
            `;
            section.innerHTML += cardHtml;
        });
    }
});
