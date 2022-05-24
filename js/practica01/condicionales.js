//operador if
console.log("operador if")
let x=6;
if (x<4){//guarda del operador if
    x+=2;
}
else{
    x-=1
    
}
console.log(x);
//operador ternario de una condicion
console.log("Operador ternario de una condicion");
x = x<4 ? x+=2 :x-=1;
console.log(x);
//no todos los if se pueden sustituir con el operador ternario
//operador switch
console.log("Operador switch");
switch(x){
    case 2:
        x+=1;
        break;
    case 3:
        x+=2;
        break;
    default:
        x-=1;

}
console.log("Resultado de la operacion con switch: ",x);