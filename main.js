// ESTOS PUNTOS DE TAREA COMPRENDEN TODO LO VISTO DURANTE LAS CLASE 1, 2, 3, 4
// EL PRIMER DESAFÍO COMPRENDE: VARIABLES, CONDICIONALES, BUCLES, FUNCIONES
// ESO SIGNIFICA QUE TODO EJERCICIO QUE CONTENGA MÉTODOS O DATOS QUE NO FUERON EN CLASES, NO SERÁN EVALUADOS
// RECUERDEN QUE EL PRIMER DESAFÍO INVOLUCRA QUE INTEGREN TODO LO VISTO
// ACLARACIÓN: ESTE DESAFÍO NO NECESARIAMENTE PODRÁ ESTAR RELACIONADO CON EL DESAFÍO FINAL

// CADA PUNTO EN REALIDAD ES UN EJERCICO ÚNICO QUE CONTIENE TODO LO NECESARIO PARA APROBAR
// LOS TEXTOS DE LOS MENSAJES SON A CRITERIO PERSONAL, PERO DEBEN SEGUIR LA LÓGICA PLANTEADA

// 1) PRIMER CASO:
// - Pregunte al usuario su nombre a través de un prompt.
// - Con el valor de su nombre, envíe un mensaje a través de un alert que le de la bienvenida. Ej: "Bienvenido a nuestro ecommerce Javier."
// - Pregúntele al usuario, con un nuevo prompt, qué categoría de producto le interesaría comprar, ej: "¿Qué desea comprar? Elija la opción 1 si son remeras, opción 2 si son pantalones". La frase y la forma de introducir los datos queda a criterio de ustedes. Lo necesario es que a partir del valor ingresado, se valide qué mostrar luego.
// - Valide el valor ingresado. En el caso de que sea, por ejemplo, 1, muestre por confirm el artículo remera, con un mensaje de este estilo: "Usted eligió remera. Su precio es de $x. Desea comprar este artículo?"
// - En el caso de cancelar, terminar el algoritmo con un nuevo alert: "Muchas gracias por su visita"
// - Si el usuario decide aceptar la compra, se deberá mediante un bucle, reproducir tres mensajes distintos: El primero será: "Ingrese su dirección para poder realizar el envío del pedido", el segundo: "Su artículo será enviado a: - dirección-" y el tercero: "Muchas gracias por su compra".
// FIN DEL EJERCICIO
// RECUERDEN ENCAPSULAR LA LÓGICA DENTRO DE FUNCIONES
// PUEDEN HACER UNA FUNCIÓN QUE CONTENGA UN ALERT Y QUE EL TEXTO DEL ALERT SEA PASADO COMO PARÁMETRO, COSA DE NO REPETIR LOS ALERTS Y APRENDER A HACER LÓGICA REUTILIZABLE.

let nombre = prompt("Cual es su Nombre?");

alert(`Bienvenido a nuestra Tienda ${nombre}`);

let opcionIngresada = parseInt(
  prompt(
    "Qué desea comprar: \nIngrese 1 si es: SUETER \nIngrese 2 si es: CAMISAS \nIngrese 3 si es: BERMUDAS \nIngrese 4 si es: GORRAS \nIngrese 5 si es: ZAPATOS"
  )
);

function validarOpcion(opcion) {
  if (opcionIngresada === 1) {
    const validarCompra = confirm(
      `Usted eligio SUETER. \nPrecio: $ 45000 \nDesea Comprar este articulo?`
    );

    if (validarCompra) {
      for (let i = 0; i < 1; i++) {
        let direccion = prompt(
          "Ingrese su dirección para poder realizar el envío del pedido"
        );
        alert(`Su artículo será enviado a: ${direccion}`);
        alert("Muchas gracias por su compra");
      }
    } else {
      alert("Muchas gracias por su visita");
    }
  } else if (opcionIngresada === 2) {
    const validarCompra = confirm(
      `Usted eligio CAMISAS. \nPrecio: $ 60000 \nDesea Comprar este articulo?`
    );

    if (validarCompra) {
      for (let i = 0; i < 1; i++) {
        let direccion = prompt(
          "Ingrese su dirección para poder realizar el envío del pedido"
        );
        alert(`Su artículo será enviado a: ${direccion}`);
        alert("Muchas gracias por su compra");
      }
    } else {
      alert("Muchas gracias por su visita");
    }
  } else if (opcionIngresada === 3) {
    const validarCompra = confirm(
      `Usted eligio BERMUDAS. \nPrecio: $ 50000 \nDesea Comprar este articulo?`
    );

    if (validarCompra) {
      for (let i = 0; i < 1; i++) {
        let direccion = prompt(
          "Ingrese su dirección para poder realizar el envío del pedido"
        );
        alert(`Su artículo será enviado a: ${direccion}`);
        alert("Muchas gracias por su compra");
      }
    } else {
      alert("Muchas gracias por su visita");
    }
  } else if (opcionIngresada === 4) {
    const validarCompra = confirm(
      `Usted eligio GORRAS. \nPrecio: $ 35000 \nDesea Comprar este articulo?`
    );

    if (validarCompra) {
      for (let i = 0; i < 1; i++) {
        let direccion = prompt(
          "Ingrese su dirección para poder realizar el envío del pedido"
        );
        alert(`Su artículo será enviado a: ${direccion}`);
        alert("Muchas gracias por su compra");
      }
    } else {
      alert("Muchas gracias por su visita");
    }
  } else if (opcionIngresada === 5) {
    const validarCompra = confirm(
      `Usted eligio ZAPATOS. \nPrecio: $ 120000 \nDesea Comprar este articulo?`
    );

    if (validarCompra) {
      for (let i = 0; i < 1; i++) {
        let direccion = prompt(
          "Ingrese su dirección para poder realizar el envío del pedido"
        );
        alert(`Su artículo será enviado a: ${direccion}`);
        alert("Muchas gracias por su compra");
      }
    } else {
      alert("Muchas gracias por su visita");
    }
  }
}

validarOpcion(opcionIngresada);
