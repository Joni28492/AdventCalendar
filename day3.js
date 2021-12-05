/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
Para saber si una carta es válida ✅, debes comprobar que los paréntesis 
cierran correctamente y que, además, no vayan vacíos.
¡Pero ojo! Porque el Grinch ha dejado llaves
 { y corchetes [ dentro de los paréntesis que hacen que no sean válidas.
 Por suerte sólo los ha dejado en medio de los paréntesis...


Crea una función que pasándole el texto de la carta,
devuelva true si es válida y false si no lo es. 
¡Y acaba con la travesura del Grinch!

*/

function isValid(letter = "") {
  let stack = [];
  const refObj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  if (letter.includes("()") || letter.includes("{}") || letter.includes("[]")) {
    return false;
  }

  // const keys = Object.keys(refObj);
  // console.log(keys);
  for (let i = 0; i < letter.length; i++) {
    // console.log(letter[i]);
    if (letter[i] === "(" || letter[i] === "{" || letter[i] === "[") {
      stack.push(letter[i]); //
    }
    if (letter[i] === ")" || letter[i] === "}" || letter[i] === "]") {
      if (letter[i] === refObj[stack[stack.length - 1]]) {
        // console.log("Cerrado correctamente");
        stack.pop();
      } else {
        // console.log("mal cerrado");
        return false;
      }
    }
  }

  if (stack.length != 0) {
    return false;
  }
  // console.log("En la funcion", stack);
  // ¡No dejes que el Grinch gane!
  return true;
}

const carta = "(muñeca) consola bici"; // -> ✅
console.log("esta carta es ", isValid(carta));

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
