// ARROW FUCTIONS

// Simple
/* const saludar = () => {
    console.log(" Hola backend developers")
}
saludar() */

/* const sumar = (a,b) => {
    return a + b
}

console.log(sumar(2,3)) */

// Funciones con una sola expresion
/* const duplicar = (num) => num * 2 
console.log(duplicar(5)) */

// Arror functions en un arreglo de objetos

/* const usuarios = [
    { nombre: "Alumno A", edad: 20},
    { nombre: "Alumno B", edad: 30},
    { nombre: "Alumno C", edad: 50},
]

const nombres = usuarios.map(u => u.nombre) */

// Arror function como metodo de objeto
/* const persona ={
    nombre: "Franco",
    edad: 25,
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
} 
persona.saludar() */

/* function obtenerDatosUsuarios(id,callback) {
    setTimeout(() => {
        const usuario ={
            id: id,
            nombre: "Coder",
            email: "coder@gmail.com"
        }
        callback(usuario)
    }, 5000);
}

function mostrarDatosDeUsuario(usuario){
    console.log(`Nombre: ${usuario.nombre}, Email ${usuario.email}`)
}

obtenerDatosUsuarios(123,mostrarDatosDeUsuario)
*/

// Callback Hell
/* obtenerDatosUsuarios(function(resultado1) {
    procesarDatos(resultado1, function(resultado2) {
        realizarOtraOperacion(resultado2, function(resultado3){

        })
    })
}) */

// Promises - maneja operaciones asincronas
// estados - pendiente, cumplida o rechazada 
/*const promesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        const exito = true
        if (exito) {
            resolve ("tarea ejecutada con exito")
        } else {
            reject("Ocurrio un error")
        }
    }, 2000);
})

promesa.then((mensaje)=> {
    console.log("Exito", mensaje)
}).catch((error) => {
    console.log("Error ", error)

})*/

// HANS ON LAB

function suma (a,b) {
    return new Promise ((resolve, reject) => {
        if ( a === 0  || b === 0) {
            reject("Operacion  innecesaria")
        } else if (a+b < 0) {
            reject("La calculadora solo debe devovler valores positivos")
        } else {
            resolve ( a + b)
        }
    })
}

function resta ( minuendo, sustraendo) {
    return new Promise ((resolve, reject) => {
        if (minuendo === 0 || sustraendo === 0 ) {
            reject("operacion invalida") 
        }else if (minuendo - sustraendo < 0) {
            reject("La calculadora solo debe devolver valores positivos")
        }else{
            resolve(minuendo-sustraendo)
        }
    } )
}

function multiplicacion (factor1, factor2) {
    return new Promise ((resolve, reject)=> {
        if (factor1 < 0 || factor2 < 0 ) {
            reject ("La calculadora solo debe devolver valores positivos")
        } else {
            resolve(factor1 * factor2)
        }
    })
}


function division (dividendo , divisor) {
    return new Promise ((resolve, reject ) => {
        if(divisor === 0) {
            reject("No se puede dividir por cero")
        } else {
            resolve(dividendo / divisor)
        }
    })
}

// Funcion asincrona para realizar los calculos 

async function calculos () {
    try{
        const resultadoSuma = await suma (5,7)
        console.log("Resultado suma", resultadoSuma)
        const resultadoResta = await resta (0,3)
        console.log("Resultado resta", resultadoResta)
        const resultadoMultiplicacion = await multiplicacion (4,0)
        console.log("Resultado multiplicacion", resultadoMultiplicacion)
        const resultadoDivision = await division (10,0)
        console.log("Resultado division", resultadoDivision)

    } catch(error) {
        console.error("Error", error)
    }
}
calculos()





 