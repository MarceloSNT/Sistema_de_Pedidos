document
.getElementById("form-cad")
.addEventListener("submit",function (event){
    event.preventDefault();

    const nomeValue = document.getElementById("inputNome").value;
    const emailValue = document.getElementById("inputEmail").value;
    const senhaValue = document.getElementById("inputSenha").value;
    const enderecoValue = document.getElementById("inputEndereco").value;
    const idadeValue = document.getElementById("inputIdade").value;
    const telefoneValue = document.getElementById("inputTelefone").value;
    const btnEntrar = document.getElementById("btnEntrar");
    const btnCad = document.getElementById("btnCad");
    
    const newCliente = {nomeValue, emailValue, senhaValue,enderecoValue,idadeValue,telefoneValue};

    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.push(newCliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));


    btnEntrar.classList.toggle("d-none");
    btnCad.classList.remove("d-block");
    btnCad.classList.add("d-none");
    document.getElementById("form-cad").reset();
});
window.addEventListener("DOMContentLoaded");
