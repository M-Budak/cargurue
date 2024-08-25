// JSON verinizi fetch işlemiyle çekin
fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    // Dinamik olarak veri ekle
    const sections = {
      'yeni': ['PE48HB1N', 'CT4XHB1N'],
      'yorum': ['most_commented_model_id1', 'most_commented_model_id2'],
      'popular': ['most_popular_model_id1', 'most_popular_model_id2']
    };

    // Her section için işlem yap
    Object.keys(sections).forEach(sectionId => {
      const container = document.getElementById(sectionId);
      const modelIds = sections[sectionId];
      
      // İlgili modelleri filtrele
      const modelsToShow = modelIds.map(id => data[id]).filter(model => model !== undefined);

      // Filtrelenen modelleri ekrana bas
      displayModels(container, modelsToShow);
    });
  });

function displayModels(container, models) {
  models.forEach(model => {
    const modelDiv = document.createElement('div');
    modelDiv.classList.add('col-lg-3', 'col-6');

    modelDiv.innerHTML = `
      <div class="card car-card">
        <a href="${model.link}" class="card-link">
          <img src="${model.img}" class="card-img-top" alt="Araç Resmi">
          <div class="card-body">
            <h5 class="card-title">${model.model}</h5>
          </div>
        </a>
      </div>
    `;

    container.appendChild(modelDiv);
  });
}
