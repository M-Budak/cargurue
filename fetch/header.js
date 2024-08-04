class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 6px 10px;
                    background-color: var(--background-color);
                }

                .logo {
                    text-align: center;
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                }

                .menu ul {
                    list-style: none;
                    margin: 6px;
                    padding: 0;
                    display: flex;
                }

                .menu li {
                    margin: 0 15px;
                    color: white;
                }

                /* HEADER < 769 STARTS  */
                @media only screen and (max-width: 769px) {
                    header {
                        flex-direction: column;
                    }
                }
            </style>
            <header class="bg-dark text-light py-2">
                <a href="https://m-budak.github.io/cargurue/anasayfa.html">
                    <h1 class="logo m-2">aracyorumu.com</h1>
                </a>
                <nav class="menu">
                    <ul>
                        <li><a href="https://m-budak.github.io/cargurue/markalar.html">Markalar</a></li>
                        <li><a href="https://m-budak.github.io/cargurue/kasa.html">Kasalar</a></li>
                        <li><a href="https://m-budak.github.io/cargurue/model.html">Modeller</a></li>
                        <li><a href="https://m-budak.github.io/cargurue/bizbize.html">Biz Bize</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('my-header', MyHeader);
