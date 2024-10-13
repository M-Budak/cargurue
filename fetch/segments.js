class Segments extends HTMLElement {
  connectedCallback() {
      this.render();
      this.applyResponsiveBehavior();
      window.addEventListener('resize', this.applyResponsiveBehavior.bind(this));
  }

  render() {
      this.innerHTML = `
      <a href="arac-yorumu/segment.html">
          <h2 id="segmentler" class="genel-baslik-2">Segmentler</h2>
          </a>
          <div class="segment-row g-4 mt-3">
              <div class="brand segment-card">
                <a href="segments/a-segment.html" class="brand-link "> 
                    <div class="card h-100 d-flex flex-column align-items-center"  style="margin: 0rem;">
                        <div class="home-card-body">
                            <h5 class="home-text-brand">A</h5>
                        </div>
                    </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/b-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">B</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/c-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">C</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/d--segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">D</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/e-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">E</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/f-segment.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                        <div class="home-card-body">
                            <h5 class="home-text-brand">F</h5>
                        </div>
                    </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/m-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">M</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/j-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">J</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/s-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">S</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card" style="width: 8rem;" >
                <a href="segments/s-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">Tümü</h5>
                    </div>
                  </div>
                </a>
              </div>
          </div>
      `;
  }

  applyResponsiveBehavior() {
      const screenWidth = window.innerWidth;
  }
}

customElements.define('car-segments', Segments);
