class CarBodies extends HTMLElement {
  connectedCallback() {
      this.render();
  }

  render() {
      this.innerHTML = `
      <a href="arac-yorumu/kasa.html">
          <h2 id="kasa" class="genel-baslik-2">Kasa Tipleri</h2>
      </a>
      <div class="row row-cols-3 row-cols-md-6 g-4 mt-3 justify-content-center align-items-center">
          <div class="brand kasa-card">
              <a href="https://m-budak.github.io/cargurue/kasa/sedan.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                          <h5 class="home-text-brand">Sedan</h5>
                      </div>
                  </div>
              </a>
          </div>
          <div class="brand kasa-card">
              <a href="https://m-budak.github.io/cargurue/kasa/hatchback.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                          <h5 class="home-text-brand">Hatchback</h5>
                      </div>
                  </div>
              </a>
          </div>
          <div class="brand kasa-card">
              <a href="https://m-budak.github.io/cargurue/kasa/suv.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                          <h5 class="home-text-brand">SUV</h5>
                      </div>
                  </div>
              </a>
          </div>
          <div class="brand kasa-card">
              <a href="https://m-budak.github.io/cargurue/kasa/pickup.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                          <h5 class="home-text-brand">Pick-Up</h5>
                      </div>
                  </div>
              </a>
          </div>
          <div class="brand kasa-card">
              <a href="https://m-budak.github.io/cargurue/kasa/spor-otomobiller.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                          <h5 class="home-text-brand">Spor</h5>
                      </div>
                  </div>
              </a>
          </div>
          <div class="brand kasa-card">
              <a href="https://m-budak.github.io/cargurue/kasa/ticari.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                      <div class="home-card-body">
                          <h5 class="home-text-brand">Ticari</h5>
                      </div>
                  </div>
              </a>
          </div>
      </div>
      `;
  }
}

customElements.define('car-bodies', CarBodies);
