EUPHORIA SCAN — SITE ESTÁTICO COM LEITOR PARA IMAGENS GRANDES
================================================================

ESTA VERSÃO FOI FEITA PARA:
- imagens muito compridas de manhwa/webtoon;
- preservar o arquivo original;
- leitura vertical contínua;
- carregamento preguiçoso (lazy loading);
- zoom de 60% a 140%;
- celular e computador;
- não exigir domínio ou hospedagem paga.

IMPORTANTE SOBRE QUALIDADE
--------------------------
O site NÃO redimensiona nem recomprime o arquivo original.
Se você colocar um arquivo 720x25000, o navegador receberá esse arquivo.
Na tela ele será ajustado à largura disponível, mas isso não altera o arquivo.

ESTRUTURA PARA CAPÍTULOS
------------------------
Exemplo:

capitulos/
  exemplo/
    cap-001/
      001.webp
      002.webp
      003.webp

Você pode usar PNG ou WebP. Se quiser máxima fidelidade, prefira PNG ou WebP LOSSLESS.
Não é necessário converter suas imagens só para o site funcionar.

COMO CADASTRAR UM NOVO CAPÍTULO
-------------------------------
Abra:
assets/js/data.js

Dentro da obra, acrescente:

{
  number: "02",
  title: "Capítulo 02",
  folder: "capitulos/exemplo/cap-002",
  pages: [
    "001.webp",
    "002.webp",
    "003.webp"
  ]
}

Depois crie a pasta:
capitulos/exemplo/cap-002/

E coloque as imagens com exatamente esses nomes.

ATENÇÃO
--------
Os nomes precisam coincidir exatamente.
Exemplo:
data.js diz "001.webp" -> o arquivo precisa ser 001.webp.

COMO COLOCAR UMA OBRA NOVA
--------------------------
Copie o objeto da obra em assets/js/data.js e altere:
id
title
cover
description
genres
status
chapters

Não use acentos ou espaços no "id" ou nos nomes das pastas. Isso evita problemas de endereço.

PUBLICAÇÃO GRATUITA
-------------------
A forma mais simples é publicar este projeto em um serviço de hospedagem estática gratuito.
Você não precisa comprar domínio.

Para o endereço ficar bonito, você pode usar o endereço gratuito fornecido pela plataforma.
Se um dia quiser, pode conectar um domínio próprio.

LIMITAÇÃO IMPORTANTE
--------------------
Site estático não possui painel administrativo como o Madara/WordPress.
Para adicionar obras/capítulos, você altera o data.js e envia os novos arquivos.

Para um catálogo pequeno ou médio, isso funciona muito bem.
Se o site crescer muito e tiver centenas/muitos GB de imagens, será necessário pensar
também em armazenamento/CDN próprio.

IMAGENS MUITO GRANDES
---------------------
Uma imagem única de 720x25000 pode ser usada.
O leitor usa lazy loading para não carregar todos os arquivos do capítulo de uma vez.

Se algum celular tiver pouca memória e travar ao abrir imagens extremamente altas,
uma solução ainda mais robusta é dividir a imagem em partes verticais (sem reduzir a qualidade)
e colocar essas partes como páginas consecutivas.

NÃO APAGUE:
- index.html
- obra.html
- leitor.html
- assets/
- data.js
- site.js
- series.js
- reader.js
- style.css
