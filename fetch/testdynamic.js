document.addEventListener("DOMContentLoaded", function() {
    // Model verilerini yükle
    fetch('../data/testdata.json')
        .then(response => response.json())
        .then(data => {
            const urlParams = new URLSearchParams(window.location.search);
            const slug = urlParams.get('model');

            const modelData = Object.values(data).find(model => model.slug === slug);

            if (modelData) {
                document.querySelector('.genel-baslik-1').textContent = `${modelData.brand} ${modelData.model}`;
                document.querySelector('.description').textContent = modelData.desc;

                const imgElement = document.querySelector('.img-fluid');
                imgElement.src = modelData.img;
                imgElement.alt = modelData.alt;

                const buttonContainer = document.querySelector('.button-container');
                modelData.engine.forEach((engineCode, index) => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'btn btn-custom';
                    button.textContent = modelData.engineName[index];
                    button.dataset.engineId = engineCode;
                    button.addEventListener('click', () => {
                        document.querySelectorAll('.btn-custom').forEach(btn => btn.classList.remove('active'));
                        button.classList.add('active');
                        
                        showScores(engineCode);
                        showFeatures(engineCode);
                        showComments(engineCode);
                    });
                    buttonContainer.appendChild(button);
                });

                activateFirstButton(); // İlk butona tıklamayı buradan çağırın

                showSimilarModels(modelData.similar);

                AOS.init();
            } else {
                console.error("Model kodu bulunamadı veya geçersiz.");
            }
        })
        .catch(error => console.error("Veri yüklenirken bir hata oluştu: ", error));

    function activateFirstButton() {
        const firstButton = document.querySelector('.btn-custom');
        if (firstButton) {
            document.querySelectorAll('.btn-custom').forEach(btn => btn.classList.remove('active'));
            firstButton.classList.add('active');
            firstButton.click();
        }
    }

    function showSimilarModels(similarIds) {
        const scrollableCards = document.querySelector('.scrollable-cards');
        scrollableCards.innerHTML = '';

        fetch('../data/testdata.json')
            .then(response => response.json())
            .then(data => {
                similarIds.forEach(id => {
                    const model = data[id];
                    if (model) {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.style.width = '225px';

                        const link = document.createElement('a');
                        link.href = model.link;

                        const img = document.createElement('img');
                        img.src = model.img;
                        img.classList.add('card-img-top');
                        img.alt = model.alt;

                        const title = document.createElement('h5');
                        title.classList.add('yeni-eklenen-title');
                        title.textContent = `${model.brand} ${model.model}`;

                        link.appendChild(img);
                        link.appendChild(title);
                        card.appendChild(link);
                        scrollableCards.appendChild(card);
                    }
                });
            })
            .catch(error => console.error("Benzer modeller yüklenirken bir hata oluştu: ", error));
    }

    function showScores(engineId) {
        fetch('../data/testskor.json')
            .then(response => response.json())
            .then(scoreData => {
                const categoryData = scoreData[engineId];
                if (!categoryData) {
                    console.error('Skorlar yüklenemedi.');
                    return;
                }
    
                const scoreContainer = document.getElementById('score');
                scoreContainer.innerHTML = '';
    
                const scoreElement = document.createElement('div');
                scoreElement.className = 'col-md-6';
                scoreElement.innerHTML = `
                    <div class="row">
                        <div class="col-7">
                            <h2 class="skor-baslik">Skor</h2>
                            <p class="skor-bilgi">Bu sonuçlar kullanıcılar tarafından verilen puanların ortalamasıdır.</p>
                            <a href="../puan_ver.html?page=${encodeURIComponent(engineId)}" class="btn btn-custom">Oy Ver</a>
                        </div>
                        <div class="skor col-5">
                            <p>
                                <span class="skor_number">${categoryData.average}</span>
                                <span class="skor_unit">/ 5</span>
                            </p>
                            <p class="skor-oy">${categoryData.votes} Oy</p>
                        </div>
                    </div>
                `;
                scoreContainer.appendChild(scoreElement);
    
                const scoresElement = document.createElement('div');
                scoresElement.className = 'skor-puan col-md-6';
                let categoriesHtml = '';
                for (const [key, value] of Object.entries(categoryData.categories)) {
                    categoriesHtml += `
                        <div class="col-4">
                            <h4>${key}</h4>
                            <p>
                                <span class="s_number">${value}</span>
                                <span class="s_unit">/ 5</span>
                            </p>
                        </div>
                    `;
                }
                scoresElement.innerHTML = `<div class="row">${categoriesHtml}</div>`;
                scoreContainer.appendChild(scoresElement);
            })
            .catch(error => console.error("Skor verileri yüklenirken bir hata oluştu: ", error));
    }

    function showFeatures(category) {
        fetch('../data/testfeatures.json')
            .then(response => response.json())
            .then(featuresData => {
                const featuresContainer = document.getElementById('ozellikler');
                featuresContainer.innerHTML = '';

                if (featuresData[category]) {
                    const features = featuresData[category];
                    const featureNames = [
                        "Max Hız", 
                        "0-100", 
                        "Yakıt", 
                        "Beygir", 
                        "Vites", 
                        "Tork", 
                        "Tüketim", 
                        "Bagaj"
                    ];

                    const featureUnits = [
                        "km/h", 
                        "s", 
                        "",         
                        "hp", 
                        "",         
                        "nm", 
                        "lt/100km", 
                        "lt"
                    ];

                    const icons = [
                        'speed',                  
                        'avg_pace',               
                        'local_gas_station',      
                        'bolt',                   
                        'auto_transmission',      
                        'settings',               
                        'local_gas_station',      
                        'luggage'                 
                    ];

                    features.forEach((value, index) => {
                        const featureElement = createFeatureElement(featureNames[index], value, featureUnits[index], icons[index]);
                        featuresContainer.appendChild(featureElement);
                    });
                }
            })
            .catch(error => console.error('Özellikler verileri yüklenirken bir hata oluştu: ', error));
    }

    function createFeatureElement(name, value, unit, icon) {
        const featureElement = document.createElement('div');
        featureElement.className = 'feature col-3';
        featureElement.innerHTML = `
            <h4>${name}</h4>
            <span class="material-symbols-outlined">
                ${icon}
            </span>
            <p>
                <span class="feature_value">${value}</span>
                <span class="feature_unit">${unit}</span>
            </p>
        `;
        return featureElement;
    }


    // Yorumlar için maksimum gösterim sayısını belirleyen parametre
const maxVisibleComments = 5; // Bu değeri istediğiniz gibi değiştirebilirsiniz.

function showComments(engineCode) {
    fetch('../data/testyorum.json')
        .then(response => response.json())
        .then(commentsData => {
            const commentsContainer = document.getElementById('yorumlar');
            commentsContainer.innerHTML = '';

            const engineComments = Object.values(commentsData).filter(comment => comment.engine === engineCode);

            if (engineComments.length > 0) {
                let visibleCount = 0;

                const loadMoreComments = () => {
                    const nextBatch = engineComments.slice(visibleCount, visibleCount + maxVisibleComments);
                    nextBatch.forEach(comment => {
                        const commentElement = document.createElement('div');
                        commentElement.className = 'card yorum-card';
                        commentElement.innerHTML = `
                            <div class="card-header">
                                <h4 class="card-title"><strong>${comment.author}</strong></h4>
                                <p class="card-text">${comment.date} ${comment.duration}</p>
                            </div>
                            <div class="card-body">
                                <p class="card-text">${comment.content}</p>
                            </div>
                        `;
                        commentsContainer.insertBefore(commentElement, loadMoreButton);
                    });
                    visibleCount += nextBatch.length;

                    // Yorumların hepsi yüklendiyse butonu gizle
                    if (visibleCount >= engineComments.length) {
                        loadMoreButton.style.display = 'none';
                    }
                };

                const loadMoreButton = document.createElement('button');
                loadMoreButton.className = 'btn btn-custom mt-2';
                loadMoreButton.textContent = 'Daha Fazla Yükle';
                loadMoreButton.style.display = 'none'; // Başlangıçta gizli
                loadMoreButton.addEventListener('click', loadMoreComments);

                commentsContainer.appendChild(loadMoreButton);

                loadMoreComments(); // İlk yorum kümesini yükle

                if (engineComments.length > maxVisibleComments) {
                    loadMoreButton.style.display = 'block'; // Eğer fazla yorum varsa butonu göster
                }
            } else {
                commentsContainer.innerHTML = '<p>Henüz yorum yapılmamış.</p>';
            }

            const newCommentElement = document.createElement('div');
            newCommentElement.className = 'card yorum-card';
            newCommentElement.innerHTML = `
                <div class="card-body">
                    <textarea class="form-control" id="newComment" placeholder="Yorumunuzu buraya yazın..."></textarea>
                    <button id="submitComment" class="btn btn-custom mt-2">Gönder</button>
                </div>
            `;
            commentsContainer.appendChild(newCommentElement);

            document.getElementById('submitComment').addEventListener('click', () => {
                const newCommentText = document.getElementById('newComment').value;
                if (newCommentText.trim() !== '') {
                    console.log('Yeni yorum:', newCommentText);
                } else {
                    alert('Yorum alanı boş olamaz.');
                }
            });
        })
        .catch(error => console.error('Yorum verileri yüklenirken bir hata oluştu: ', error));
}

});
