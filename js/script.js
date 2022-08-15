let hamburguerEscolhido ;
let hamburguerEscolhidoPreco;
let bebidaEscolhida;
let bebidaEscolhidaPreco;
let sobremesaEscolhida;
let sobremesaEscolhidaPreco;
let totalPedido;

//Só funciona com dois cliques
//Só funciona com dois cliques
//Só funciona com dois cliques
//Só funciona com dois cliques
//Só funciona com dois cliques
//Só funciona com dois cliques

function selecionadoComida(item){
    let comidaSelecionada = document.querySelector("#choice-plate .selecionado")
    let comidaSelecionadaItem = document.querySelector("#choice-plate .selecionado .text-one")
    let comidaSelecionadaPreco = document.querySelector("#choice-plate .selecionado .text-three")

    
    if(comidaSelecionada !== null){
        comidaSelecionada.classList.remove('selecionado')
    }
    
    
    
    item.classList.add('selecionado')


    hamburguerEscolhido = comidaSelecionadaItem.innerHTML;
    hamburguerEscolhidoPreco = comidaSelecionadaPreco.innerHTML;
    
    console.log(hamburguerEscolhido, hamburguerEscolhidoPreco, item)
    
    botaoContinuar()
}


function selecionadoBebida(item){
    let bebidaSelecionada = document.querySelector("#choice-drink .selecionado")
    let bebidaSelecionadaItem = document.querySelector("#choice-drink .selecionado .text-one")
    let bebidaSelecionadaPreco = document.querySelector("#choice-drink .selecionado .text-three")
    
    if(bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove('selecionado')
    }
    item.classList.add('selecionado')


    bebidaEscolhida = bebidaSelecionadaItem.innerHTML;
    bebidaEscolhidaPreco = bebidaSelecionadaPreco.innerHTML;
    
    console.log(bebidaEscolhida, bebidaEscolhidaPreco)
    botaoContinuar()
}



function selecionadoSobremesa(item){
    let sobremesaSelecionada = document.querySelector("#choice-dessert .selecionado")
    let sobremesaSelecionadaItem = document.querySelector("#choice-dessert .selecionado .text-one")
    let sobremesaSelecionadaPreco = document.querySelector("#choice-dessert .selecionado .text-three")
    
    if(sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove('selecionado')
    }
    item.classList.add('selecionado')


    sobremesaEscolhida = sobremesaSelecionadaItem.innerHTML;
    sobremesaEscolhidaPreco = sobremesaSelecionadaPreco.innerHTML;
    
    console.log(sobremesaEscolhida, sobremesaEscolhidaPreco)
    botaoContinuar()
}



function botaoContinuar(){

    if (hamburguerEscolhido !== undefined){
        if (bebidaEscolhida !== undefined){
            if(sobremesaEscolhida !== undefined){
                const continueBtn = document.querySelector('.btn-accept');
                continueBtn.classList.add('btn-accept2');
                continueBtn.innerHTML = `Fechar pedido`
            }
        }
    }   
}


function fazerPedido(){
    if (hamburguerEscolhido !== undefined){
        if (bebidaEscolhida !== undefined){
            if(sobremesaEscolhida !== undefined){
                const fechamento = document.querySelector('#confirmer-order')
                fechamento.classList.remove('display-none')

                const pedido01 = document.querySelector('.pedido1')
                const pedido02 = document.querySelector('.pedido2')
                const pedido03 = document.querySelector('.pedido3')
                
                const preco01 = document.querySelector('.preco1')
                const preco02 = document.querySelector('.preco2')
                const preco03 = document.querySelector('.preco3')
                const preco04 = document.querySelector('.preco4')

                let precoHamburguer = hamburguerEscolhidoPreco.replace("R$ ","")
                precoHamburguer = Number(precoHamburguer.replace(",","."))
                console.log(precoHamburguer)
                let precoBebida = bebidaEscolhidaPreco.replace("R$ ","")
                precoBebida = Number(precoBebida.replace(",","."))
                console.log(precoBebida)
                let precoSobremesa = sobremesaEscolhidaPreco.replace("R$ ","")
                precoSobremesa = Number(precoSobremesa.replace(",","."))
                console.log(precoSobremesa)

                const valorSomado = precoHamburguer + precoBebida + precoSobremesa

                


                pedido01.innerHTML = hamburguerEscolhido
                pedido02.innerHTML = bebidaEscolhida
                pedido03.innerHTML = sobremesaEscolhida
                preco01.innerHTML = hamburguerEscolhidoPreco
                preco02.innerHTML = bebidaEscolhidaPreco
                preco03.innerHTML = sobremesaEscolhidaPreco  
                preco04.innerHTML = `R$ ${valorSomado.toFixed(2)}`

                totalPedido = valorSomado.toFixed(2)
                
            }
        }
    } 
}

function refazerPedido(){
    const cancelando = document.querySelector('#confirmer-order')
    cancelando.classList.add('display-none')
}

function finalizadoPedido(){

    const pedido = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n
    -Prato: ${hamburguerEscolhido} \n
    -Bebida: ${bebidaEscolhida} \n
    -Sobremesa: ${sobremesaEscolhida} \n
    Total: R$ ${totalPedido}`)
    
    window.location = `https://wa.me/?text=${pedido}`

    console.log('Olá, gostaria de fazer o pedido: \n- Prato:' + hamburguerEscolhido + '\n-Bebida ' + bebidaEscolhida + '\n-Sobremesa ' + sobremesaEscolhida + '\nTotal: R$' + totalPedido)

    
}


