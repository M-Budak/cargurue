class Mybaska extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                #baska {
                    background-color: #2a5e68;
                    color: #ffffff;
                    padding: 20px;
                    text-align: center;
                    width: 100%;
                    bottom: 0;
                }
                #baska a {
                    color: #ffa50c;
                    text-decoration: none;
                    margin: 0 10px;
                }
                #baska a:hover {
                    text-decoration: underline;
                }
            </style>
            <div id="baska">
                <p>&copy; 2024 My Website. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy">Privacy Policy</a>
                    |
                    <a href="/terms-of-service">Terms of Service</a>
                    |
                    <a href="/contact-us">Contact Us</a>
                </p>
            </div>
        `;
    }
}

customElements.define('my-baska', Mybaska);
