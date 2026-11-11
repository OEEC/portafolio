// Componente <projects-section>
class ProjectsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="proyectos">
      <div class="wrap">
        <div class="sh rv"><span class="num">02</span><h2 data-i="h2">Lo que hago</h2><span class="ln"></span></div>
        <div class="projects">
          <div class="proj-wrap"><a class="proj rv" href="https://www.1weareone.com.mx/" target="_blank" rel="noopener">
            <span class="pid">PRJ_001</span>
            <h3>One México</h3>
            <p data-i="p1">Sitio web de una cadena de gasolineras y tiendas de conveniencia con presencia en más de 150 estaciones.</p>
            <div class="foot"><span class="url">1weareone.com.mx</span><span class="arrow">↗</span></div>
          </a></div>
          <div class="proj-wrap"><a class="proj rv" href="https://migasolina.mx/" target="_blank" rel="noopener">
            <span class="pid">PRJ_002</span>
            <h3>Mi Gasolina</h3>
            <p data-i="pg">Proyecto web desarrollado para el sector de combustibles.</p>
            <div class="foot"><span class="url">migasolina.mx</span><span class="arrow">↗</span></div>
          </a></div>
          <div class="proj-wrap"><a class="proj rv" href="http://gasamigas.com.mx/" target="_blank" rel="noopener">
            <span class="pid">PRJ_003</span>
            <h3>Gas Amigas</h3>
            <p data-i="pg">Proyecto web desarrollado para el sector de combustibles.</p>
            <div class="foot"><span class="url">gasamigas.com.mx</span><span class="arrow">↗</span></div>
          </a></div>
          <div class="proj-wrap"><a class="proj rv" href="invitacion-boda/index.html" target="_blank" rel="noopener">
            <span class="pid">PRJ_004</span>
            <h3>Invitación a la Boda</h3>
            <p data-i="pb">Sitio web para la invitación a mi boda.</p>
            <div class="foot"><span class="url">Oscar y Sol</span><span class="arrow">↗</span></div>
          </a></div>
        </div>
      </div>
    </section>
    `;
  }
}
customElements.define('projects-section', ProjectsSection);
