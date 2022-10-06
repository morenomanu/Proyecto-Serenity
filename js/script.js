class Producto {
    constructor(nombre, formato, precio, id) {
        this.nombre = nombre;
        this.formato = formato;
        this.precio = parseInt(precio);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }
}

const productos = [
    new Producto('Emulsion en gel', 'Emulsion', 1900, 1),
    new Producto('Serum Niacinamida', 'Serum', 2300, 2),
    new Producto('Contorno de ojos', 'Crema', 1700, 3),
    new Producto('Gel de limpieza', 'Gel', 2000, 4),
    new Producto('Tonico facial', 'Tonico', 1600, 5),
    new Producto('Protector solar', 'Crema', 2700, 6),
    new Producto('Exfoliante quimico', 'Tonico', 2300, 7),
]

let continuar = true;

while (continuar) {
    let ingresar = prompt('Carga los datos del producto separados por una barra (/): nombre, formato, precio. Ingresa X para finalizar.');
    if (ingresar.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingresar.split('/');
    const producto = new Producto(datos[0], datos[1], datos[2], datos[3], datos[4]);

    productos.push(producto);
    producto.asignarId(productos);
}

let orden = prompt('Elija de que manera desea ordenar los productos: \n1 - Nombre (A a Z) \n2 - Nombre (Z a A) \n3 - Menor a mayor precio \n4 - Formato (A a Z)');

function ordenar(orden, array) {

    let arrayOrdenado = array.slice(0);

    switch (orden){
        case '1':
        let ascendente = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.nombre));
        return ascendente;
        case '2':
        let descendente = arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.nombre));
        return descendente;
        case '3':
        return arrayOrdenado.sort((a,b)=>a.precio - b.precio);
        case '4':
        let formatoAscendente = arrayOrdenado.sort((a, b) => a.formato.localeCompare(b.formato));
        return formatoAscendente;
        default:
        alert('Inválido');
        break;
    }
}

function resultado(array) {

    let informacion='';
    
    array.forEach(elemento=>{
        informacion += 'Nombre: ' + elemento.nombre + '\nFormato: ' + elemento.formato + '\nPrecio: $' + elemento.precio + '\n\n'
    })
    return informacion;
}

alert(resultado(ordenar(orden, productos)))

let formato = prompt('Escriba el formato que desea para visualizar los productos disponibles que coincidan:');

const filtro = productos.filter((producto)=>producto.formato.toLowerCase().includes(formato.toLowerCase()))

if (filtro.length==0){
    alert('No se han encontrado coincidencias.');
}else{
    const imprimible = filtro.map((producto)=>producto.nombre);
    alert ('Los productos que coinciden con el formato deseado son: \n- ' + imprimible.join('\n- '))
}