let hamburguerEscolhido ;
let hamburguerEscolhidoPreco;
let bebidaEscolhida;
let bebidaEscolhidaPreco;
let sobremesaEscolhida;
let sobremesaEscolhidaPreco;
let totalPedido;

function selecionadoComida(item){
    let comidaSelecionada = document.querySelector("#choice-plate .selecionado")

    if(comidaSelecionada !== null){
        comidaSelecionada.classList.remove('selecionado')
    }
    item.classList.add('selecionado')


    hamburguerEscolhido = item.querySelector(".text-one").innerHTML
    hamburguerEscolhidoPreco = item.querySelector(".text-three").innerHTML
    
    
    botaoContinuar()
}


function selecionadoBebida(item){
    let bebidaSelecionada = document.querySelector("#choice-drink .selecionado")
    
    if(bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove('selecionado')
    }
    item.classList.add('selecionado')


    bebidaEscolhida = item.querySelector(".text-one").innerHTML
    bebidaEscolhidaPreco = item.querySelector('.text-three').innerHTML
    
    botaoContinuar()
}



function selecionadoSobremesa(item){
    let sobremesaSelecionada = document.querySelector("#choice-dessert .selecionado")
    
    if(sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove('selecionado')
    }
    item.classList.add('selecionado')


    sobremesaEscolhida = item.querySelector(".text-one").innerHTML
    sobremesaEscolhidaPreco = item.querySelector(".text-three").innerHTML
    
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
    
    window.location = `https://wa.me/5531991627440?text=${pedido}`

    console.log('Olá, gostaria de fazer o pedido: \n- Prato:' + hamburguerEscolhido + '\n-Bebida ' + bebidaEscolhida + '\n-Sobremesa ' + sobremesaEscolhida + '\nTotal: R$' + totalPedido)

    
}


