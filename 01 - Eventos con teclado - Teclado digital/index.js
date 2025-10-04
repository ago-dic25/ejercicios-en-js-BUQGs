let secuncia = [];
let reproducirBtn = document.getElementById('boton');
let limpiarBtn = document.getElementById('limpiar');

document.addEventListener('keydown', function(e) {
    
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
    guardarSecuencia(e.keyCode);

}); 

function guardarSecuencia(codigoTecla) {
    secuncia.push(codigoTecla);

}

function reproducirSecuencia() {
    let delay = 0;
    for(let i = 0; i < secuncia.length; i++) {
        let audioSecuencia = document.querySelector(`audio[data-key="${secuncia[i]}"]`);
        setTimeout(function() {
            audioSecuencia.play();
        }, delay);
        delay += 500;
    }

}

function limpiarSecuencia() {
    secuncia = [];
}

reproducirBtn.addEventListener('click', reproducirSecuencia);
limpiarBtn.addEventListener('click', limpiarSecuencia);  