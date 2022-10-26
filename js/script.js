const btnSuscripcion = document.querySelector('.btnSuscripcion');

let nuevo = document.querySelector('.nuevo');
function suscripcion() {
   nuevo.innerHTML += '<h4 class="suscripcion">SUSCRIPCIÓN EXITOSA!</h4>'
}
btnSuscripcion.addEventListener('click', suscripcion)

