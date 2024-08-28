document.addEventListener('DOMContentLoaded', function () {
    const yorumlarDiv = document.getElementById('yorumlar');

    // Yorumlar JSON dosyasından verileri almak için
    fetch('../data/testyorum.json')
        .then(response => response.json())
        .then(data => {
            // Her butonun tıklanması durumunda ilgili motor numarasıyla eşleşen yorumları getireceğiz
            const buttons = document.querySelectorAll('.engine-button');
            buttons.forEach(button => {
                button.addEventListener('click', function () {
                    const engineId = button.getAttribute('id'); // Butonun id'sini al
                    const reviews = filterReviewsByEngine(data, engineId); // Yorumları filtrele
                    renderReviews(reviews); // Filtrelenen yorumları göster
                });
            });
        });

    // Motor numarasına göre yorumları filtreleyen fonksiyon
    function filterReviewsByEngine(reviewsData, engineId) {
        const filteredReviews = [];
        for (const key in reviewsData) {
            if (reviewsData[key].engine === engineId) {
                filteredReviews.push(reviewsData[key]);
            }
        }
        return filteredReviews;
    }

    // Yorumları sayfada göstermek için kullanılan fonksiyon
    function renderReviews(reviews) {
        // Önceki yorumları temizle
        yorumlarDiv.innerHTML = '';

        if (reviews.length === 0) {
            const noReviewMessage = document.createElement('p');
            noReviewMessage.textContent = 'Bu motor için henüz yorum yok.';
            yorumlarDiv.appendChild(noReviewMessage);
            return;
        }

        reviews.forEach(review => {
            const card = createReviewElement(review);
            yorumlarDiv.appendChild(card);
        });
    }

    // Yorum kartını oluşturan fonksiyon
    function createReviewElement(review) {
        const card = document.createElement('div');
        card.className = 'card';

        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        const cardTitle = document.createElement('h4');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = `<strong>${review.author}</strong>`;
        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = `${review.date} ${review.duration}`;
        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(cardText);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const cardContent = document.createElement('p');
        cardContent.className = 'card-text';
        cardContent.textContent = review.content;
        cardBody.appendChild(cardContent);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        return card;
    }
});
