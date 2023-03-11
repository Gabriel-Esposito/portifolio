var data = new Date()
var dia = data.getHours()
if (dia < 12) {
    console.log(`${dia}h. Bom dia!`)
} else if(dia < 18){
    console.log(`${dia}h. Boa tarde!`)
} else{
    console.log(`${dia}h. Boa noite!`)
}