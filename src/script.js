function carregar(){

    var message = window.document.getElementById('message')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getUTCMinutes()
    message.innerHTML = 'Agora são ' +  hora + ':' + minutos + ' em Alicante';


    if (hora >= 0 && hora <= 12) {
        foto.src = '/Verificador_Hora/src/img/manha.jpg'
        document.body.style.background = '#6883bc'
    } else if (hora >= 12 && hora <= 18) {
        foto.src = '/Verificador_Hora/src/img/tarde.jpg'
        document.body.style.background = '#ce7b16'
    } else {
        foto.src = '/Verificador_Hora/src/img/noite.jpg'
        document.body.style.background = '#21323e'
    };


}
