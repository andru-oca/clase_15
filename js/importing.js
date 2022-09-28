/* CLOUSURE PENSADO EN EL FRONT END*/
import data from "./cervezas.json" assert { type: "json" }

let beerData = data ;

/*display changer*/

function changer(beer){
    const data_beer = beer ;
    let i = 0 ;

    return ()=>{
        if(i<data_beer.length){
            data_beer[i++]();
        }else {
            i = 0;
            data_beer[i++]();
        }
    }
}



let values = beerData.map(e => { 

    let ele = e;
    let div = document.getElementById("changer");

    return ()=> {
        let beer = `
        <fieldset>     

            <legend> Nombre: ${ele.Nombre} </legend>
    
            <h3>PRECIO: ${ele.Precio} <h3>
            <h4>ENVASE: ${ele.Envase}</h4>
            <p>Descripcion: ${ele.Descripcion}<p>

        </fieldSet>     
        `;
        div.innerHTML= beer;
    }

}) ;

console.log(values[0]);


const changer_displayer = changer(values);


let btn_changer = document.getElementById("btn_beer_changer");

btn_changer.addEventListener('click', changer_displayer);


/*paginador usando clousure*/


function paginador(data , cantidadRecords , funcion){
    
    const   dataVal = data,
            fn = funcion;

    let counter = 0,
        registros = cantidadRecords;


    return  ()=>{

        /*Logica de la function*/
        let agregadoMuestra = [] ; 

        if(counter >= dataVal.length){
            counter = 0;
            return ;
        } 
        

        for(let j = 0 ; j < registros && counter < dataVal.length ; j++){
            agregadoMuestra.push(dataVal[counter++]);
        }

        fn(agregadoMuestra);
    }

}




let displayData = paginador(beerData , 3 , (values) => {
    document.getElementById('beers').innerHTML += values.reduce((acc , e)=>{

        let paginators = `
        <div>     
            <h2>Nombre: ${e.Nombre}</h2>
            <h3>PRECIO: ${e.Precio} <h3>
            <h4>ENVASE: ${e.Envase}</h4>
            <p>Descripcion: ${e.Descripcion}<p>

        <div>     
        `;

        return acc + paginators;
    },"")
})


let btn = document.getElementById("btn_beer");

btn.addEventListener("click", ()=>{
    displayData();
})






