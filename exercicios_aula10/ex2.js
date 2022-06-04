function calcularDataLimite() {
    var outDataLimite = document.getElementById("outDataLimite");
    var outComDesconto = document.getElementById("outComDesconto");
  
    var data = document.getElementById("inData").value;
    var valor = Number(document.getElementById("inValor").value);
    if (data == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados da multa");
        return;
    }

    var dataLimite = new Date();
    var partes = data.split("-"); // divide a data da multa em partes (ano, mes, dia) e as armazena em um array
    // "seta" as partes da data
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1]) - 1); // valores de 0-11
    dataLimite.setFullYear(Number(partes[0]));
  
    var dia = dataLimite.getDate();
    dataLimite.setDate(dia + 90);
  
    var dia = dataLimite.getDate();
    var mes = dataLimite.getMonth() + 1;
    var ano = dataLimite.getFullYear();
    
    outDataLimite.textContent = "Data Limite para Pagamento com Desconto: " + 
        (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
    outComDesconto.textContent = "Valor com Desconto R$: " + (valor * 0.80).toFixed(2);
  }
  var botaoCalcular = document.getElementById("botaoCalcular");
  botaoCalcular.addEventListener("click", calcularDataLimite);