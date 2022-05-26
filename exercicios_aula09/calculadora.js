/*function insert(val)
{
    document.getElementById("display").value+=val
} 
//function that evaluates the digit and return display
function solve()
{
    let x = document.getElementById("display").value
    let y = eval(x)
    document.getElementById("display").value = y
}
//function that clear the display
function clr()
{
    document.getElementById("display").value = ""
}*/
function insert(a)
{
    document.getElementById("display").value+=a
}
function opcao()
{
    var res = []
    
    if (document.getElementById("display").value.includes("+")) {
        res = document.getElementById("display").value.split('+')
        return parseFloat(res[0]) + parseFloat(res[1])
    }
    if (document.getElementById("display").value.includes("-")) {
        res = document.getElementById("display").value.split('-')
        return parseFloat(res[0]) - parseFloat(res[1])
    }
    if (document.getElementById("display").value.includes("*")) {
        res = document.getElementById("display").value.split('*')
        return parseFloat(res[0]) * parseFloat(res[1])
    }
    if (document.getElementById("display").value.includes("/")) {
        res = document.getElementById("display").value.split('/')
        return parseFloat(res[0]) / parseFloat(res[1])
    }
    if (document.getElementById("display").value.includes("^")) {
        res = document.getElementById("display").value.split('^')
        return parseFloat(res[0]) ** parseFloat(res[1])
    }
    if (document.getElementById("display").value.includes("%")) {
        res = document.getElementById("display").value.split('%')
        return parseFloat(res[0]) % parseFloat(res[1])
    }
    if (document.getElementById("display").value.includes("!")) {
        res = parseInt(document.getElementById("display").value.slice(0, -1))
        if (res === 0 || res === 1)
            return 1;
        for (var i = res - 1; i >= 1; i--) {
            res *= i;
        }
        return res;
    }
}
function solve()
{
    var a = opcao()
    document.getElementById("display").value = a
}
function clr()
{
    document.getElementById("display").value = ""
}