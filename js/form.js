var btnAdicionar = document.querySelector("#adicionar-paciente")


btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do pacinete

    var paciente = obterPaciente(form);
    //cria a tr a td do paciente
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionarPacienteNaTabela(paciente);

    var tabela = document.querySelector("#tabela-pacientes");


    form.reset();


});

function adicionarPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr)
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function obterPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome")
    var pesoTd = montaTd(paciente.peso, "info-peso")
    var alturaTd = montaTd(paciente.altura, "info-altura")
    var gorduraTd = montaTd(paciente.gordura, "info-gordura")
    var imcTd = montaTd(paciente.imc, "info-imc")


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, claase) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(claase);

    return td;
}

function validaPaciente(paciente) {

    var erros = []

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    } 
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!")
    }
     if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }
    return erros;
}