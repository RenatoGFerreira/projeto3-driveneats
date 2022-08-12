function selecionado(card){
    window.alert('foi')
    const escolhido = document.querySelector(".selecionado")
    const opcao = document.querySelector(card)

    opcao.classList.toggle("selecionado")
}