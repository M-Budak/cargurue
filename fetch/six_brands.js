class BrandsSection extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <h2 class="genel-baslik-2">Otomobil Markaları</h2>
        <div class="row row-cols-3 row-cols-md-6 g-4 mt-3">
          <div class="brand">
            <a href="#" class="brand-link"> 
              <div class="card h-100">
                <img src="logo/bmw.svg" class="six-brand-img" alt="BMW">
                <div class="home-card-body">
                  <h5 class="home-text-brand">BMW</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="brand">
            <a href="#" class="brand-link"> 
              <div class="card h-100">
                <img src="logo/audi.svg" class="six-brand-img" alt="Audi">
                <div class="home-card-body">
                  <h5 class="home-text-brand">Audi</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="brand">
            <a href="#" class="brand-link"> 
              <div class="card h-100">
                <img src="logo/volvo.svg" class="six-brand-img" alt="Volvo">
                <div class="home-card-body">
                  <h5 class="home-text-brand">Volvo</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="brand">
            <a href="#" class="brand-link"> 
              <div class="card h-100">
                <img src="logo/opel.svg" class="six-brand-img" alt="Opel">
                <div class="home-card-body">
                  <h5 class="home-text-brand">Opel</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="brand">
            <a href="#" class="brand-link"> 
              <div class="card h-100">
                <img src="logo/citroen.svg" class="six-brand-img" alt="Citroen">
                <div class="home-card-body">
                  <h5 class="home-text-brand">Citroen</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="brand">
            <a href="/markalar/renault.html" class="brand-link"> 
              <div class="card h-100">
                <img src="logo/renault.svg" class="six-brand-img" alt="Renault">
                <div class="home-card-body">
                  <h5 class="home-text-brand">Renault</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('brands-section', BrandsSection);
  