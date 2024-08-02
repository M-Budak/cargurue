// fetch_brands_data.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('data/brands.json') // veya gerçek API URL'niz
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verilerin geldiğinden emin olmak için konsola yazdırın
            
            const brandsContainer = document.getElementById('six_brands');
            
            if (brandsContainer) {
                data.brands.forEach(brand => {
                    const brandDiv = document.createElement('div');
                    brandDiv.className = 'brand-item'; // Stilinize göre sınıf adı
        
                    brandDiv.innerHTML = `
                        <h3>${brand.name}</h3>
                        <img src="${brand.logo}" alt="${brand.name} logo">
                        <p>${brand.description}</p>
                    `;
        
                    brandsContainer.appendChild(brandDiv);
                });
            }
        })
        .catch(error => console.error('Hata:', error));
});
