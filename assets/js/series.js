const params = new URLSearchParams(location.search);
const id = params.get("id");
const work = WORKS.find(w => w.id === id);
const root = document.getElementById("series");

if (!work) {
  root.innerHTML = "<div class='empty'><h1>Obra não encontrada</h1><a class='btn' href='index.html'>Voltar</a></div>";
} else {
  const chapters = [...work.chapters].reverse();
  root.innerHTML = `
    <section class="series-head">
      <div class="series-cover">
        <img src="${work.cover}" alt="Capa de ${work.title}">
      </div>
      <div class="series-info">
        <p class="eyebrow">EUPHORIA SCAN</p>
        <h1>${work.title}</h1>
        <div class="tags">${work.genres.map(g => `<span>${g}</span>`).join("")}</div>
        <p>${work.description}</p>
        <p class="status">Status: <strong>${work.status}</strong></p>
      </div>
    </section>

    <section class="chapter-section">
      <div class="section-title">
        <div><p class="eyebrow">LEITURA</p><h2>Capítulos</h2></div>
      </div>
      <div class="chapter-list">
        ${chapters.map(ch => `
          <a class="chapter" href="leitor.html?obra=${encodeURIComponent(work.id)}&cap=${encodeURIComponent(ch.number)}">
            <span>Capítulo ${ch.number}</span>
            <strong>${ch.title}</strong>
            <span class="arrow">→</span>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}
