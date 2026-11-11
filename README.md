# Portafolio — Oscar Escobar

Sitio personal estático (HTML, CSS y JavaScript puro, sin dependencias ni compilación).

## Estructura

```
index.html                       Página principal: solo coloca los componentes y carga los recursos
resources/
  css/
    styles.css                   Todos los estilos (paleta, layout, animaciones, responsive)
  img/
    oscar.jpg                    Foto de perfil
  js/
    i18n.js                      Textos en español e inglés
    main.js                      Cambio de idioma, copiar correo, animaciones de scroll
    components/                  Cada sección es un Web Component (Custom Element)
      site-nav.js                <site-nav>          Barra de navegación + selector ES/EN
      hero-section.js            <hero-section>      Nombre, rol y ficha con foto
      about-section.js           <about-section>     Quién soy + frases
      projects-section.js        <projects-section>  Proyectos
      interests-section.js       <interests-section> Lo que me gusta
      contact-section.js         <contact-section>   LinkedIn y correo
      site-footer.js             <site-footer>       Pie de página
```

## Cómo funciona

Cada archivo de `resources/js/components/` define una etiqueta personalizada con
`customElements.define`. El `index.html` solo coloca las etiquetas
(`<hero-section></hero-section>`, etc.) y carga los scripts.

Los textos traducibles llevan el atributo `data-i="clave"`; `resources/js/main.js`
los reemplaza con el valor de `resources/js/i18n.js` según el idioma elegido.

## Editar

- **Un texto:** cámbialo en `resources/js/i18n.js` (en `es` y en `en`).
- **Un proyecto nuevo:** copia un bloque `<a class="proj">` en
  `resources/js/components/projects-section.js`.
- **Colores:** variables al inicio de `resources/css/styles.css` (`--yellow`, `--cyan`, `--red`).
- **Foto:** reemplaza `resources/img/oscar.jpg` (cuadrada, ~400 px).

## Ver y publicar

Abre `index.html` con doble clic; funciona sin servidor.
Para publicarlo, sube la carpeta completa a GitHub Pages, Netlify, Vercel o tu hosting.
