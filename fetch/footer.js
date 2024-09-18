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
                            <a href="https://m-budak.github.io/cargurue/index.html">
                                <h5 class="column-title" style="text-align: left;">aracyorumu.com</h5>
                            </a>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, atque animi.</p>
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-youtube"></a>
                            <a href="#" class="fa fa-instagram"></a>
                        </div>
                        <div class="col-sm-12 col-md-2 mt-3">
                            <h5 class="column-title">Kategoriler</h5>
                            <ul class="list-unstyled">
                                <div class="row">
                                    <div class="col-6 col-md-12">
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/sedan.html">Sedan</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/hatchback.html">Hatchback</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/suv.html">SUV</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/pickup.html">Pickup</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/crossover.html">Crossover</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/mpv.html">MPV</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/station.html">Station</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/cabrio.html">Cabrio</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/coupe.html">Coupe</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/minivan.html">Minivan</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/panelvan.html">Panelvan</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/kasa/micro.html">Micro</a></li>
                                    </div>
                                    <div class="col-6 col-md-12.html">
                                        <li><a href="https://m-budak.github.io/cargurue/yakit/benzinli.html">Benzinli</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/yakit/dizel.html">Dizel</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/yakit/lpg.html">LPG</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/yakit/Elektrikli.html">Elektrikli</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/yakit/hibrit.html">Hibrit</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/segments/a-segment.html">A Segmenti</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/segments/b-segment.html">B Segmenti</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/segments/c-segment.html">C Segmenti</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/segments/d-segment.html">D Segmenti</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/segments/f-segment.html">F Segmenti</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/segments/m-segment.html">M Segmenti</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/segments/j-segment.html">J Segmenti</a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        
                        <div class="col-sm-12 col-md-2 mt-3">
                            <a href="https://m-budak.github.io/cargurue/arac-yorumu/modeller.html">
                                <h5 class="column-title">Modeller</h5>
                            </a>
                            <ul class="list-unstyled">
                                <div class="row">
                                    <div class="col-6 col-md-12">
                                        <li><a href="https://m-budak.github.io/cargurue/model/egea-sedan.html?model=egea-sedan">Fiat Egea Sedan</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/clio.html?model=clio">Renault Clio</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/mokka.html?model=mokka">Opel Mokka</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/crossland.html?model=crossland">Opel Crossland</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/i20.html?model=i20">Hyundai i20</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/3008.html?model=3008">Peugeot 3008</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/mokka.html?model=mokka">Opel Mokka</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/crossland.html?model=crossland">Opel Crossland</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/i20.html?model=i20">Hyundai i20</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/3008.html?model=3008">Peugeot 3008</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/corsa.html?model=corsa">Opel Corsa</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/corolla.html?model=corolla">Toyota Corolla</a></li>
                                    </div>
                                    <div class="col-6 col-md-12">
                                    
                                        <li><a href="https://m-budak.github.io/cargurue/model/corsa.html?model=corsa">Opel Corsa</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/corolla.html?model=corolla">Toyota Corolla</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/corsa.html?model=corsa">Opel Corsa</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/corolla.html?model=corolla">Toyota Corolla</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/golf.html?model=golf">Volkswagen Golf</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/t10x.html?model=t10x">Togg T10X</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/320i.html?model=320i">BMW 320i</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/mokka.html?model=mokka">Opel Mokka</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/crossland.html?model=crossland">Opel Crossland</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/i20.html?model=i20">Hyundai i20</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/model/3008.html?model=3008">Peugeot 3008</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/arac-yorumu/modeller.html">Tümü ></a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        
                        <div class="col-sm-12 col-md-2 mt-3">
                            <a href="https://m-budak.github.io/cargurue/arac-yorumu/markalar.html">
                                <h5 class="column-title">Markalar</h5>
                            </a>
                            <ul class="list-unstyled">
                                <div class="row">
                                    <div class="col-6 col-md-12">
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/audi.html?brand=audi">Audi</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/bmw.html?brand=bmw">BMW</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/chery.html?brand=chery">Chery</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/citroen.html?brand=citroen">Citroen</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/dacia.html?brand=dacia">Dacia</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/cupra.html?brand=cupra">Cupra</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/mg.html?brand=mg">MG</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/fiat.html?brand=fiat">Fiat</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/ford.html?brand=ford">Ford</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/honda.html?brand=honda">Honda</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/hyundai.html?brand=hyundai">Hyundai</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/kia.html?brand=kia">Kia</a></li>
                                    </div>
                                    <div class="col-6 col-md-12">
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/mercedes-benz.html?brand=mercedes-benz">Mercedes-Benz</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/nissan.html?brand=nissan">Nissan</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/opel.html?brand=opel">Opel</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/peugeot.html?brand=peugeot">Peugeot</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/renault.html?brand=renault">Renault</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/skoda.html?brand=skoda">Skoda</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/tesla.html?brand=tesla">Tesla</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/togg.html?brand=togg">Togg</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/toyota.html?brand=toyota">Toyota</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/volkswagen.html?brand=volkswagen">Volkswagen</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/markalar/volvo.html?brand=volvo">Volvo</a></li>
                                        <li><a href="https://m-budak.github.io/cargurue/arac-yorumu/markalar.html">Tümü ></a></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
              
                        <div class="col-sm-12 col-md-2 mt-3 footer_haberler">
                            <a href="https://m-budak.github.io/cargurue/arac-yorumu/bizbize.html">
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
