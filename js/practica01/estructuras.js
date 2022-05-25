//objetos, arreglos y funciones
console.log("Objetos, arreglos y funciones");
console.log("AGGREGLOS");
let numbers=[5,3,4,7,2,1,9,7];
let i;
let suma=0;
for(i=0; i<numbers.length; i+=1){
    suma=suma+numbers[i];
}
console.log(suma/numbers.length);
 //Objetos
 console.log("Crear objeto con laos valores que lleva un objeto con pares [key,value]");
 let car=[["brand","Nissan"],["model","Versa"],["year",2022]];
 var arCar=[];
 var obj={};
 for(let i=0;i<car.length;i+=1){
    arCar=car[i]
    //console.log(car[i]);
    for(let j=0;j<arCar.length;j+=1){
        //console.log(arCar[j]);
        Object.defineProperty(obj,arCar[0],{value:arCar[1],writable:true,enumerable:true,configurable:true}); 
    }
 }
 console.log(obj);
 
 