let password = 'hola';

function login(){

    let ingreso = false;

    for(let i=2; i>=0; i--){
        let userPassword = prompt('Ingresa tu contraseña para entrar al mundo Serenity Skincare. Recuerda que el usuario se bloqueará luego de '+ (i+1) +' intento/s fallido/s.');
        if (userPassword === password){
            alert('Contraseña correcta. ¡Bienvenida/o a Serenity!');
            ingreso = true;
            break;
        }else{
            alert('Contraseña incorrecta. Queda/n ' + i + ' intento/s.');
        }
    }

    return ingreso;
}

login();

if(login()){
    let price = 10000;
    let discount = 4000;
    const suma = (a, b) => a + b;
    const resta = (a, b) => a - b;
    const iva = x => x * 0.21;
    
    let option = prompt('Anteriormente has incluido "Emulsión en gel" en el carrito de compras. Para ver o calcular su precio elige una opción:  \n1- Precio bruto. \n2- Precio con iva. \n3- Precio con descuento. \n4- Precio neto. \n5- Presiona X para ir al sitio web.');
    
    while(option != 'X' && option !='x'){
        switch(option){
            case '1': 
            alert('El precio bruto del producto es $' + price);
            break;
            
            case '2':
            let ivaPrice = suma(price, iva(price));
            alert ('El precio con iva es $' + ivaPrice);
            break;

            case '3':
            let discountedPrice = resta(price,discount);
            alert ('El precio con descuento es $' + discountedPrice);
            break;

            case '4':
            let netPrice = resta(suma(price,iva(price)),discount);
            alert ('El precio neto es $' + netPrice);
            break;

            default:
            alert('Opción incorrecta');
            break;
        }

        option = prompt('Anteriormente has incluido "Emulsión en gel" en el carrito de compras. Para ver o calcular su precio elige una opción:  \n1- Precio bruto. \n2- Precio con iva. \n3- Precio con descuento. \n4- Precio neto. \n5- Presiona X para ir al sitio web.');
    }
}else{
    alert('Usuario bloqueado');
}