
let images_path = {
    image1: "https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg",
    image2: "https://ghantee.com/wp-content/uploads/2022/09/mahadev-most-beautiful-silhouette.jpg",
    image3: "https://ghantee.com/wp-content/uploads/2022/09/lord-krishna-silhouette-image-HD-576x1024.jpg",
    image4: "https://ghantee.com/wp-content/uploads/2022/08/HD-mahadev-image-in-moon-light-576x1024.jpg",
    image5: "https://ghantee.com/wp-content/uploads/2022/08/ultra-hd-1080p-shiva-hd-wallpaper-576x1024.jpg",
    image6: "https://ghantee.com/wp-content/uploads/2022/07/iphone-lord-shiva-hd-wallpaper-576x1024.jpg",
    image7: "https://ghantee.com/wp-content/uploads/2022/08/best-lord-krishna-image-576x1024.jpg",
    image8: "https://ghantee.com/wp-content/uploads/2022/09/adiyogi-calm-wallpaper-for-mobile-576x1024.jpg"
}


// let target = document.querySelector(".wrapper");

// let fragment = document.createDocumentFragment()


// for (el in images_path){
//     let image = document.createElement('img')
//         image.src = images_path[el];
//         image.classList = el
//         fragment.appendChild(image)
//     console.log(image)
// }

// target.appendChild(fragment);




function injector(element, data){
    let target = document.querySelector(element);

    let fragment = document.createDocumentFragment()
    
    
    for (let el in data){
        let image = document.createElement('img')
            image.src = data[el];
            image.classList = el
            fragment.appendChild(image)
    }
    
    target.appendChild(fragment);
       
}


injector(".wrapper",images_path);


function injector_rotater(element, data){
    let target = document.querySelector(element);

    let fragment = document.createDocumentFragment()
    let i = 1;
    
    for (let el in data){
        let image = document.createElement('img');
            image.src = data[el];
            image.classList = el;


        let span = document.createElement('span'); 
        span.style = `--i:${i}`

        span.appendChild(image);
        fragment.appendChild(span);
        i++;
    }
    
    target.appendChild(fragment);
       
}


injector_rotater(".slider",images_path);


/*
Ejercicios propuestos para la clase sobre funciones : 
*/


/*
### Ejercicio 1
 - Escribir una funci??n que reciba una muestra de n??meros y devuelva los valores que no cumplen con los siguientes  requerimientos: 
 * Que sean primos
 * Mayores a 50
 * Ordenados por mayor a menor
 
 -- Pueden usar el m??todo sort() o alguna otra forma de sorting

function bubble_sort(data){
    let array = data.slice();

    for(let i = 0 ; i < array.length - 1 ; i++){
        for(let j=0 ; j < array.length -1 -i; j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]];
            }
        }
    }

    return array;

}

*/

// Usaremos el m??todo divide y conquistar

function bubble_sort(data){
    // Pensar en funciones puras, quiere decir que las funciones jam??s van a modificar el valor original

    let array = data.slice();

    for(let i = 0 ; i < array.length - 1 ; i++){
        for(let j=0 ; j < array.length -1 -i; j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]];
            }
        }
    }

    return array;

}


function esMayorA(data , comparador = 50){
    return data>=comparador
}


function esPrimo(data){

    // Permite discernir que n??mero es primo 

    if (!(data == 1 || data <=0) ) {
        for( let i = 2; i < (data/2) + 1 ; i++) {
            if(data%i == 0) return false;
        }
    };
    return true;
}


function main(listaIngresada){
    /*
        ORDERNAR EL ARRAY DADO POR EL USUARIO
        DETERMINAR SI ES PRIMO O NO
        RETORNAR VALORES MODIFICADOS Y ORIGINALES
    */

    let listaAOrdenar = []

    for (let elemento of listaIngresada){
        if (esPrimo(elemento) && esMayorA(elemento)){
            listaAOrdenar.push(elemento);
        }
    }


    let listaOrdenada = bubble_sort(listaAOrdenar) ;
    

    return {
        listaOrdenada: listaOrdenada ,
        listaOriginal: listaIngresada
    }
}


/*EJERCICIO

Escribir una funci??n reciba un diccionario con las asignaturas y las notas de un alumno y devuelva otro diccionario con las asignaturas en may??sculas y las calificaciones correspondientes a las notas aprobadas.

*/


let gabriel = {
    nombre : "gabriel",
    programacion : 10,
    historia : 4,
    matematica : 7
}



function changer(user){

    let changedUser = {};

    for(let key in user){
        if (typeof(user[key]) === 'number'){
            if (esMayorA(user[key],7)){
                changedUser[key.toUpperCase()] = user[key];
            }
        } else {
            changedUser[key] = user[key];
        }
    }   
    return changedUser;
}


/*- Escribir una funci??n que reciba un n??mero entero positivo y devuelva su factorial.*/

function factorial(data){

    
    if(data > 0){

        let returnValue = 1;
        
        let i =1 ;
        
        while( i <= data){
            returnValue*=i ;
            i++;
        }
        
        return returnValue;
    }

    return data;

}


/*Escribir una funci??n que calcule el total de una factura tras aplicarle el IVA. La funci??n debe recibir la cantidad sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura. Si se invoca la funci??n sin pasarle el porcentaje de IVA, deber?? aplicar un 21%.*/


function IVAReturned(data,iva = 21){
    return (1 + iva/100)* data;
}






/*CLOUSURE*/
let rentPrice = function(initialRent) {

    let rent = initialRent;
   
     // Define private variables for
     // the closure
     return {
       getRent: function() {
         return console.log(rent);
       },
       incRent: function(amount) {
         rent += amount;
         console.log(rent);
       },
       decRent: function(amount) {
          rent -= amount;
          console.log(rent);
       }
     }
 }


 let Rent = rentPrice(8000);
   
 // Access the private methods
 Rent.incRent(2000);
 Rent.decRent(1500);
 Rent.decRent(1000); 
 Rent.incRent(2000); 
 Rent.getRent();


 let Sale = rentPrice(10000);


Sale.incRent(2000);
Sale.decRent(1500);
Sale.decRent(1000); 
Sale.incRent(2000); 
Sale.getRent();




