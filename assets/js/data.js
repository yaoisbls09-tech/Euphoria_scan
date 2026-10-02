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
    id: "Ebony-Castle",
    title: "Ebony Castle",
    cover: "assets/img/capas/Yeon Do Hwa & Tristan Locke [Ebony Castle].jpg",",
    description: "Num mundo onde nomes aparecem misteriosamente na pele, o pianista Dohwa "Eden" Yeon encontra o nome de Tristan Locke gravado em seu corpo. Mas, após seguir o nobre recluso até uma mansão na floresta, Eden descobre que seu nome não está em Tristan. Conforme sua vida se esvai sem o toque de Tristan, Eden se apega a um homem que o rejeita obstinadamente.",
    genres: ["BL", "Romance", "Drama", "Nameverse"],
    status: "Em hiatos",
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
