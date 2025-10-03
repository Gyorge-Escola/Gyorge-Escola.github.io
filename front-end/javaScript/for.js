function contagem(){
    for (let i=0;i<=10;i++) {
        alert("Número "+i)
    }
}

function contagemr(){
    for (let i=10;i>=0;i--) {
        alert("Número "+i)
    }
}

function pares(){
    for (let i=0;i<=20;i= i+2) {
        alert("Número "+i)
    }
}

function tabs(){
    let numero = parseInt(prompt("Digite um número"))
    for (let i=0;i<=10;i++) {
        alert(numero*i)
    }
}

function cem(){
    let numero = 0
    for (let i=0;i<=100;i++) {
        numero + i
    }
    alert(numero)
}