class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .footer_haberler .col-12 li {
                    margin-left: auto;
                    margin-right: 0;
                    width: 125%;
                }
                
                .column-title {
                    text-align: center;
                    margin-bottom: 1rem;
                }
                
                .fa {
                    padding: 20px;
                    font-size: 30px;
                    width: 70px;
                    text-align: center;
                    text-decoration: none;
                    margin: 5px 2px;
                }
                
                .fa:hover {
                    opacity: 0.7;
                }
                
                .fa-facebook { background: #3B5998; color: white; }
                .fa-twitter { background: #55ACEE; color: white; }
                .fa-google { background: #dd4b39; color: white; }
                .fa-linkedin { background: #007bb5; color: white; }
                .fa-youtube { background: #bb0000; color: white; }
                .fa-instagram { background: #125688; color: white; }
                
                footer h5 { color: #ffc107; }
                footer ul { list-style: none; padding: 0; }
                footer ul li { margin-bottom: 8px; }
                footer .d-flex a { font-size: 1.5rem; }
                
                @media only screen and (max-width: 769px) {
                    .footer_haberler .col-12 li { width: 100%; }
                }
            </style>
            <footer class="bg-dark text-light py-4 mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <a href="https://m-budak.github.io/cargurue/anasayfa.html">
                                <h5 class="column-title" style="text-align: left;">aracyorumu.com</h5>
                            </a>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, atque animi.</p>
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-youtube"></a>
                            <a href="#" class="fa fa-instagram"></a>
                        </div>
                        <div class="col-sm-12 col-md-2 mt-3">
                            <h5 class="column-title">Hızlı Linkler</h5>
                            <ul class="list-unstyled">
                                <div class="row">
                                    <div class="col-6 col-md-12">
                                        <li><a href="https://m-budak.github.io/cargurue/anasayfa.html">Anasayfa</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar.html">Markalar</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa.html">Kasalar</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/modeller.html">Modeller</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/haberler.html">Haberler</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/hakkimizda.html">Hakkımızda</a></li>
                                    </div>
                                    <div class="col-6 col-md-12">
                                        <li><a href="https://m-budak.github.io/cargurue/kasa.html#sedan">Sedan</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa.html#hb">Hatchback</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa.html#suv">SUV</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa.html#cabrio">Cabrio</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa.html#minivan">Minivan</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa.html#pickup">Pickup</a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        
                        <div class="col-sm-12 col-md-2 mt-3">
                            <a href="https://m-budak.github.io/cargurue/modeller.html">
                                <h5 class="column-title">Modeller</h5>
                            </a>
                            <ul class="list-unstyled">
                                <div class="row">
                                    <div class="col-6 col-md-12">
                                        <li><a href="#">Fiat Egea Sedan</a></li>
                                        <li><a href="#">Renault Clio</a></li>
                                        <li><a href="#">Dacia Duster</a></li>
                                        <li><a href="#">Opel Corsa</a></li>
                                        <li><a href="#">Hyundai i20</a></li>
                                        <li><a href="#">Peugeot 3008</a></li>
                                    </div>
                                    <div class="col-6 col-md-12">
                                        <li><a href="#link17">Fiat Fiorino</a></li>
                                        <li><a href="#link16">Toyota Corolla</a></li>
                                        <li><a href="#link18">Volkswagen Golf</a></li>
                                        <li><a href="#link19">Togg T10X</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/test/T3serisi.html">BMW 320i</a></li>
                                        <li><a href="#link20">Tümü ></a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        
                        <div class="col-sm-12 col-md-2 mt-3">
                            <a href="https://m-budak.github.io/cargurue/markalar.html">
                                <h5 class="column-title">Markalar</h5>
                            </a>
                            <ul class="list-unstyled">
                                <div class="row">
                                    <div class="col-6 col-md-12">
                                        <li><a href="#link11">Fiat</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/renault.html">Renault</a></li>
                                        <li><a href="#link13">Opel</a></li>
                                        <li><a href="#link14">Volkswagen</a></li>
                                        <li><a href="#link15">Peugeot</a></li>
                                        <li><a href="#link15">Hyundai</a></li>
                                    </div>
                                    <div class="col-6 col-md-12">
                                        <li><a href="#link16">Citroen</a></li>
                                        <li><a href="#link17">Dacia</a></li>
                                        <li><a href="#link18">Toyota</a></li>
                                        <li><a href="#link19">Togg</a></li>
                                        <li><a href="#link15">Tesla</a></li>
                                        <li><a href="#link20">Tümü ></a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
              
                        <div class="col-sm-12 col-md-2 mt-3 footer_haberler">
                            <a href="https://m-budak.github.io/cargurue/haberler.html">
                                <h5 class="column-title">Son Haberler</h5>
                            </a>
                            <ul class="list-unstyled">
                                <div class="row">
                                    <div class="col-12">
                                        <li><a href="#link16">2023’te Türkiye’de En Çok Satan Arabalar</a></li>
                                        <li><a href="#link17">2024 Tesla Fiyatları Nasıl?</a></li>
                                        <li><a href="#link18">Yeni Yılda Hangi Arabalar Çıkıyor?</a></li>
                                        <li><a href="#link19">TOGG Yerli Elektrikli Araba</a></li>
                                        <li><a href="#link15">İkinci El Araba Alırken Dikkat Edilmesi Gerekenler</a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('my-footer', MyFooter);
