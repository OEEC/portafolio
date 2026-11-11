// Componente <interests-section>
class InterestsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="intereses">
      <div class="wrap">
        <div class="sh rv"><span class="num">03</span><h2 data-i="h3">Lo que me gusta</h2><span class="ln"></span></div>
        <div class="likes">
          <div class="like rv">
            <span class="c">01</span>
            <svg class="c-y" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 16h20a8 8 0 0 1 8 8v4a6 6 0 0 1-11 3l-2-3h-10l-2 3a6 6 0 0 1-11-3v-4a8 8 0 0 1 8-8z"/><path d="M15 21v6M12 24h6"/><circle cx="32" cy="22" r="1.5" fill="currentColor"/><circle cx="35" cy="26" r="1.5" fill="currentColor"/></svg>
            <h4 data-i="l1">Videojuegos</h4>
            <p data-i="l1d">Mundos abiertos, historias intensas y cualquier excusa para una partida más.</p>
          </div>
          <div class="like rv">
            <span class="c">02</span>
            <svg class="c-c" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M24 4l17 10v20L24 44 7 34V14z"/><path d="M24 4l-9 16h18zM15 20L7 34M33 20l8 14M15 20l9 24 9-24"/></svg>
            <h4>Dungeons &amp; Dragons</h4>
            <p data-i="l2d">Dados de 20 caras, campañas largas y personajes con historia propia.</p>
          </div>
          <div class="like rv">
            <span class="c">03</span>
            <svg class="c-y" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="6" y="6" width="36" height="36"/><path d="M6 18h36M6 30h36M18 6v36M30 6v36"/><rect x="19" y="19" width="10" height="10" fill="currentColor"/></svg>
            <h4 data-i="l3">Juegos de mesa</h4>
            <p data-i="l3d">Estrategia, cartas y tableros: lo mejor es la mesa llena de amigos.</p>
          </div>
          <div class="like rv">
            <span class="c">04</span>
            <div class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
            <h4>Rock &amp; Metal</h4>
            <p data-i="l4d">Guitarras distorsionadas como banda sonora para programar y vivir.</p>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}
customElements.define('interests-section', InterestsSection);
