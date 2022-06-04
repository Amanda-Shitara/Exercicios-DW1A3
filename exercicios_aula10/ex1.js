var clubes = [];

function adicionarClube() {
    if(clubes.length < 8) {
        var nomeClube = document.getElementById("nomeClube");
        var nome = nomeClube.value;
        if (nome == "") {
            alert("Informe o nome do clube");
            nomeClube.focus();
            return;
        }
        clubes.push(nome);
    }
    else {
        alert("Já existem 8 times");
        nomeClube.focus();
        return;
    }
    listarClubes();
    nomeClube.value = "";
    nomeClube.focus();
}
var botaoAdicionar = document.getElementById("botaoAdicionar");
botaoAdicionar.addEventListener("click", adicionarClube);

function listarClubes() {
    if (clubes.length == 0) {
        alert("Não há clubes na lista");
        nomeClube.focus();
        return;
    }
    var lista = "";
    for (i = 0; i < clubes.length; i++) {
        lista += (i + 1) + "º. " + clubes[i] + "\n";
    }
    document.getElementById("lista").textContent = lista;
}
var botaoListar = document.getElementById("botaoListar");
botaoListar.addEventListener("click", listarClubes);

function montarJogos() {
    var tam = clubes.length;
    if (tam != 8) {
        alert("Deve haver 8 times");
        nomeClube.focus();
        return;
    }
    var jogos = "";
    var ultimo = tam - 1;

    var HTML = "<table border=1 width=40%><tr>"+
            "<th width=30%>Jogos</th>"+
            "<th>Clubes</th>";
    for (i = 0; i < tam / 2; i++) {
        HTML += "<tr align=center>"+
                "<td>"+(i+1)+"</td><td>"+clubes[i]+" X "+clubes[ultimo - i]+"</td></tr>";
    }
    HTML += "</tr></table>";
    document.getElementById("lista").innerHTML = HTML;//jogos;
}
var botaoMontar = document.getElementById("botaoMontar");
botaoMontar.addEventListener("click", montarJogos);