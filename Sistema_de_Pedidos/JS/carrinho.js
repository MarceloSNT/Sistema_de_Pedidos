    function listarCarrinho() {
  const container = document.getElementById("mostrar-carrinho");
  container.innerHTML = "";

  const carrinho = JSON.parse(localStorage.getItem("itens")) || [];
  
  if(carrinho.length === 0) {
      const alertaVazio = document.createElement("div");
      alertaVazio.className = "col-12 text-center text-white my-5";
      alertaVazio.innerHTML = `<div class="text-center text-white" role="alert">
      <h3>Seu carrinho está vazio!</h3>
      <p>Adicione itens ao carrinho para ver aqui.</p>
      </div>`;
      container.appendChild(alertaVazio);
      return;

    }

    let total = 0.00;
  
    carrinho.forEach((produto, index) => {
      const subtotal = produto.preco * produto.quantidade;
      total += subtotal;

    const col = document.createElement("div");
    col.className = "col-8 my-3 mx-auto";
    col.innerHTML = `
      <div class="card shadow-sm rounded-3 ">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center">
            <img src="${produto.imagem}" class="img-fluid rounded-start w-100" style="height: 200px; object-fit: cover;" alt="${produto.nome}">
          </div>
          <div class="col-md-8">
            <div class="card-body d-flex flex-column h-100">
              <div class="d-flex justify-content-between align-items-start">
                <div class="text-start">
                  <h2 class="card-title fs-5 fw-bold">${produto.nome}</h2>
                </div>
                <button class="btn btn-outline-danger btn-sm excluir-item" data-index="${index}" title="Remover item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                  </svg>
                </button>
              </div>
              <div class="mt-auto d-flex justify-content-between align-items-center pt-2">
                <p class="mb-0 fw-bold">Quantidade: ${produto.quantidade}</p>
                <h4 class="mb-0 text-success fw-bold">R$ ${produto.preco.toFixed(2)}</h4>
              </div>
            </div>
          </div>
          </div>
          </div>
    `;
    container.appendChild(col);
});
document.getElementById("total").textContent = `R$ ${total.toFixed(2)}`;
  
}
document.getElementById("finalizarPedido").addEventListener("click", function() {
const carrinhoAtual = JSON.parse(localStorage.getItem("itens")) || [];
    if(carrinhoAtual.length === 0 ) {
      alert("O carrinho está vazio!");
      return;
    }
    localStorage.removeItem("itens");
    alert("Pedido Finalizado com sucesso!");
    total = 0;
    document.getElementById("total").textContent = `R$ ${total.toFixed(2)}`;
    listarCarrinho();
});

document.getElementById("mostrar-carrinho").addEventListener("click", function (e) {
    if (e.target.closest(".excluir-item")) {
    const btn = e.target.closest(".excluir-item");
    const index = parseInt(btn.getAttribute("data-index"));
    
const carrinhoAtual = JSON.parse(localStorage.getItem("itens")) || [];
    
    if (carrinhoAtual[index].quantidade > 1) {
      carrinhoAtual[index].quantidade--;
    } else {
      carrinhoAtual.splice(index, 1);
    }
    if(carrinhoAtual.length === 0) {
        document.getElementById("total").textContent = `R$ 0.00`;
    }
    localStorage.setItem("itens", JSON.stringify(carrinhoAtual));
    listarCarrinho();
}
});

window.addEventListener("storage", function(e) {
    if (e.key === "itens") {
        listarCarrinho();
    }
});

window.addEventListener("DOMContentLoaded", listarCarrinho);