function verificar(){
 var data = new Date()
 var ano = data.getFullYear()
 var fano = window.document.getElementById('txtano')
 var res = window.document.getElementById('res')
 if(fano.value.length == 0 || fano.value > ano){ // verificando se o ano não esta vazio e se não é maior que o ano atual
    window.alert('[ERROR] Verifique os dados e tente novamente!')
 } else{
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = window.document.createElement('img') // criando um elemento
    img.setAttribute('id','foto') // dano um id e nome para o id do elemento
    if (fsex[0].checked) { // verificando se foi marcado
        genero = 'Homen'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'garoto-crianca.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'jovem-homen.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adulto-homen.png')
        }else{
            //idoso
            img.setAttribute('src', 'velho-homen.png')
        }
    } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'garota-crianca.png')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'jovem-menina.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adulto-mulher.png')
        }else{
            //idoso
            img.setAttribute('src', 'velha-mulher.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)// para adicionar um elemento do js
 }
}