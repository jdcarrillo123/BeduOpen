console.log("de acuerdo a la hora ingresada dice el tipo de saludo y valida si la hora esta fuera del rango de hora")
const time=13;
let greeting;
if (time<12){
    greeting="Buenos días"
}else if (time<20){
    greeting="Buenas tardes";
}else if(time>=20 && time<=24){
    greeting="Buenas noches";
}else{
    greeting="la hora "+time+" es invalida";
}
console.log(greeting);
console.log("Crear un ciclo desde 0 hasta 100 Mostrar todos los números pares en este ciclo con console.log()");
let y;
for (let x=0; x<=100; x+=1){
    y=x%2
    if (x!=0 && y==0){
        console.log(x);
    }

}
console.log("Contar cuantos . hay en una cadena de texto");
let cadenaTexto="No comas ajos ni cebollas, porque no saquen por el olor tu villanería. Anda despacio; habla con resposo; pero no de manera que parezca que te escuchas a ti mismo; que toda afectación es mala. Come poco y cena más poco; que la salud de todo el cuerpo se fragua en la oficina del estómago. Sé templado en el beber, considerando que el vino demasiado ni guarda secreto, ni cumple palabra. Ten cuenta, Sancho, de no mascar a dos carrillos, ni de erutar delante de nadie"
let arreglo=[];
for (let i=0; i<cadenaTexto.length; i+=1){
    if(cadenaTexto[i]==="."){
        arreglo.push(i);
    }
}
console.log(arreglo.length);