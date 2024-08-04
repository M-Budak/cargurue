document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('brand');
    
    if (!brand) {
        console.error("Brand parameter is missing");
        return;
    }

    // Sayfa başlığını dinamik olarak güncelle
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
                        <div class="card car-card">
                            <img src="${item.image}" class="card-img-top-brand" alt="${item.name}">
                            <div class="card-body">
                                <a href="${item.link}">
                                    <h5 class="card-title">${item.name}</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('');
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
        
                    // Sayfanın üst kısmında olan bölümün aktif olmasını sağla
                    if (pageYOffset >= sectionTop - (sectionHeight / 3) && pageYOffset < sectionBottom) {
                        current = section.getAttribute('id');
                    }
                });
        
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(current)) {
                        link.classList.add('active');
                    }
                });

                // Elektrikli butonunu özel olarak kontrol etme
                const elektrikliLink = document.querySelector('#navbar-nav .nav-link[href*="elektrikli"]');
                if (elektrikliLink) {
                    if (current === 'elektrikli') {
                        elektrikliLink.classList.add('active');
                    } else {
                        elektrikliLink.classList.remove('active');
                    }
                }
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
