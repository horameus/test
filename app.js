// Creer une fonction qui log la derniere entée d'un tableau de nombres
// - Creer la fonction
// - executer la fonction
// - Lancer le code et se sentir fier de soi

const arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 15];
const arrayOfString = ["Hello", "World", "How", "Are", "You"];

///function DerniereValeur(array) {
///  const arrayLength = array.length;
///  return array[arrayLength - 1];
///}

function DerniereValeur(array) {
  return array[array.length - 1];
}

console.log(DerniereValeur(arrayOfNumber));
console.log(DerniereValeur(arrayOfString));
console.log(DerniereValeur([12, 22]));

///const LaDerDesDer = arrayOfNumber[arrayOfNumber.length - 1];
///const LaDerDesDrole = arrayOfString[arrayOfString.length - 1];

///console.log(LaDerDesDer);

///function logStuff(stuffToLog) {
///    if ()
///  console.log(stuffToLog + 2);
///}
///
///logStuff("Logging hello world!");
