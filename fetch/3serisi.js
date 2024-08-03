// URL'yi güncelleyen fonksiyon
function updateURL(category) {
    const url = new URL(window.location);
    url.searchParams.set('category', category);
    window.location.href = url.href;
}

// Sayfa yüklendiğinde URL parametresini kontrol edip verileri yükleme
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
        loadCategoryData(category);
    }
};

// Verileri yükleyen fonksiyon
function loadCategoryData(category) {
    fetch('data/3serisi.json')
        .then(response => response.json())
        .then(data => {
            if (data[category]) {
                const skor = data[category].skor;
                const skorContainer = document.getElementById('skor-container');
                skorContainer.innerHTML = `
                    <p>
                        <span class="skor_number">${skor.genel}</span>
                        <span class="skor_unit">/ 10</span>
                    </p>
                    <p class="skor-oy">113 Oy</p>
                    <div class="skor-puan col-md-6">
                        <div class="row">
                            <div class="col-4">
                                <h4>Performans</h4>
                                <p>
                                    <span class="s_number">${skor.performans}</span>
                                    <span class="s_unit">/ 10</span>
                                </p>
                            </div>
                            <div class="col-4">
                                <h4>Konfor</h4>
                                <p>
                                    <span class="s_number">${skor.konfor}</span>
                                    <span class="s_unit">/ 10</span>
                                </p>
                            </div>
                            <div class="col-4">
                                <h4>Tasarım</h4>
                                <p>
                                    <span class="s_number">${skor.tasarım}</span>
                                    <span class="s_unit">/ 10</span>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <h4>Sürüş</h4>
                                <p>
                                    <span class="s_number">${skor.sürüş}</span>
                                    <span class="s_unit">/ 10</span>
                                </p>
                            </div>
                            <div class="col-4">
                                <h4>Servis</h4>
                                <p>
                                    <span class="s_number">${skor.servis}</span>
                                    <span class="s_unit">/ 10</span>
                                </p>
                            </div>
                            <div class="col-4">
                                <h4>Malzeme</h4>
                                <p>
                                    <span class="s_number">${skor.malzeme}</span>
                                    <span class="s_unit">/ 10</span>
                                </p>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                console.error(`Kategori "${category}" bulunamadı.`);
            }
        })
        .catch(error => console.error('Veriler yüklenirken hata oluştu:', error));
}
