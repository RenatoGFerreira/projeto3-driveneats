function selecionado(elemento){
    let objeto = document.querySelector(".selecionado")


    if(objeto){
        objeto.classList.remove("selecionado")
    }
    if(elemento === objeto){
        elemento.classList.toggle('selecionado')
    }
    elemento.classList.toggle('selecionado')

    console.log(elemento)
}