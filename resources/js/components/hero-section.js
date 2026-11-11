// Componente <hero-section>
class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="hero" id="inicio">
      <div class="wrap">
        <div>
          <div class="tag" data-i="tag">Sistema en línea · Perfil cargado</div>
          <h1>
            <span class="glitch" data-text="Oscar">Oscar</span>
            <span class="y">Escobar</span>
          </h1>
          <p class="role" data-i="role">Ingeniero en <b>Tecnologías de la Información</b>. Construyo sitios y soluciones web para negocios reales.</p>
          <p class="loc"><i>◢</i> <span data-i="loc">Torreón, Coahuila · México</span></p>
          <div class="cta">
            <a href="#proyectos" class="btn btn-y" data-i="cta1">Ver proyectos</a>
            <a href="#contacto" class="btn btn-o" data-i="cta2">Contactar</a>
          </div>
        </div>

        <aside class="idcard" aria-label="Ficha de identificación">
          <div class="idhead"><span>ID // NETRUNNER</span><em data-i="act">● ACTIVO</em></div>
          <div class="av-wrap"><img class="avatar" src="resources/img/oscar.jpg" alt="Foto de Oscar Escobar"></div>
          <div class="idrow"><span data-i="r1">NOMBRE</span><span>Oscar Escobar</span></div>
          <div class="idrow"><span data-i="r2">CLASE</span><span data-i="r2v">Ing. en TI</span></div>
          <div class="idrow"><span data-i="r3">ORIGEN</span><span>Torreón, MX</span></div>
          <div class="idrow"><span data-i="r4">FRECUENCIA</span><span>Rock / Metal</span></div>
          <div class="idrow"><span data-i="r5">ALINEAMIENTO</span><span data-i="r5v">Determinación</span></div>
          <div class="bar"></div>
          <div class="barlbl" data-i="bar">FORTALEZA INTERIOR · NIVEL MÁXIMO</div>
        </aside>
      </div>
    </header>
    `;
  }
}
customElements.define('hero-section', HeroSection);
