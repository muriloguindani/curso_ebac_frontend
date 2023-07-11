const form = document.getElementById('form-campos');


form.addEventListener("submit", function(e){
    e.preventDefault();

const numeroA = parseFloat (document.getElementById('campo-a').value);
const numeroB = parseFloat (document.getElementById('campo-b').value);
const mensagemSucesso = `É válido pois ${numeroB} é maior que ${numeroA}`
const mensagemErro = `Inválido pois ${numeroB} é menor que ${numeroA}`
const mensagemIgual = `Inválido pois ${numeroA} é igual a ${numeroB}`

function comparaNumero(numeroA, numeroB){
    if (numeroB > numeroA){
        alert(mensagemSucesso);
    } 
    else if (numeroA==numeroB){
        alert(mensagemIgual)
    }
    else {
        alert(mensagemErro);
    }
}
formEValido = comparaNumero(numeroA, numeroB)
});