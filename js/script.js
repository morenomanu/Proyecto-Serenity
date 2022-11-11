const btnSuscripcion = document.querySelector('.btnSuscripcion'),
   contenedorProductos = document.getElementById('contenedor-productos'),
   contenedorCarrito = document.getElementById('carrito-contenedor'),
   contadorCarrito = document.getElementById('contadorCarrito'),
   btnVaciar = document.getElementById('vaciar-carrito'),
   cantidad = document.getElementById('cantidad'),
   precioTotal = document.getElementById('precioTotal'),
   cantidadTotal = document.getElementById('cantidadTotal');

let nuevo = document.querySelector('.nuevo');

function suscripcion() {
   nuevo.innerHTML = `<h4 class="suscripcion">SUSCRIPCIÓN EXITOSA!</h4>`
};
btnSuscripcion.addEventListener('click', suscripcion);

let carrito = [];

const stockProductos = [
   {
      id: 1,
      nombre: 'Faciales',
      descripcion: 'Set x2 cremas faciales: contorno de ojos y emulsión hidratante',
      cantidad: 1,
      precio: 2400,
      img: '../assets/img/kit1.jpg'
   },

   {
      id: 2,
      nombre: 'Pads',
      descripcion: 'Pads de limpieza reutilizables ecofriendly',
      cantidad: 1,
      precio: 1100,
      img: '../assets/img/kit2.jpg'
   },

   {
      id: 3,
      nombre: 'Corporal',
      descripcion: 'Set de emulsión corporal, exfoliante químico y exfoliante físico',
      cantidad: 1,
      precio: 3650,
      img: '../assets/img/kit3.jpg'
   },

   {
      id: 4,
      nombre: 'Vinchas',
      descripcion: 'Kit de 3 vinchas con moño para make up o skincare',
      cantidad: 1,
      precio: 2050,
      img: '../assets/img/kit4.jpg'
   },

   {
      id: 5,
      nombre: 'Mini scrunchies',
      descripcion: 'Kit x5 mini scrunchies estampadas',
      cantidad: 1,
      precio: 500,
      img: '../assets/img/kit5.jpg'
   },

   {
      id: 6,
      nombre: 'Esponjas',
      descripcion: 'Set de esponjas de celulosa x3, variedad de colores',
      cantidad: 1,
      precio: 850,
      img: '../assets/img/kit6.jpg'
   },

   {
      id: 7,
      nombre: 'Brochas',
      descripcion: 'Kit de brochas para make up varios usos',
      cantidad: 1,
      precio: 4100,
      img: '../assets/img/kit7.jpg'
   },

   {
      id: 8,
      nombre: 'Max scrunchies',
      descripcion: 'Duo de maxi scrunchies amigables con el cabello',
      cantidad: 1,
      precio: 700,
      img: '../assets/img/kit55.jpg'
   },
];

document.addEventListener('DOMContentLoaded', () => {
   if (localStorage.getItem('carrito')) {
      carrito = JSON.parse(localStorage.getItem('carrito'))
      actualizarCarrito()
   }
});

btnVaciar.addEventListener('click', () => {
   carrito.length = 0
   actualizarCarrito()
});

stockProductos.forEach((e) => {
   const div = document.createElement('div')
   div.classList.add('producto')
   div.innerHTML = `
    <img src=${e.img} alt= "">
    <h3>${e.nombre}</h3>
    <p>${e.descripcion}</p>
    <p class="precioProducto">$ ${e.precio}</p>
    <button id="agregar${e.id}" class="btn">Añadir al carrito</button>
    `
   contenedorProductos.appendChild(div)
   const boton = document.getElementById(`agregar${e.id}`)
   boton.addEventListener('click', () => {
      agregarAlCarrito(e.id)
   })
});

const agregarAlCarrito = (prodId) => {
   const existe = carrito.some(prod => prod.id === prodId)
   if (existe) {
      const prod = carrito.map(prod => {
         if (prod.id === prodId) {
            prod.cantidad++
         }
      })
   } else {
      const item = stockProductos.find((prod) => prod.id === prodId)
      carrito.push(item)
   }
   actualizarCarrito()
};

const eliminarDelCarrito = (prodId) => {
   const item = carrito.find((prod) => prod.id === prodId)
   const indice = carrito.indexOf(item)
   carrito.splice(indice, 1)
   actualizarCarrito()
};

const actualizarCarrito = () => {
   contenedorCarrito.innerHTML = ""
   carrito.forEach((producto) => {
      const div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML = `
        <p>Ítem: ${producto.nombre}</p>
        <p>Valor: $${producto.precio}</p>
        <p>Cant: <span id="cantidad">${producto.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${producto.id})" class="boton-eliminar"><i class="fa-solid fa-delete-left"></i></i></button>
        `
      contenedorCarrito.appendChild(div)

      localStorage.setItem('carrito', JSON.stringify(carrito))

   })
   contadorCarrito.innerText = carrito.length
   precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
};

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0],
   btnAbrir = document.getElementById('boton-carrito'),
   btnCerrar = document.getElementById('carritoCerrar'),
   modalCarrito = document.getElementsByClassName('modal-carrito')[0];

btnAbrir.addEventListener('click', () => {
   contenedorModal.classList.toggle('modal-active')
});
btnCerrar.addEventListener('click', () => {
   contenedorModal.classList.toggle('modal-active')
});
contenedorModal.addEventListener('click', (event) => {
   contenedorModal.classList.toggle('modal-active')
});
modalCarrito.addEventListener('click', (event) => {
   event.stopPropagation()
});
