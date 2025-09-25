const resultadohtml = document.getElementById("resultado")
function soma(){
    let num1 = prompt("Digite o primeiro número para somar!");
    let num2 = prompt("Digite o segundo número para somar!");
    let resultado = parseFloat(num1)+parseFloat(num2)
    alert("O resultado da some é " + resultado);
    resultadohtml.innerText = resultado;
}
function operacoes(){
    let num1 = prompt("Digite o primeiro número para calcular!");
    let num2 = prompt("Digite o segundo número para calcular!");
    let operador = prompt("Digite um operador: +, -, * ou /");
    let resultado = eval(num1 + operador + num2);
    alert("O resultado da operação é " + resultado);
    resultadohtml.innerText = resultado;
}
function imc() {
    let kg = prompt("Digite sua massa em Kg");
    let altura = prompt("Digite sua altura em M");
    let resultado = kg / (altura**2);
    alert("O seu IMC é " + resultado);
    resultadohtml.innerText = resultado;
}
function limpa(){
    resultadohtml.innerText = "Seu resultado aparecerá aqui!";
}