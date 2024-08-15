let scoreData = {};

document.addEventListener('DOMContentLoaded', function() {
    fetch('score.json')
        .then(response => response.json())
        .then(data => {
            scoreData = data;
        })
        .catch(error => console.error('Error fetching score data:', error));
});

function showScores(category) {
    const scoreContainer = document.getElementById('score');
    scoreContainer.innerHTML = '';

    if (scoreData[category]) {
        const categoryData = scoreData[category];

        const scoreElement = document.createElement('div');
        scoreElement.className = 'col-md-6';
        scoreElement.innerHTML = `
            <div class="row">
                <div class="col-7">
                    <h2 class="skor-baslik">Skor</h2>
                    <p class="skor-bilgi">Bu sonuçlar kullanıcılar tarafından verilen puanların ortalamasıdır.</p>
                    <a href="../puan_ver.html?page=BMW%20320i" class="modal-btn-oy">Oy Ver</a>
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
    }
}
