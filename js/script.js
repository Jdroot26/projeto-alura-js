var titulo = document.querySelector("#titulo"); // id = # e class = .
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    //console.log(pacientes[i]);
    var paciente = pacientes[i];
    //console.log(paciente)
    var tdPeso = paciente.querySelector(".info-peso")

    var tdAltura = paciente.querySelector(".info-altura")

    var tdImc = document.querySelector(".info-imc")

    var peso = tdPeso.textContent
    var altura = tdAltura.textContent

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        //console.log("Peso invalido!")
        pesoEhValido = false
        tdImc.textContent = "Peso invalido!"
        paciente.classList.add("paciente-valido")
    }

    if (!alturaEhValida) {
        //console.log("Altura invalida.")
        alturaEhValida = false
        tdImc.textContent = "Altura Invalida!"
        paciente.classList.add("paciente-valido")
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true
    } else {
        return false
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura)

    return imc.toFixed(2)
}




