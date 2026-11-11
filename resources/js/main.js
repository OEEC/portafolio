// Lógica: idioma, copiar correo y animaciones al hacer scroll.
document.getElementById('yr').textContent = new Date().getFullYear();

let lang = 'es';
function setLang(l){
  lang = T[l] ? l : 'es';
  const d = T[lang];
  document.documentElement.lang = lang;
  document.title = d.title;
  document.querySelectorAll('[data-i]').forEach(el => { const k = el.dataset.i; if (d[k] != null) el.innerHTML = d[k]; });
  document.getElementById('copyBtn').textContent = d.copy;
  document.querySelectorAll('.lang button').forEach(b => {
    b.classList.toggle('act', b.dataset.l === lang);
    b.setAttribute('aria-pressed', b.dataset.l === lang);
  });
  try { localStorage.setItem('lang', lang); } catch(e) {}
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.l)));
let saved = null;
try { saved = localStorage.getItem('lang'); } catch(e) {}
setLang(saved || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en'));

const btn = document.getElementById('copyBtn');
btn.addEventListener('click', async () => {
  const mail = document.getElementById('mail').textContent;
  try {
    await navigator.clipboard.writeText(mail);
    btn.textContent = T[lang].copied;
  } catch (e) {
    const r = document.createRange();
    r.selectNodeContents(document.getElementById('mail'));
    const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    btn.textContent = T[lang].sel;
  }
  setTimeout(() => btn.textContent = T[lang].copy, 2000);
});

const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
}, { threshold: .12 }) : null;
document.querySelectorAll('.rv').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + 'ms';
  io ? io.observe(el) : el.classList.add('on');
});
