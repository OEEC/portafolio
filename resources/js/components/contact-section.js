// Componente <contact-section>
class ContactSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="contacto">
      <div class="wrap">
        <div class="sh rv"><span class="num">04</span><h2 data-i="h4">Conexión</h2><span class="ln"></span></div>
        <div class="contact rv">
          <div>
            <h3 data-i="c1">¿Tienes un proyecto?<br><span>Hablemos.</span></h3>
            <p data-i="c2">Abierto a nuevas colaboraciones, proyectos web y buenas conversaciones.</p>
          </div>
          <div class="links">
            <a class="clink" href="https://www.linkedin.com/in/oscar-enrique-escobar-de-la-cruz-991ba5112/" target="_blank" rel="noopener">
              <div><span class="k">LINKEDIN</span><span class="v">Oscar Escobar</span></div>
              <span class="arrow">↗</span>
            </a>
            <div class="clink">
              <div><span class="k" data-i="mail">CORREO</span><span class="v" id="mail">ozkarescorpion@gmail.com</span></div>
              <button class="copy" id="copyBtn" type="button">COPIAR</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}
customElements.define('contact-section', ContactSection);
