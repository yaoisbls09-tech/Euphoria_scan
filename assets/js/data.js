/*
  CADASTRO DAS OBRAS
  Para adicionar uma obra, copie um objeto abaixo.
  cover = caminho da capa.
  chapters = lista de capítulos.

  IMPORTANTE:
  As imagens do leitor NÃO precisam ser reduzidas.
  O site exibe a imagem no tamanho adequado à tela, mas usa o arquivo original.
*/

const WORKS = [
  {
    id: "obra-exemplo",
    title: "Obra de Exemplo",
    cover: "assets/img/capas/capa-exemplo.svg",
    description: "Substitua esta descrição pelas informações da sua obra.",
    genres: ["BL", "Romance", "Drama"],
    status: "Em andamento",
    chapters: [
      {
        number: "01",
        title: "Capítulo 01",
        folder: "capitulos/exemplo/cap-001",
        pages: [
          "001.webp",
          "002.webp"
        ]
      }
    ]
  }
];
