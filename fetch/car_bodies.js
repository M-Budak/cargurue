class CarBodies extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h2 id="kasa" class="genel-baslik-2">Kasa Tipleri</h2>
            <div class="row row-cols-3 row-cols-md-6 g-4 mt-3 justify-content-center align-items-center">
                <div class="brand kasa-card">
                  <a href="kasa.html#sedan" class="brand-link"> 
                      <div class="card h-100 d-flex flex-column align-items-center">
                          <img src="logo/sedan.svg" class="home-img-kasa" alt="Sedan">
                          <div class="home-card-body">
                              <h5 class="home-text-brand">Sedan</h5>
                          </div>
                      </div>
                  </a>
                </div>
                <div class="brand kasa-card">
                  <a href="kasa.html#hb" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <img src="logo/hatchback.svg" class="home-img-kasa" alt="Hatchback">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Hatchback</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card">
                  <a href="kasa.html#suv" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <img src="logo/suv.svg" class="home-img-kasa" alt="SUV">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">SUV</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card">
                  <a href="kasa.html#cabrio" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <img src="logo/cabrio.svg" class="home-img-kasa" alt="Cabrio">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Cabrio</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card">
                  <a href="kasa.html#minivan" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <img src="logo/minivan.svg" class="home-img-kasa" alt="Minivan">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Minivan</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="brand kasa-card">
                  <a href="kasa.html#pickup" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                      <img src="logo/pickup.svg" class="home-img-kasa" alt="Pick-Up">
                      <div class="home-card-body">
                        <h5 class="home-text-brand">Pick-Up</h5>
                      </div>
                    </div>
                  </a>
                </div>
            </div>
        `;
    }
}

customElements.define('car-bodies', CarBodies);
