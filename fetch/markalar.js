document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('brand');
    
    if (!brand) {
        console.error("Brand parameter is missing");
        return;
    }

    document.querySelector('h1.genel-baslik-1').textContent = `${brand.charAt(0).toUpperCase() + brand.slice(1)} Otomobiller`;

    fetch('../data/markalar.json')
        .then(response => response.json())
        .then(data => {
            const brandData = data[brand.toLowerCase()];
            if (!brandData) {
                console.error("Data for the brand not found");
                return;
            }

            const navbarNav = document.getElementById('navbar-nav');
            const categoriesContainer = document.getElementById('categories-container');

            Object.keys(brandData).forEach(category => {
                const categoryData = brandData[category];
                
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
                    <div class="row"></div>
                `;
                categoriesContainer.appendChild(categorySection);

                // Kategori verilerini ekleme
                const categoryRow = categorySection.querySelector('.row');
                categoryRow.innerHTML = categoryData.map(item => `
                    <div class="col-lg-6 col-12">
                        <div class="card car-card ${item.isComingSoon ? 'coming-soon' : ''}">
                                <a href="${item.link}" ${item.isComingSoon ? 'class="disabled-link"' : ''}>
                            <img src="${item.image}" class="card-img-top-brand ${item.isComingSoon ? 'grayscale' : ''}" alt="${item.name}">
                            <div class="card-body">
                                ${item.isComingSoon ? '<div class="badge">Çok Yakında</div>' : ''}
                                    <h5 class="card-title">${item.name}</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('');
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
