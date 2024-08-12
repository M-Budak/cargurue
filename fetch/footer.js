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
                                        <li><a href="https://m-budak.github.io/cargurue/bizbize.html">Biz Bize</a></li>
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
                                        <li><a href="https://m-budak.github.io/cargurue/model/egea_sedan.html">Fiat Egea Sedan</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/clio5.html">Renault Clio</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/mokka.html">Opel Mokka</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/crossland.html">Opel Crossland</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/i20.html">Hyundai i20</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/3008.html">Peugeot 3008</a></li>
                                    </div>
                                    <div class="col-6 col-md-12">
                                        <li><a href="https://m-budak.github.io/cargurue/model/corsa.html">Opel Corsa</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/corolla.html">Toyota Corolla</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/golf.html">Volkswagen Golf</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/t10x.html">Togg T10X</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/320i.html">BMW 320i</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar.html">Tümü ></a></li>
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
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/toyota.html?brand=toyota">Toyota</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/renault.html?brand=renault">Renault</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/bmw.html?brand=bmw">BMW</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/volkswagen.html?brand=volkswagen">Volkswagen</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/peugeot.html?brand=peugeot">Peugeot</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/hyundai.html?brand=hyundai">Hyundai</a></li>
                                    </div>
                                    <div class="col-6 col-md-12">
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/citroen.html?brand=citroen">Citroen</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/dacia.html?brand=dacia">Dacia</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/toyota.html?brand=toyota">Toyota</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/togg.html?brand=togg">Togg</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/tesla.html?brand=tesla">Tesla</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar.html">Tümü ></a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
              
                        <div class="col-sm-12 col-md-2 mt-3 footer_haberler">
                            <a href="https://m-budak.github.io/cargurue/bizbize.html">
                                <h5 class="column-title">Araç Yorumu Biz Bize</h5>
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="style.css">
        `;
    }
}

customElements.define('my-footer', MyFooter);
