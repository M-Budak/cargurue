class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-dark text-light py-2">
                <a href="/anasayfa.html">
                    <h1 class="logo m-2">aracyorumu.com</h1>
                </a>
                <nav class="menu">
                    <ul>
                        <li><a href="/markalar.html">Markalar</a></li>
                        <li><a href="/kasatipleri.html">Kasalar</a></li>
                        <li><a href="/modeller.html">Modeller</a></li>
                        <li><a href="/haberler.html">Haberler</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('my-header', MyHeader);
