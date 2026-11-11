// Componente <about-section>
class AboutSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="sobre-mi">
      <div class="wrap">
        <div class="sh rv"><span class="num">01</span><h2 data-i="h1">Quién soy</h2><span class="ln"></span></div>
        <div class="about">
          <div class="rv">
            <p data-i="a1">Soy <span class="hl">Oscar Escobar</span>, Ingeniero en Tecnologías de la Información originario de Torreón, Coahuila.</p>
            <p data-i="a2">Me dedico a desarrollar sitios y plataformas web para empresas, cuidando que funcionen bien, se vean bien y resuelvan necesidades reales.</p>
            <p data-i="a3">Fuera del trabajo me encontrarás frente a una consola, lanzando dados en una partida de rol o con los audífonos a todo volumen.</p>
          </div>
          <div class="quotes rv">
            <blockquote data-n="01" data-i="q1">La verdadera fuerza radica en la determinación de seguir adelante, incluso cuando todo parece perdido.</blockquote>
            <blockquote data-n="02" data-i="q2">La fortaleza interior es más valiosa que cualquier poder externo.</blockquote>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}
customElements.define('about-section', AboutSection);
