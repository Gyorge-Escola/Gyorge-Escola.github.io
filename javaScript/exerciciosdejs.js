function Versin() {
    let num = parseFloat(prompt("Digite um numero"));
    switch (true) { 
        case (num === 0):
            alert("Seu número é 0");
            break;
        case (num < 0):
            alert("Seu número é menor que 0");
            break;
        case (num > 0):
            alert("Seu número é maior que 0");
            break;
        default:
            alert("Valor inválido");
    }
    
}

function Check() {
    let idade = prompt("Qual é sua idade")
    if (idade>=18){
        alert("Vote!")
    }else{
        alert("Você é censurado!")
    }
}

function ParImpar() {
    let num = parseFloat(prompt("Digite um numero"));
    if ((num % 2) == 0) {
        alert("Número par")
    }else{
        alert("Número impar")
    }
}

function Desc() {
    let num = parseFloat(prompt("Qual o valor da compra"));
    if (num <= 100){
        let rest = num - num*0.1
        alert(rest)
    }else{
        alert("Sem desconto!")
    }
}

function Nota() {
    let num = parseFloat(prompt("Digite sua nota"));
    switch (true) { 
        case (num >= 7):
            alert("Aprovado!");
            break;
        case (num < 7 && num >= 5):
            alert("Faça recuperação!");
            break;
        case (num < 5):
            alert("Reprovado! Vagabundo!");
            break;
        default:
            alert("Valor inválido");
    }
}

function Numaior() {
    let num = parseFloat(prompt("Digite seu 1° número"));
    let num2 = parseFloat(prompt("Digite seu 2° número"));
    num < num2 ? alert(`${num} é o menor`) : alert(`${num2} é o menor`);
}

function Login() {
    let user = prompt("Digite seu usuário")
    let senha = prompt("Digite sua senha")
    user == "admin" && senha == "1234" ? alert("Acesso permitido!") : alert("Acesso negado!")
}

function Faixa() {
    let num = parseFloat(prompt("Digite sua idade!"));
    switch (true) { 
        case (num < 12):
            alert("Criança!");
            break;
        case (num >= 12 && num <= 17):
            alert("Adolecente!");
            break;
        case (num >= 18 && num < 59):
            alert("Adulto!");
            break;
        default:
            alert("Idoso!");
    }
}

function Semana() {
    let num = parseFloat(prompt("Digite um número"));
    switch (num) { 
        case 1:
            alert("Domingo");
            break;
        case 2:
            alert("Segunda");
            break;
        case 3:
            alert("Terça");
            break;
        case 4:
            alert("Quarta");
            break;
        case 5:
            alert("Quinta");
            break;
        default:
            alert("Idoso!");
    }
}