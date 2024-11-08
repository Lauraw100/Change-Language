import { LitElement, html, css } from 'lit';

class IdiomaSwitcher extends LitElement {
    static properties = {
        idiomaActual: { type: String },
    };

    constructor() {
        super();
        this.idiomaActual = localStorage.getItem('idioma') || 'es';
    }

    static styles = css`
        .boton-idioma {
            margin-top: 20px;
            padding: 10px 20px;
            cursor: pointer;
            border: none;
            background-color: #4CAF50;
            color: white;
            border-radius: 5px;
            font-size: 16px;
        }
    `;

    // Diccionario de traducciones
    get traducciones() {
        return {
            es: {
                titulo: "Hola, Bienvenido a mi página web",
                descripcion: "Esta es una página de ejemplo para cambiar el idioma.",
                boton: "Cambiar a Inglés",
                titulo2:"sobre mi",

            },
            en: {
                titulo: "Hello, Welcome to my website",
                descripcion: "This is a sample page for language switching.",
                boton: "Switch to Spanish",
                titulo2:"About me ",
            },
        };
    }

    // Método para alternar idioma
    cambiarIdioma() {
        this.idiomaActual = this.idiomaActual === 'es' ? 'en' : 'es';
        localStorage.setItem('idioma', this.idiomaActual);
        this.requestUpdate();
    }

    render() {
        const { titulo, descripcion, boton ,titulo2} = this.traducciones[this.idiomaActual];

        return html`
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
            <h2>${titulo2}</h2>
            <button class="boton-idioma" @click="${this.cambiarIdioma}">${boton}</button>
        `;
    }
}

// Definir el Web Component
customElements.define('idioma-switcher', IdiomaSwitcher);
