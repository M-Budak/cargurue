class Segments extends HTMLElement {
  connectedCallback() {
      this.render();
      this.applyResponsiveBehavior();
      window.addEventListener('resize', this.applyResponsiveBehavior.bind(this));
  }

  render() {
      this.innerHTML = `
          <h2 id="segmentler" class="genel-baslik-2">Segmentler</h2>
          <div class="row row-cols-3 row-cols-md-6 g-4 mt-3 justify-content-center align-items-center">
              <div class="brand segment-card">
                <a href="segments/a-segment.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                        <div class="home-card-body">
                            <h5 class="home-text-brand">A Segment</h5>
                        </div>
                    </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/b-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">B Segment</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/c-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">C Segment</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/d--segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">D Segment</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/e-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">E Segment</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/f-segment.html" class="brand-link"> 
                    <div class="card h-100 d-flex flex-column align-items-center">
                        <div class="home-card-body">
                            <h5 class="home-text-brand">F Segment</h5>
                        </div>
                    </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/m-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">M Segment</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/j-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">J Segment</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="brand segment-card">
                <a href="segments/s-segment.html" class="brand-link"> 
                  <div class="card h-100 d-flex flex-column align-items-center">
                    <div class="home-card-body">
                      <h5 class="home-text-brand">S Segment</h5>
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
