// Componente <site-nav>
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
      <div class="wrap">
        <a href="#inicio" class="logo">OSCAR<span>.</span>EXE</a>
        <div class="navr">
          <ul>
            <li><a href="#sobre-mi" data-i="nav1">Sobre mí</a></li>
            <li><a href="#proyectos" data-i="nav2">Proyectos</a></li>
            <li><a href="#intereses" data-i="nav3">Intereses</a></li>
            <li><a href="#contacto" data-i="nav4">Contacto</a></li>
          </ul>
          <div class="lang" role="group" aria-label="Idioma / Language">
            <button type="button" data-l="es" class="act">ES</button>
            <button type="button" data-l="en">EN</button>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}
customElements.define('site-nav', SiteNav);
