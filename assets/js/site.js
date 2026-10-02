function getWork(id) {
  return WORKS.find(w => w.id === id);
}

function renderCatalog(list) {
  const catalog = document.getElementById("catalog");
  if (!catalog) return;
  catalog.innerHTML = list.map(work => `
    <article class="card">
      <a href="obra.html?id=${encodeURIComponent(work.id)}">
        <div class="cover-wrap">
          <img src="${work.cover}" alt="Capa de ${work.title}" loading="lazy">
        </div>
        <div class="card-body">
          <h3>${work.title}</h3>
          <p>${work.status}</p>
        </div>
      </a>
    </article>
  `).join("");
}

renderCatalog(WORKS);

const search = document.getElementById("search");
if (search) {
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    renderCatalog(WORKS.filter(w =>
      w.title.toLowerCase().includes(q) ||
      w.genres.some(g => g.toLowerCase().includes(q))
    ));
  });
}
