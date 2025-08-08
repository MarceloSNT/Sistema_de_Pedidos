const cardapioProdutos = [
  { imagem: "../IMG/x-burguer.jpg", nome: "X-Burger Clássico", preco: 14.0 },
  { imagem: "../IMG/x-salada.jpg", nome: "X Salada Fresh", preco: 15.0 },
  { imagem: "../IMG/x-bacon.jpg", nome: "X Bacon Supremo", preco: 18.0 },
  { imagem: "../IMG/x-frango.jpg", nome: "X-Frango Reforçado", preco: 14.5 },
  { imagem: "../IMG/x-tudo-supremo.jpg", nome: "X-Tudo Supremo", preco: 18.5 },
  {
    imagem: "../IMG/hot-dog-tradicional.jpg",
    nome: "Hot Dog Tradicional",
    preco: 14.0,
  },
  {
    imagem: "../IMG/hot-dog-supreme.jpg",
    nome: "Hot Dog Supreme",
    preco: 18.0,
  },
  { imagem: "../IMG/hot-dog-prato.jpg", nome: "Hot Dog no Prato", preco: 22.0 },
  { imagem: "../IMG/salada.jpg", nome: "Crunch Salad Combo", preco: 31.4 },
  {
    imagem: "../IMG/combo-bacon-fritas.jpg",
    nome: "Double Bacon Combo",
    preco: 34.0,
  },
  {
    imagem: "../IMG/frango-fritas.jpg",
    nome: "Combo Frango + Fritas ",
    preco: 37.2,
  },
  { imagem: "../IMG/beirute.jpg", nome: "Beirut Clássico", preco: 6.0 },
  { imagem: "../IMG/beirut-especial.jpg", nome: "Beirut Especial", preco: 8.0 },
  {
    imagem: "../IMG/misto-quente.jpg",
    nome: "Queijo Quente Clássico",
    preco: 11.0,
  },
  { imagem: "../IMG/bauru.jpg", nome: "Bauru Tradicional", preco: 12.0 },
  { imagem: "../IMG/acai-granola.jpg", nome: "Açaí com granola", preco: 13.0 },
  { imagem: "../IMG/milkshake.jpg", nome: "Milk Shake Cremoso", preco: 13.5 },
  { imagem: "../IMG/bolo-cenoura.jpg", nome: "Bolo de Cenoura", preco: 12.5 },
];


const mostrarProdutos = document.getElementById("mostrar-cardapio");

function renderizarCardapio(listaProdutos) {
  mostrarProdutos.innerHTML = "";
  listaProdutos.forEach((produto, index) => {
    const card = document.createElement("div");
    card.className = "col-12 col-md-6 col-lg-4 mb-3";
    card.innerHTML = `
      <div class="card pb-3 border border-2 border-warning rounded-3">
        <img src="${produto.imagem}" alt="${produto.nome}" class="imagens img-fluid card-image-top">
        <h3 class="card-title text-center">${produto.nome}</h3>
        <h4 class="text-center">R$ ${produto.preco.toFixed(2)}</h4>
        <div class="quantidade-wrapper text-center mb-2">
          <input type="number" class="form-control input-quantidade text-center" min="1" value="1" style="width: 80px; margin: 0 auto;">
        </div>
        <div>
          <button class="btn btn-outline-warning d-grid mx-auto btn-adicionar">Adicionar ao Carrinho</button>
        </div>
      </div>`;
    mostrarProdutos.appendChild(card);
  });
}

function addProdutoCarrinho() {
  mostrarProdutos.addEventListener("click", (event) => {
    if (!event.target.classList.contains("btn-adicionar")) return;

    const index = [...mostrarProdutos.querySelectorAll(".btn-adicionar")].indexOf(event.target);
    const produto = cardapioProdutos[index];
    const inputQuant = mostrarProdutos.querySelectorAll(".input-quantidade")[index];
    const quantidade = parseInt(inputQuant.value) || 1;

    let carrinho = JSON.parse(localStorage.getItem("itens")) || [];
    const itemExistente = carrinho.find(item => item.nome === produto.nome);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      carrinho.push({ ...produto, quantidade });
    }

    localStorage.setItem("itens", JSON.stringify(carrinho));
    alert(`${produto.nome} (Qtd: ${quantidade}) adicionado ao carrinho!`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarCardapio(cardapioProdutos);
  addProdutoCarrinho();
});