function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //hora = 0
    msg.innerHTML = `Agora são ${hora}`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'manha.jpg' 
        document.body.style.background = '#eacb99'
    } else if(hora >= 12 && hora <= 18){
        // boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#f6841a'
    }else{
        // boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#1c232d'
    }
}