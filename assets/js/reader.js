const params = new URLSearchParams(location.search);
const workId = params.get("obra");
const capNumber = params.get("cap");
const work = WORKS.find(w => w.id === workId);
const chapter = work?.chapters.find(c => c.number === capNumber);
const pages = document.getElementById("pages");
const info = document.getElementById("readerInfo");
const error = document.getElementById("readerError");

let zoom = 100;

function showError(message) {
  error.hidden = false;
  error.innerHTML = `<h2>Não foi possível carregar este capítulo.</h2><p>${message}</p>
  <p>Verifique se os arquivos estão exatamente na pasta indicada em <code>assets/js/data.js</code>.</p>`;
}

if (!work || !chapter) {
  showError("Obra ou capítulo não encontrado.");
} else {
  info.innerHTML = `
    <a href="obra.html?id=${encodeURIComponent(work.id)}">← ${work.title}</a>
    <strong>Capítulo ${chapter.number}</strong>
  `;

  /*
    Lazy loading real:
    o navegador só começa a carregar cada imagem quando ela se aproxima
    da área visível. Isso evita colocar todos os arquivos grandes na memória
    ao mesmo tempo.
  */
  pages.innerHTML = chapter.pages.map((file, i) => `
    <div class="page-shell">
      <img class="reader-img" data-src="${chapter.folder}/${file}"
           alt="${work.title} — capítulo ${chapter.number}, página ${i + 1}"
           loading="lazy" decoding="async">
    </div>
  `).join("");

  const imgs = [...document.querySelectorAll(".reader-img")];

  const loadImage = img => {
    if (img.dataset.loaded) return;
    img.src = img.dataset.src;
    img.dataset.loaded = "1";
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "1400px 0px" });

    imgs.forEach(img => observer.observe(img));
  } else {
    imgs.forEach(loadImage);
  }

  function applyZoom() {
    imgs.forEach(img => img.style.width = `${zoom}%`);
    document.getElementById("zoomLabel").textContent = `${zoom}%`;
  }

  document.getElementById("smaller").onclick = () => {
    zoom = Math.max(60, zoom - 10);
    applyZoom();
  };

  document.getElementById("larger").onclick = () => {
    zoom = Math.min(140, zoom + 10);
    applyZoom();
  };

  document.getElementById("topBtn").onclick = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  applyZoom();
}
