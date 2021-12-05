/*
¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, 
que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento 5, se pintaría esto:
____*____
___***___
__*****__
_*******_
*********
____#____
____#____

Creamos un triángulo de asteríscos * con la altura proporcionada y,
a los lados, usamos el guión bajo _ para los espacios. 
Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!

  let arbol = "";
  let extremos = 1;

  //copa del arbol
  for (let i = 0; i < 100; i++) {
    if (i === height) {
      break;
    }
    //rayas anteriores
    for (let j = 0; j < height - i - 1; j++) {
      arbol += "_";
    }
    //hojas
    for (let k = 0; k < extremos; k++) {
      arbol += "*";
    }
    //rayas posteriores
    for (let l = 0; l < height - i - 1; l++) {
      arbol += "_";
    }
    arbol += "\n";
    extremos += 2;
  }

  //tronco
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < height - 1; j++) {
      arbol += "_";
    }
    arbol += "#";
    for (let k = 0; k < height - 1; k++) {
      arbol += "_";
    }

    //no terminar el arbol con \n
    if (i === 0) {
      arbol += "\n";
    }
  }

  return arbol;
}
//TODO.: no esta hecho el arbol de 2 niveles pero se imprime correctamente, no pasa el test
//puede tener errores en los test, pendiente de isues
console.log(createXmasTree(5));
