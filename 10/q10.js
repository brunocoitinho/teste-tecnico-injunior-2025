const btnNovo = document.getElementById('btn-novo')
const btnAtender = document.getElementById('btn-atender')
const btnSair = document.getElementById('btn-sair')
const formMenu = document.getElementById('form-menu')
const inputCliente = document.getElementById('entrada-cliente')
const btnAdicionar =document.getElementById('btn-adicionar')
const ulFila = document.getElementById('fila')

const container = document.getElementById('container')
let listaClientes = []
let idCliente = 0
removerInputCliente()
console.log(listaClientes)


btnNovo.addEventListener("click", function(e){
    criarInputCliente()
    
})

btnAtender.addEventListener("click", function(e){
    removerInputCliente()
    try{
        atenderCliente()
    }catch(error){
        alert(error.message)
    }
})

btnSair.addEventListener("click", function(e){
    removerInputCliente()
    alert('Encerrando Programa')
    container.innerHTML = '<h1>PROGRAMA ENCERRADO</h1>'
})

btnAdicionar.addEventListener('click', function(e){
    e.preventDefault()
    try{
        adicionarCliente()
    }catch(error){
        alert(error.message)
    }
})


function criarInputCliente(){
    inputCliente.style.display = 'inline-block'
    btnAdicionar.style.display = 'inline-block'
}

function removerInputCliente(){
    inputCliente.style.display = 'none'
    btnAdicionar.style.display = 'none'
}

function adicionarCliente(){
    if(inputCliente.value==''){
        throw new Error ('Nome de cliente requerido')
    }
    listaClientes.push([inputCliente.value, idCliente])
    ulFila.innerHTML += `<li id=cliente-${idCliente}>${inputCliente.value}</li>`
    inputCliente.value = ''
    removerInputCliente()
}

function atenderCliente(){
    if(listaClientes == []){
        throw new Error ('Nenhum cliente na fila de espera')
    }
    let atendido = listaClientes.shift()
    const liAtendido = document.getElementById(`cliente-${atendido[1]}`)
    liAtendido.remove()
    alert(`Cliente ${atendido[0]} atendido`)
}


/*
Escreva um programa para simular uma fila de espera em uma central
de atendimento ao cliente. O programa deve iniciar exibindo na tela um
menu interativo contendo a lista de todos os clientes esperando
atendimento, mostrando a posição ao lado do nome (ex.: 1o João, 2o
Maria, etc).
O menu deve permitir escolher entre as seguintes opções:
1 - “Novo Cliente”: Adiciona um novo cliente ao final da fila
(solicitando o nome do cliente).
2 - “Atender Cliente”: Retira o primeiro cliente da fila e exibe o
nome do cliente que está sendo atendido.
3 - “Sair”: Encerra o programa.
O programa só deve ser encerrado ao escolher a opção 3. Caso
contrário, ele deve retornar ao menu principal.
*/