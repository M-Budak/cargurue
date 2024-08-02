class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-dark text-light py-2">
                <a href="cargurue/anasayfa.html">
                    <h1 class="logo m-2">aracyorumu.com</h1>
                </a>
                <nav class="menu">
                    <ul>
                        <li><a href="cargurue/markalar.html">Markalar</a></li>
                        <li><a href="cargurue/kasatipleri.html">Kasalar</a></li>
                        <li><a href="cargurue/modeller.html">Modeller</a></li>
                        <li><a href="cargurue/haberler.html">Haberler</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('my-header', MyHeader);
