document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/renault.json')
        .then(response => response.json())
        .then(data => {
            const categories = ['sedan', 'suv', 'elektrikli'];

            categories.forEach(category => {
                const container = document.getElementById(category);

                data[category].forEach(car => {
                    const carCard = document.createElement('div');
                    carCard.classList.add('col-lg-6', 'col-12');

                    carCard.innerHTML = `
                        <div class="card car-card">
                            <img src="${car.image}" class="card-img-top-brand" alt="${car.name}">
                            <div class="card-body">
                                <a href="${car.link}">
                                    <h5 class="card-title">${car.name}</h5>
                                </a>
                            </div>
                        </div>
                    `;

                    container.appendChild(carCard);
                });
            });
        })
        .catch(error => console.error('Error fetching Renault data:', error));
});
