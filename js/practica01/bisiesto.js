function checkLeapYear(year){
    const leap= new Date(year,1,29).getDate()===29;
    if (leap){
        console.log(year +" Es año bisiesto");
        
    }else{
        console.log(year+" no es año bisiesto")
    }

}
//const year=prompt("Ingrese el año");
const year=2000;
checkLeapYear(year);