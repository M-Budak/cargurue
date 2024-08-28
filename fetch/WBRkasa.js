function createCard(model) {
  return `
    <div class="kasa-list col-lg-3 col-6">
      <div class="card car-card">
        <a href="${model.link}" class="card-link">
          <img src="${model.image}" class="card-img-top" alt="Araç Resmi">
          <div class="card-body">
            <h5 class="card-title">${model.title}</h5>
          </div>
        </a>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('data/kasa.json')
    .then(response => response.json())
    .then(data => {
      Object.keys(data).forEach(category => {
        const container = document.getElementById(category.toLowerCase().replace(/\s+/g, ''));
        if (container) {
          const models = data[category];
          container.innerHTML = models.map(createCard).join('');
        } else {
          console.error(`Container with id '${category.toLowerCase().replace(/\s+/g, '')}' not found.`);
        }
      });
    })
    .catch(error => {
      console.error('Error loading data:', error);
      document.querySelector('.carbody').innerHTML = '<p>Veri yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>';
    });
});
