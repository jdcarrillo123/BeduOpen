//Declara las siguientes variables con nombres descriptivos para
//cada uno usando las convenciones utilizadas en JavaScript:
//Una variable con tu nombre completo
//Una variable con tu edad
//Una variable que almacene el valor de pi
//Una variable con tu altura en centímetros
//Una variable con el nombre de tu escuela primaria
let nombre="Juan Daniel Carrillo Mercado";
let edad=38;
let pi=3.1416;
let altura=180;
let escuelaPrimaria="Gral Ignacio Zaragoza";
//Identifica el tipo de dato de cada una de las cinco variables definidas en
//la actividad anterior.
console.log("Tipo de dato de la variable nombre es: "+typeof(nombre));
console.log("Tipo de dato de la variable edad es: "+typeof(edad));
console.log("Tipo de dato de la variable pi es: "+typeof(pi));
console.log("Tipo de dato de la variable altura es: "+typeof(altura));
console.log("Tipo de dato de la variable escuelaPrimaria es: "+typeof(escuelaPrimaria));
//Considera el siguiente enunciado:
//En una escuela hay 3 grupos cada uno tiene 20 alumnos, para el festival
//de primavera se requieren 15 flores de papel china por cada alumno al
//día, y el festival tendrá una duración de 2 días. ¿Cuántas flores son
//necesarias?
//Identifica qué variables serían necesarias para resolver el problema
//anterior y decláralas en JavaScript con nombres descriptivos usando
//las convenciones del lenguaje.
let grupos=3;
let alumnos=20;
let flores=15;
let dias=2;
let totalFlores=0;
totalFlores=grupos*alumnos*flores*dias;
console.log("Total de flores necesarias: ",totalFlores," flores");