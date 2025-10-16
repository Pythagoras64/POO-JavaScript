//1: Crear variables simples
let nombre = "Irene";
let edad = 25;
let pais = "El Salvador";
console.log("Hola, soy " + nombre + ", tengo " + edad + " años y vivo en " + pais);

//2: Calcular total con descuento
let precio = 50;
let descuento = 0.1;
let total = precio - (precio * descuento);
console.log("Total con descuento: $" + total);

//3: Convertir temperatura
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C son " + fahrenheit + "°F");

//4: Sumar tres números
let a = 5, b = 8, c = 3;
let suma = a + b + c;
console.log("La suma es: " + suma);

//5: Determinar si un número es positivo o negativo
let numero = -5;
if (numero >= 0) {
 console.log("El número es positivo");
} else {
 console.log("El número es negativo");
}

//6: Comparar dos números
let x = 10, y = 20;
if (x > y) {
 console.log("x es mayor");
} else if (x < y) {
 console.log("y es mayor");
} else {
 console.log("Son iguales");
}

//7: Determinar si un número es par o impar
let numer = 7;
if (numer % 2 === 0) {
 console.log("Es par");
} else {
 console.log("Es impar");
}

//8: Nota aprobatoria
let nota = 6;
if (nota >= 7) {
 console.log("Aprobado");
} else {
 console.log("Reprobado");
}

//9: Mostrar números del 1 al 5
for (let i = 1; i <= 5; i++) {
 console.log(i);
}

//10: Sumar los primeros 10 números
let sum = 0;
for (let i = 1; i <= 10; i++) {
 sum += i;
}

//11: Mostrar números pares hasta 10
for (let i = 2; i <= 10; i += 2) {
 console.log(i);
}

//12: Contar hacia atrás
for (let i = 5; i >= 1; i--) {
 console.log(i);
}

//13: Función para sumar dos números
function sumar(a, b) {
 return a + b;
}
console.log(sumar(5, 7));

//14: Función para saludar
function saludar(nombre) {
 console.log("Hola " + nombre );
}
saludar("Irene");

//15: Calcular área de un rectángulo
function areaRectangulo(base, altura) {
 return base * altura;
}
console.log("Área: " + areaRectangulo(4, 6));

//16: Calcular promedio
function promedio(n1, n2, n3) {
 return (n1 + n2 + n3) / 3;
}
console.log("Promedio: " + promedio(8, 9, 10));