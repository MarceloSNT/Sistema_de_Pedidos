function listarPerfil(){
    const container = document.getElementById("mostrar-perfil");
    container.innerHTML = "";

    const clientesSlavo = JSON.parse(localStorage.getItem("clientes")) || [];

    if (clientesSlavo.length === 0) {
    container.innerHTML = "<p>Nenhum cliente cadastrado</p>";
    return;
  }
  clientesSlavo.forEach((cli) => {
    const div = document.createElement("div");
    div.className = "mostrarPerfil text-light";
    div.innerHTML = `<h3><strong>${cli.nomeValue}</strong></h3><br><p>Email: ${cli.emailValue}</p><br><p>Idade: ${cli.idadeValue}</p><br><p>Endereço: ${cli.enderecoValue}</p><br><p>Telefone: ${cli.telefoneValue}<br></p>`;
    container.appendChild(div);
  });
}
window.addEventListener("DOMContentLoaded", listarPerfil);
