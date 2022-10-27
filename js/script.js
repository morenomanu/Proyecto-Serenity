const btnSuscripcion = document.querySelector('.btnSuscripcion'),
   contenedorTarjetas = document.getElementById("contenedorTarjetas"),
   verCarrito = document.getElementById("verCarrito"),
   modalContainer = document.getElementById("modal-container");

let nuevo = document.querySelector('.nuevo');
let emailUsuario = document.getElementById('emailUsuario');
let btnSuscripcionUsuario = document.getElementById('btnSuscripcion');

function suscripcion() {
   nuevo.innerHTML += '<h4 class="suscripcion">SUSCRIPCIÓN EXITOSA!</h4>'
}
btnSuscripcion.addEventListener('click', suscripcion)

btnSuscripcionUsuario.addEventListener('click', ()=>{
   localStorage.setItem('email',emailUsuario.value);
});

const productos = [
   {
      id: 1,
      nombre: 'Vinchas kit x3',
      precio: 1300,
      img: "../assets/img/kit4.jpg",
   },
   {
      id: 2,
      nombre: 'Set de Brochas',
      precio: 1800,
      img: "../assets/img/kit7.jpg",
   },
   {
      id: 3,
      nombre: 'Kit de limpieza',
      precio: 3600,
      img: "../assets/img/kit1.jpg",
   },
   {
      id: 4,
      nombre: 'Pads de limpieza',
      precio: 900,
      img: "../assets/img/kit2.jpg",
   },
   {
      id: 5,
      nombre: 'Scrunchies x5',
      precio: 700,
      img: "../assets/img/kit5.jpg",
   },
   {
      id: 6,
      nombre: 'Kit de Esponjas',
      precio: 500,
      img: "../assets/img/kit6.jpg",
   }
];

let carrito = [];

productos.forEach((producto) => {
   let content = document.createElement("div");
   content.className = "tarjeta";
   content.innerHTML = ` 
   <img src="${producto.img}">
   <h3>${producto.nombre}</h3>
   <p>$${producto.precio}</p>
   `;

   contenedorTarjetas.append(content);

   let comprar = document.createElement("button");
   comprar.className = "btn";
   comprar.innerText = "Añadir al carrito";
   content.append(comprar);

   comprar.addEventListener("click", () => {
      carrito.push({
         id: producto.id,
         img: producto.img,
         nombre: producto.nombre,
         precio: producto.precio,
      });
   });
});

verCarrito.addEventListener("click", () => {
   modalContainer.innerHTML = "";
   modalContainer.style.display = "flex";
   const modalHeader = document.createElement("div");
   modalHeader.className = "modal-header";
   modalHeader.innerHTML = `
   <h1 class = "modal-header-tittle">Carrito</h1>
   `;
   modalContainer.append(modalHeader);

   const modalButton = document.createElement("h1");
   modalButton.innerText = "X";
   modalButton.className = "modal-header-button";
   modalButton.addEventListener("click", () => {
      modalContainer.style.display = "none";
   });
   modalHeader.append(modalButton);

   carrito.forEach((producto) => {
      let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.innerHTML = `
      <img src="${producto.img}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      `;
      modalContainer.append(carritoContent);
   });
   const total = carrito.reduce((acc, e) => acc + e.precio, 0);

   const totalCompra = document.createElement("div");
   totalCompra.className = "total-content";
   totalCompra.innerHTML = `Total: $${total}`;
   modalContainer.append(totalCompra);
});