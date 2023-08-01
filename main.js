$(document).ready(function(){
    
    $('.adicionar').click(function(e){

        e.preventDefault()
        
        const nomeTarefa = $('#tarefa').val()
        const linha = document.createElement('li')
        
        linha.innerHTML = `${nomeTarefa}`
        $('ul').append(linha)
        $('#tarefa').val('')

        $(linha).click(function(){
            $(linha).toggleClass('riscado')
        })
    })
})