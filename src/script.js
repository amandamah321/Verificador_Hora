function carregar(){

    var message = window.document.getElementById('message')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getUTCMinutes()
    message.innerHTML = 'Agora são ' +  hora + ':' + minutos + ' em Alicante';


    if (hora >= 0 && hora <= 12) {
        foto.src = '/Verificador_Hora/src/img/manha.jpg'
    } else if (hora >= 12 && hora <= 18) {
        foto.src = '/Verificador_Hora/src/img/tarde.jpg'
    } else {
        foto.src = '/Verificador_Hora/src/img/noite.jpg'
    };


}
