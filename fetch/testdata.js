document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('brand');

    if (!brand) {
        console.error("Brand parameter is missing");
        return;
    }

    fetch('../data/testdata.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Marka verilerini filtrele
            const brandData = Object.values(data).filter(item => item.brand.toLowerCase() === brand.toLowerCase());

            if (brandData.length === 0) {
                console.error("Data for the brand not found");
                return;
            }

            // Navbar ve kategori container'ları seç
            const navbarNav = document.getElementById('navbar-nav');
            const categoriesContainer = document.getElementById('categories-container');
            const categories = [...new Set(brandData.map(item => item.kasa))];

            // Navbar ve section'lar ekleme
            categories.forEach(category => {
                // Navbar item ekleme
                const navItem = document.createElement('li');
                navItem.className = 'nav-item';
                navItem.innerHTML = `<a class="nav-link" href="#${category.toLowerCase()}">${category}</a>`;
                navbarNav.appendChild(navItem);

                // Kategori section ekleme
                const categorySection = document.createElement('div');
                categorySection.id = category.toLowerCase();
                categorySection.innerHTML = `
                    <h2 class="genel-baslik-2">${category} Modeller</h2>
                    <div class="row" data-model-ids="${brandData.filter(item => item.kasa.toLowerCase() === category.toLowerCase()).map(item => item.id).join(',')}"></div>
                `;
                categoriesContainer.appendChild(categorySection);
            });

            // Modelleri göster
            document.querySelectorAll('.row[data-model-ids]').forEach(container => {
                const modelIds = container.getAttribute('data-model-ids').split(',');

                // İlgili modelleri filtrele
                const modelsToShow = modelIds.map(id => data[id]).filter(model => model);

                // Filtrelenen modelleri ekrana bas
                displayModels(container, modelsToShow);
            });

            // Scrollspy'ı yeniden başlat
            const scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');
            new bootstrap.ScrollSpy(document.body, {
                target: '#navbar-example2',
                offset: 0
            });

            // Scroll event listener ekleme
            document.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('#categories-container > div');
                const navLinks = document.querySelectorAll('#navbar-nav .nav-link');
        
                let current = '';
        
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    const sectionBottom = sectionTop + sectionHeight;
        
                    if (window.pageYOffset >= sectionTop - (sectionHeight / 3) && window.pageYOffset < sectionBottom) {
                        current = section.getAttribute('id');
                    }
                });
        
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(current)) {
                        link.classList.add('active');
                    }
                });
            });

            // Sayfa yüklendiğinde ilk section'ı kontrol et
            const event = new Event('scroll');
            document.dispatchEvent(event);
        })
        .catch(error => console.error("Error fetching data:", error));
});

function displayModels(container, models) {
    container.innerHTML = ''; // Boşalt

    models.forEach(model => {
        const modelDiv = document.createElement('div');
        modelDiv.classList.add('kasa-list', 'col-lg-3', 'col-6');

        modelDiv.innerHTML = `
            <div class="card car-card">
                <a href="${model.link}" class="card-link">
                    <img src="${model.img}" class="card-img-top" alt="${model.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${model.model}</h5>
                    </div>
                </a>
            </div>
        `;

        container.appendChild(modelDiv);
    });
}
