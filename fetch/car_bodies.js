class CarBodies extends HTMLElement {
  connectedCallback() {
      this.render();
      this.applyResponsiveBehavior();
      window.addEventListener('resize', this.applyResponsiveBehavior.bind(this));
  }

  render() {
      this.innerHTML = `
          <h2 id="kasa" class="genel-baslik-2">Kasa Tipleri</h2>
                      <div class="row row-cols-3 row-cols-md-6 g-4 mt-3 justify-content-center align-items-center">
                <div class="brand kasa-card">
                  <a href="kasa/sedan.html" class="brand-link"> 
                      <div class="card h-100 d-flex flex-column align-items-center">
                          <div class="home-card-body">
                              <h5 class="home-text-brand">Sedan</h5>
                          </div>
                      </div>
                  </a>
                </div>
                <div class="brand kasa-card">
                  <a href="kasa/hatchback.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Hatchback</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card">
                  <a href="kasa/suv.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">SUV</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card">
                  <a href="kasa/pickup.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Pick-Up</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card">
                  <a href="kasa/crossover.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Crossover</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card" id="show-more">
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Diğerleri</h5>
                      </div>
                    </div>
                </div>
                <div class="brand kasa-card hidden">
                  <a href="kasa/mpv.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">MPV</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card hidden">
                  <a href="kasa/station.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Station</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card hidden">
                  <a href="kasa/cabrio.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Cabrio</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card hidden">
                  <a href="kasa/coupe.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Coupe</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card hidden">
                  <a href="kasa/minivan.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Minivan</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card hidden">
                  <a href="kasa/panelvan.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Panelvan</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card hidden">
                  <a href="kasa/micro.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Micro</h5>
                      </div>
                    </div>
                  </a>
                </div>
            </div>
      `;
      this.addEventListeners();
  }

  addEventListeners() {
      const showMoreBtn = this.querySelector('#show-more');
      showMoreBtn.addEventListener('click', this.showMore.bind(this));
  }

  showMore() {
      const hiddenCards = this.querySelectorAll('.hidden');
      hiddenCards.forEach(card => card.classList.remove('hidden'));
      const showMoreBtn = this.querySelector('#show-more');
      showMoreBtn.style.display = 'none'; // "Diğerleri" butonunu gizle
  }

  applyResponsiveBehavior() {
      const screenWidth = window.innerWidth;
      const hiddenCards = this.querySelectorAll('.hidden');
      if (screenWidth > 769) {
          hiddenCards.forEach(card => card.classList.remove('hidden'));
          this.querySelector('#show-more').style.display = 'none'; // "Diğerleri" butonunu gizle
      } else {
          hiddenCards.forEach(card => card.classList.add('hidden'));
          this.querySelector('#show-more').style.display = 'flex'; // "Diğerleri" butonunu göster
      }
  }
}

customElements.define('car-bodies', CarBodies);
