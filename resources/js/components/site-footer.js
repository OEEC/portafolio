// Componente <site-footer>
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="wrap">
        <span>© <span id="yr"></span> Oscar Escobar</span>
        <a href="#inicio" class="link-u" data-i="top">↑ Volver arriba</a>
        <span>Torreón, MX <b>//</b> <span data-i="end">fin de la transmisión_</span></span>
      </div>
    </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
