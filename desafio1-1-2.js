// *** Calculo de aposentadoria ***

// Criar um programa para calcular a aposentadoria de uma pessoa

 // cosntatntes de indentificação 
const nome = "Joana"
const sexo = 'F'
const idade = 63
const contribuicao = 35

const SomaContribuicaoIdade = idade + contribuicao

if (sexo === 'F'){
    if((contribuicao >= 30) && (SomaContribuicaoIdade >= 85)){
        console.log(`${nome}, Você pode aponsentar!`)
    }
    else{
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}
else{
    if((contribuicao >= 35) && (SomaContribuicaoIdade >= 95)){
        console.log(`${nome}, Você pode aponsentar!`)
    }
    else{
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}
