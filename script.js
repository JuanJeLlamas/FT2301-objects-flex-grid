console.log("aprendiendo sobre objetos")

// HOISTING & SCOPES

// hoisting significa que JS hacer una pre-lectura del codigo. 
// Busca todas las variables creadas con var y function
// sube todos los estos elementos al inicio del codigo pero con valor undefined

// console.log("antes de declarar", myName)
console.log("antes de declarar", myAge) // hoisting

let myName = "Jorge";
var myAge = 47;

console.log("despues de declarar", myName);
console.log("despues de declarar", myAge)

// let myName = "Bob";
var myAge = 20;

console.log("despues de declarar por segunda vez", myAge)


// con funciones de declaracion ocurre hoisting y el valor sería la referencia real.
// podemos invocar funciones antes de declararlas


console.log("invocar antes de declarar", myFunction())

function myFunction() {
  return "Hola"
}

const myArrowFunction = () => {

}

console.log( "despues de declarar", myFunction() )

// ...

function myFunction() {
  return "Adios"
} // sobreescribe la funcion anterior



// SCOPES

// 1. GLOBAL - la base del codigo.

let someStr = "kashdgkahg" // va a ser accesible en cualquier lugar del codigo.


// 2. BLOQUE - cada vez que abrimos set de llaves {} para escribir codigo. Expecto en funciones.
// los bloques se crean para hacer ejecuciones especificas y luego limpiar la memoria de esa seccion.

{
  let strInBlock = "banana"
  // console.log(strInBlock)
  var strInBlockVar = "bananavar" // JS hace hoisting y la hace disponible em el scope global
  stringInBlockSInDeclarar = "banana sin declarar"
}

// console.log(strInBlock) // no esta definida
console.log(strInBlockVar)
console.log(stringInBlockSInDeclarar)

for (i = 0; i < 10; i++) {
  console.log(i)
  // SIEMPRE DECLARAR CON LET
}

console.log(i)

// 3. FUNCIONES - todos lo que escribimos en una funcion.

function someVariables() {

  console.log(str2)

  let str1 = "patata";
  var str2 = "patatavar"; // hace hoisting pero solo dentro de el scope de funcion
  str3 = "patata sin declarar";

}

someVariables()

// console.log(str1)
// console.log(str2)
console.log(str3)

// CONCLUSIONES

// 1. NUNCA USAR VAR. vemos var en documention cambiarlo a let o const
// 2. siempre Declarar nuestras variables.
// 3. practicar funciones de flecha. 
// 4. leer sobre esto para prepararse para entrevistas tecnicas




// OBJETOS

/*
{
  key: value, => propiedad
  nombre: valor,
}
*/

let headPhones = {
  price: 100,
  brand: "SteelSeries",
  isNew: false,
  "max volume": 80,
  // someArr: ["hadkjs"],
  // someObj: {},
  // someFunc: function() {
  //   return "..."
  // }
}

console.log(headPhones)

// solo quiero enviar a la consola el precio

// notacion de puntos
console.log( headPhones.price )

// solo acceder a max volume de los cascos
// notacion de corchetes
console.log( headPhones["max volume"] ) // 1. caso en donde palabras son separadas
console.log( headPhones["brand"] + " precio: " + headPhones.price )

// 2. cuando tenemos el nombre de la propiedad en una variable externa
let nombreDePropiedad = "brand";

console.log(headPhones[nombreDePropiedad])


// como hacer modificaciones sobre objetos

// isNew sea nuevo
// headPhones.isNew = true;
headPhones["isNew"] = true

console.log("despues de actualizar isNew", headPhones)

// agregar una nueva propiedad. color

// console.log( headPhones.color )
headPhones.color = "rojo"

console.log("despues de crear propiedad", headPhones)


// borramos marca
delete headPhones.brand
console.log("despues de borrar propiedad", headPhones)

// mala practica
// headPhones.price = undefined;
// console.log("despues de borrar propiedad", headPhones)



// Object

console.log( Object.keys( headPhones ) ) // crea un array con todos los nombres de propiedad
console.log( Object.values(headPhones) ) // crea un array con todos los valores de propiedad
let arrOfProps = Object.keys( headPhones )

// for (let i = 0; i < arrOfProps.length; i++) {
//   console.log(arrOfProps[i])
// }

// for in => trabajar con objetos

for (let nombreDePropiedad in headPhones) {
  // console.log(nombreDePropiedad)
  // El objeto tiene propiedad "price" de valor "100";
  console.log(`El objeto tiene la propiedad "${nombreDePropiedad}" de valor "${headPhones[nombreDePropiedad]}"`)
}

// Para arrays usen solo "for" o "for of"
// Para objetos usen solo "for in"



// ESTRUCTURA DE DATOS

const users = [
  {
    name: "Jorge",
    bitcoin: 0,
    hasNFTs: false,
  },
  {
    name: "Caro",
    bitcoin: 0.02,
    hasNFTs: false,
  },
  {
    name: "Adria",
    bitcoin: 0.2,
    hasNFTs: false,
  },
  {
    name: "Ruth",
    bitcoin: 0,
    hasNFTs: false,
  },
];

// acceder al usario Caro y cambiar NFTs a true
console.log(users[1])
users[1].hasNFTs = true;

users[2]["bitcoin"] = 1.2



// cambiar la propiedad bitcoin de un usuario llamado Adria. Si no sabemos la posición.
for (let i = 0; i < users.length; i++) {

  // console.log(users[i])
  if (users[i].name === "Adria") {
    users[i].bitcoin = 1.5
  }

}



// agregar un nuevo usuario. todas sus propiedades.

let newUser = {
  name: "Phantom",
  bitcoin: 2,
  hasNFTs: true
}

users.push(newUser)


console.log(users)


// una funcion que verifica un usuario si tiene bitcoins o NFTs y arroje un mensaje. 

function doesUserInvest(oneUser) {
  // verifica un usuario si tiene bitcoins o NFTs
  if (oneUser.bitcoin > 0 || oneUser.hasNFTs === true) {
    return "Usuario Facturando!"
  } else {
    return "Usuario no cree en criptos"
  }

}

console.log( doesUserInvest( users[0] ) )


// vamos a crear una funcion que recibe un array me retorna un usuario aleatorio del array.

function selectRandomUser(userArr) {
  // .???? Math.random() ?? 0 - 0.99999999999
  let randomNumber = Math.random() * userArr.length
  // console.log(randomNumber)
  let randomPosition = Math.floor(randomNumber)

  return userArr[randomPosition]

  // return userArr[Math.floor(Math.random() * userArr.length)]
}

console.log( selectRandomUser(users) )

// nombre de un usuario aleatorio. y si esta invirtiendo o no.

let randomUser = selectRandomUser(users);
let messageUser = doesUserInvest(randomUser);
console.log(`Nombre: ${randomUser.name}. ${messageUser}`)