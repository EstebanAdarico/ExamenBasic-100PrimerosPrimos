// una variable es un espacio reservado de memoria que sirve para almacenar memoria
//declarando una variable se reserva  un espacio en la meméria para después utilizarla
// se inicializa para guardar info en ese espacio 
//el signo de +
//determina el nombre y tipo de dato para almacenar en variables la siguiente información
// let nam = 'Esteban';
// let lastName = 'Puma adarico' ;
// let NameOfUserPlatzi = 'esteban Puma';
// let age = 23 ;
// let email = 'estebangpa41@gmail.com'
// let comingOfAge = true ;
// let savedMoney = 1000;
// let debts = 50;
// let nickName = 'bann' ;
// calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior

// var nameAndLastname = `${nam} ${lastName}`;
// var realMoney = String.raw`Tu dinero ahorrado es : ${savedMoney - debts}`;
// console.log(`Hola ${nameAndLastname} mucho gusto.\n${realMoney}`);
//   que es una funcion ---- es un bloque de código que hace una seri4e de procedimientos 
//¿cuando me sirve usar una funcion? cuando se repite varias lineas de código en el proyecto
// ¿Cuál es la diferencia entre parámetros y argumentos de una función? parámetro en una variable que está en la definición de una función y una argumento son los datos  a los parámetros  de una función

// convierte el siguiente código  en una función , pero , cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función

// function nickname (nombre,apodo){
//    let mensaje = `Mi nombre es ${nombre} pero prefiero que me digan ${apodo}`;
//    console.log(mensaje);
// }
// nickname(nameAndLastname,nickName);
//que es una condicional? es un grupo de instrucciones que se ejecutan según el resultado de una evaluacion 
//¿Qué tipo de condicionales existen en javascript y cuales son  sus diferencias 
//if , else if , else , switch , ternario


// const typeOfSubs = 'basic';

// if (typeOfSubs == 'free'){
//    console.log(`solo puedes tomar los cursos gratis`);
// }else if(typeOfSubs == 'basic'){
//    console.log(`Puedes tomar casi todos los cursos de Platzi durante un mes`);
// }else if(typeOfSubs == 'Expert'){
//    console.log(`Puedes tomar casi todos los cursos de Platzi durante un año`);
// }else if (typeOfSubs == 'ExpertPlus'){
//    console.log(`Tú y alguien más pueden y tomar TODOS los cursos de Platzi durante un año`)
// } 

//¿Qué es un ciclo?
//un bloque de código que se repite N veces
//¿Qué tipos de ciclos existen en javascript
// while , do while , for , for in
// Replicar el comportamiento de los siguientes cicles for utilizando ciclos while
// let i = 0 ;
// while (i < 5 ){
//    console.log(`El valor de i es : ${ ++i}`);

// }

// let i = 10 ;
// while(i >= 2){
//    console.log(`el valor de i es : ${i}`)
//    --i;
// }
// Escribe un código en javascript que le pregunte al usuario cuánto es 2+2 
// si responde bien mostraremos un mensaje de felicitaciones , pero si respomde mal valvamos a empezar 
// while (true){
//    let questions = prompt('¿Cuánto es 2+2')
//    if (questions !== '4') {
//       console.log('Respuesta incorrecta , vuelve a introducir la respuesta');
//    }else{
//       console.log('Respuesta correcta \n ¡CONGRATULATIONS');
//       break;
//    }
// }
// alert('CONGRATULATIONS')


// responde las siguientes preguntas 
//¿Qué es una array?
//los arrays son objetos  similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación .Tanto la longitud como el tipo de los elementos de un array son 
//¿Qué es un objeto ?
//es una entidad independiente con propiedades y tipos
//sus propiedades definen su caracteristica
//¿Cuándo es mejor usar objetos o arrays ?
//objetos para cuando se repíten propiedades con diferente valor 
//Crear una función que pueda recibir cualquier array como parámetro e imprima su primer valor

// const verduras = ['tomate','brocoli'];
// const frutas = ['manzana','durazno'];
// function listshop(printf){
//    return console.log(printf[0])
// }
// listshop(verduras);

//Crea una funcion que queda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno(sin imprimir el array completo )
const duras2 = ['tomato','lechuga','brocoli'];
const frutas2 = ['fresas','manzanas','durazno'];

console.log(duras2.length);

function listShop (list){
   for (let i = 0; i < list.length; i++) {
      console.log(list[i]);
   }  
}
listShop(duras2);
//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno
const versura1 = {
   'tomate' : 'roja' ,
   'lechuga' :'verde'
}






//###################################################################################

//creando una funcion que permita encontrar todos los números primos  entre el 1 y 100 y que  de mensaje de salida reconociendo si primo o no  

var nP = 74 ;

if (nP <= 19){
   function factorial(nP) {
      var total = 1;
      for (let i = 1; i <= nP - 1  ; i++) {
         total *= i ; 
      }
      return total;
   }

   var residuo = (factorial(nP)+ 1) % nP;
   var divisor = (factorial(nP)+ 1) / nP;
   console.log(factorial(nP))
   if (residuo == 0){
      console.log(`${nP} es un número primo`);
   }else{
      console.log(`${nP} no es un número primo `);
   }
   }else if(nP >= 19 ){
      var division2 = nP / 2 ;
      var disi2text = division2.toString()

      if (disi2text.includes('.') == true  && ((nP / 3).toString().includes('.')) == true  && ((nP / 5).toString().includes('.')) == true && ((nP / 7).toString().includes('.')) == true ){
         console.log(`${nP} es un número primo`)
      }else{
         console.log(`${nP} no es un número primo`)
      }
   }