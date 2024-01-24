/**
 * Creer une fonction prennant en parametre un array de nombre.
 * La fonction doit boucler sur l'array et ajouter 10 a chaque nombre.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */

function requireLasagna(arraylasagna) {
  const arraylongeur = arraylasagna.length;
  for (let i = 0; i < arraylongeur; i++) {
    arraylasagna[i] = arraylasagna[i] + 10;
  }
  return arraylasagna;
}

/**
 * Faire evoluer la fonction pour qu'elle ajoute un nombre passé en parametre
 */
function requireLasagnaOverkill1000(arraylasagna, superpower) {
  const arraylongeur = arraylasagna.length;
  for (let i = 0; i < arraylongeur; i++) {
    arraylasagna[i] = arraylasagna[i] + superpower;
  }
  return arraylasagna;
}

/**
 * Faire evoluer la fonction pour s'assurer que les parametres sont bien des nombres
 * La fonction retourne "Nik t mort" si ce n'est pas le cas
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */
function isArrayOfNumber(array) {
  if (!Array.isArray(array)) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      return false;
    }
  }
  return true;
}

function requireMoreLasagna(arraylasagna, superpower) {
  const arraylongeur = arraylasagna.length;
  if (!isArrayOfNumber(arraylasagna)) {
    return "Nik t mort";
  }
  for (let i = 0; i < arraylongeur; i++) {
    arraylasagna[i] = arraylasagna[i] + superpower;
  }

  return arraylasagna;
}

/**
 * Ultime fonction lasagna
 * Reproduire la meme fonction en utilisant for of
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
function ultimateLasagnaUpgrader(arraylasagna, superpower) {}

const result1 = requireLasagna([1, 2, 3, 4, 5]);
console.log(result1);

const result2 = requireLasagnaOverkill1000([1, 2, 3, 4, 5], 1007475475470);
console.log(result2);

const result3 = requireMoreLasagna([1, 2, 3, 4, 5], 1000);
console.log(result3);

const result4 = requireMoreLasagna([1, 2, 3, 4, 5], 1000);
console.log(result4);
