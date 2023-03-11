var idade = 15
if (idade < 16) {
    console.log('Você ainda não tem idade para votar!')
} else if(idade < 18 || idade > 65){
    console.log('Você pode escolher se quer votar ou não')
} else{
    console.log('Seu voto é obrigatorio!')
}