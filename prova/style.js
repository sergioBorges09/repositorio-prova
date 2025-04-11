window.onload = function(){
    const cadastroUsuario = localStorage.getItem("usuarios")
    if(cadastroUsuario == null){
        const lista = []
        localStorage.setItem("usuarios",JSON.stringify(lista))
    }
    atualizarCadastro()
}
function atualizarCadastro(){
    const cadastroUsuario = localStorage.getItem("usuarios")
    const lista = JSON.parse(cadastroUsuario)

    const tBody = document.getElementById("cadastro-tbody")
    tBody.innerHTML = ""

    lista.forEach(function(usuario){
        const linhaTr = document.createElement("tr")

        const linhaNome = document.createElement("td")
        linhaNome.innerText = usuario.nome

        const linhaEmail = document.createElement("td")
        linhaEmail.innerText = usuario.email

        const linhaCpf = document.createElement("td")
        linhaCpf.innerText = usuario.cpf

        const linhaData = document.createElement("td")
        linhaData.innerText = usuario.data

        const linhaAcao = document.createElement("td")
        const botao = document.createElement("button")
        botao.innerText = "Excluir"
        botao.addEventListener("click",function(nome){
            removerUsuario(usuario.nome)
        })

        linhaTr.append(linhaNome)
        linhaTr.append(linhaEmail)
        linhaTr.append(linhaCpf)
        linhaTr.append(linhaData)
        linhaAcao.append(botao)
        linhaTr.append(linhaAcao)
        tBody.append(linhaTr)
    })
}
const formulario = document.getElementById("formCadastro")
formulario.addEventListener("submit",function(event){
    event.preventDefault()

    const cadastroUsuario = localStorage.getItem("usuarios")
    const lista = JSON.parse(cadastroUsuario)

    const inputNome = document.getElementById("nome")
    const inputEmail = document.getElementById("email")
    const inputCpf = document.getElementById("cpf")
    const inputData = document.getElementById("nascimento")

    const erroNome = document.getElementById("erroNome")
    const erroEmail = document.getElementById("erroEmail")
    const erroCpf = document.getElementById("erroCPF")
    const erroData = document.getElementById("erroNascimento")
    erroNome.innerText = ""
    erroEmail.innerText = ""
    erroCpf.innerText = ""
    erroData.innerText = ""

    //regex
    const regexEmail = /^[a-z0-9._-]+@[a-z0-9-]+\.[a-z]{2,}$/i
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/


    //validações
    if(inputNome.value == ""){
        erroNome.innerText = "Erro, preencha o campo nome"
        return false
    }
    if(inputEmail.value == ""){
        erroEmail.innerText = "Erro,preencha corretamente o Email"
        return false
    }
    if(inputCpf.value == ""){
        erroCpf.innerText = "Erro, preencha corretamente o CPF"
        return false
    }
    if(inputData.value == ""){
        erroData.innerText = "Erro,preencha o campo data de nascimento"
        return false
    }

    arrayUsuario = {
        nome: inputNome.value,
        email: inputEmail.value,
        cpf: inputCpf.value,
        data: inputData.value
    }
    lista.push(arrayUsuario)
    localStorage.setItem("usuarios",JSON.stringify(lista))
    atualizarCadastro()
})
function removerUsuario(nomeUsuario){
    const cadastroUsuario = localStorage.getItem("usuarios")
    const lista = JSON.parse(cadastroUsuario)

    const novaLista = lista.filter(function(usuario){
        return usuario.nome != nomeUsuario
    })
    localStorage.setItem("usuarios",JSON.stringify(novaLista))
    atualizarCadastro()
}
