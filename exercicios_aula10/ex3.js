function mostrarDados() {
    //var demo = document.getElementById("demo");
    var outPrecoVista = document.getElementById("outPrecoVista");
    var outPrecoPrazo = document.getElementById("outPrecoPrazo");
  
    var marca = document.getElementById("inMarca").value
    var modelo = document.getElementById("inModelo").value;
    var ano = Number(document.getElementById("inAno").value);
    var preco = Number(document.getElementById("inPreco").value);

    var carro = {
        marca,
        modelo,
        ano,
        preco,
        /*detalhes : function() {
            return "Marca: " + this.marca + "\n" + "Modelo: " + this.modelo + "\n" + "Ano: " + this.ano + "\n" + "Preço: " + this.preco
        },*/
        aVista : function() {
            return this.preco * 0.95;
        },
        aPrazo : function() {
            return "Entrada: " + (this.preco/2).toFixed(2) + "\n" + " ".repeat(18) + "12x de: " + (this.preco/24).toFixed(2);
        }
    }

    if (marca == "" || modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
        alert("Informe corretamente os dados do carro");
        document.getElementById("inMarca").focus();
        return;
    }
  
    // demo.textContent = carro.detalhes();     // exibe os detalhes
    outPrecoVista.textContent = "Preço a Vista R$: " + carro.aVista().toFixed(2);
    outPrecoPrazo.textContent = "Preço a Prazo R$: " + carro.aPrazo();
}
var botaoCalcular = document.getElementById("botaoCalcular");
botaoCalcular.addEventListener("click", mostrarDados);