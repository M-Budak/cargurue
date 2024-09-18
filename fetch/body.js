// JSON dosyasını çek
fetch('../data/testdata.json')
    .then(response => response.json())
    .then(data => {
        // Her section'daki container'ları toplu olarak seç
        const containers = document.querySelectorAll('[data-model-ids]');
        
        // Her container için kartları oluştur
        containers.forEach(container => {
            const modelIds = container.getAttribute('data-model-ids').split(',');

            // Her model için kart oluştur
            modelIds.forEach(modelId => {
                const modelData = data[modelId];
                if (modelData) {
                    // Kartın dış yapısını oluştur
                    const card = document.createElement('div');
                    card.className = 'col-lg-6 col-12'; // Bu sınıfları ekleyerek genişlik ve yüksekliği ayarlıyoruz

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
                    container.appendChild(card);
                }
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));
