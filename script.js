const searchInput = document.getElementById('search-input');
//const searchInput2 = document.querySelectorAll('.cards');

const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm));
}

function displayResults(result, searchTerm) {
    resultPlaylist.classList.add("hidden");
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    const filteredArtists = result.filter(artist => artist.name.toLowerCase().includes(searchTerm));

    filteredArtists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = 
            `<div class="card-img">
                <img class="artist-img" src="${artist.urlImg}" />
                <div class="play">
                    <span class="fa fa-solid fa-play"></span>
                </div>
            </div>
            <div class="card-text">              
                <span class="artist-name">${artist.name}</span>
                <span class="artist-categorie">Artista</span>
            </div>`;
        gridContainer.appendChild(artistCard);
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
});

//console.log('socorro deus');

/*Tags Estruturais:
<html>: A raiz do documento HTML.
<head>: Contém metadados, links para CSS, scripts, etc.
<body>: Contém o conteúdo visível da página.


Tags de Texto:
<h1> a <h6>: Cabeçalhos de diferentes níveis (h1 é o mais importante).
<p>: Parágrafo de texto.
<span>: Um contêiner em linha para texto.
<div>: Um contêiner de bloco para agrupar conteúdo.


Tags de Listagem:
<ul>: Lista não ordenada.
<ol>: Lista ordenada.
<li>: Item de lista.


Tags de Links e Imagens:
<a>: Link para outra página ou recurso.
<img>: Imagem, com atributos como src (caminho da imagem) e alt (texto alternativo).


Tags de Formulário:
<form>: Formulário para entrada de dados.
<input>: Campo de entrada (textos, botões, etc.).
<textarea>: Área de texto para entrada de múltiplas linhas.
<button>: Botão clicável.


Tags Semânticas:
<header>: Cabeçalho da página ou seção.
<footer>: Rodapé da página ou seção.
<article>: Conteúdo independente.
<section>: Seção do documento.
<nav>: Navegação da página.



CSS - Estilo e Layout

Seletores:
*: Seleciona todos os elementos.
element: Seleciona todos os elementos do tipo especificado.
.class: Seleciona todos os elementos com a classe especificada.
#id: Seleciona o elemento com o ID especificado.


Propriedades Comuns:
color: Define a cor do texto.
background-color: Define a cor de fundo.
font-size: Define o tamanho da fonte.
margin: Espaçamento externo ao redor de um elemento.
padding: Espaçamento interno dentro de um elemento.
border: Define a borda de um elemento.
display: Controla como um elemento é exibido (block, inline, flex, grid, etc.).
flex: Propriedades relacionadas ao layout flexível.
grid: Propriedades relacionadas ao layout em grade.


Posicionamento:
position: Define como um elemento é posicionado (static, relative, absolute, fixed, sticky).
top, right, bottom, left: Define a posição de um elemento.


Estilização de Texto:
text-align: Alinhamento do texto (left, right, center).
text-decoration: Decoração do texto (underline, line-through).
font-family: Define a fonte do texto.



JavaScript - Lógica e Interatividade

Tipos de Dados:
String: Texto.
Number: Números.
Boolean: Verdadeiro ou falso.
Array: Lista de valores.
Object: Estrutura de dados que armazena pares chave-valor.


Estruturas de Controle:
if, else if, else: Condicionais.
switch: Estrutura de seleção.
for, while: Laços de repetição.


Funções:
Funções são blocos de código que podem ser reutilizados. Podem ser declaradas com function ou como expressões de função (funções anônimas ou arrow functions).


Manipulação do DOM:
document.getElementById(): Seleciona um elemento pelo ID.
document.querySelector(): Seleciona o primeiro elemento que corresponde ao seletor CSS.
element.addEventListener(): Adiciona um evento a um elemento.*/