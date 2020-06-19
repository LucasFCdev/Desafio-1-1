// *** Calculo de IMC ***

//Criar um programa para calcular o IMC  e nível de obesidade de uma pessoa.

//Constantes recebendo o Dados para indentificação e calculo de IMC

const nome = 'João'
const peso = 72
const altura = 1.74
const sexo = 'M'

// Calculo de IMC

const imc = peso/(altura * altura)

if (imc >= 30){
    console.log(`${nome}, Seu IMC é: ${imc}, você está acima do peso!`)
}
else{
    console.log(`${nome}, seu IMC é: ${imc}, você não está acima do peso!`)
}


