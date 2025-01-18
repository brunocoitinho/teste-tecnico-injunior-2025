let time = []


const btnAdicionar = document.getElementById('btn-novo')
const btnConfirmar = document.getElementById('btn-confirmar')
const btnBuscar = document.getElementById('btn-busca')
const inputNome = document.getElementById('entrada-nome')
const inputIdade = document.getElementById('entrada-idade')
const inputPosicao = document.getElementById('entrada-posicao')
const inputPontuacao = document.getElementById('entrada-pontuacao')

const divFormJogador = document.getElementById('form-jogador')






const btnConfirmarBusca = document.getElementById('btn-confirma-busca')
const divFormBusca = document.getElementById('form-busca')
const buscaPosicao = document.getElementById('busca-posicao')

const btnListar = document.getElementById('btn-listar')
const btnSair = document.getElementById('btn-sair')
const btnMedia = document.getElementById('btn-media')

btnConfirmar.addEventListener('click', function(e){
    e.preventDefault()
    try{
        adicionarJogador(inputNome.value, parseInt(inputIdade.value), inputPosicao.value, parseFloat(inputPontuacao.value))
        inputNome.value = ''
        inputIdade.value = ''
        inputPontuacao.valeu =''
        divFormJogador.style.display = 'none'
    }catch(error){
        alert(error.message)
    }
})

btnConfirmarBusca.addEventListener('click', function(e){
    e.preventDefault()
    try{
        let timeNovo = buscarPorPosicao(buscaPosicao.value)
        console.log(timeNovo)
    }catch(error){
        alert(error.message)
    }
})

function buscarPorPosicao(pos){
    let busca = time.filter((jogador) => jogador.posicao == pos)
    if (busca.length == 0){
        throw new Error('Nenhum Jogador encontrado')
    }
    return busca
}

/*let authors = aux.map(e => e.author)*/

function adicionarJogador(nome, idade, posicao, pontuacao){
    let jogador = {}
    jogador['nome'] = nome
    jogador['idade'] = idade
    jogador['posicao'] = posicao
    jogador['pontuacao'] = pontuacao
    time.push(jogador)
}


btnAdicionar.addEventListener('click', function(e){
    divFormJogador.style.display = 'block'
    divFormBusca.style.display = 'none'
})

btnBuscar.addEventListener('click', function(e){
    divFormJogador.style.display = 'none'
    divFormBusca.style.display = 'block'
})

btnListar.addEventListener('click', function(e){
    divFormJogador.style.display = 'none'
    divFormBusca.style.display = 'none'
    if (time.length == 0){
        alert('Nenhum jogador inserido')
    }else{
        listarTime(time)
    }
})

function listarTime(array){
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
    alert('Time listado no console')
}

btnMedia.addEventListener('click', function(e){
    divFormJogador.style.display = 'none'
    divFormBusca.style.display = 'none'
    if (time.length == 0){
        alert('Nenhum jogador inserido')
    }else{
        calcularPontuacaoMedia(time)
    }
})

function calcularPontuacaoMedia(array){
    let acumulador = 0
    for (let index = 0; index < array.length; index++) {
        acumulador += array[index].pontuacao;
    }
    console.log(acumulador/array.length)
    alert('Media listada no console')
}

btnSair.addEventListener("click", function(e){
    alert('Encerrando Programa')
    container.innerHTML = '<h1>PROGRAMA ENCERRADO</h1>'
})