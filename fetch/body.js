// JSON dosyasını çek
fetch('../data/testdata.json')
    .then(response => response.json())
    .then(data => {
        // given-ids adını verilen div'i seç
        const givenIdsContainer = document.getElementById('given-ids');
        const modelIds = givenIdsContainer.getAttribute('data-model-ids').split(',');

        // Her model için kart oluştur
        modelIds.forEach(modelId => {
            const modelData = data[modelId];
            if (modelData) {
                // Kartın dış yapısını oluştur
                const card = document.createElement('div');
                card.className = 'col-lg-3 col-6'; // Bu sınıfları ekleyerek genişlik ve yüksekliği ayarlıyoruz

                // Kartın içeriğini oluştur
                card.innerHTML = `
                    <div class="card car-card h-100">
                        <a href="${modelData.link}">
                            <img src="${modelData.img}" class="card-img-top" alt="${modelData.alt}">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">${modelData.brand} ${modelData.model}</h5>
                        </div>
                    </div>
                `;

                // Kartı container'a ekle
                givenIdsContainer.appendChild(card);
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
