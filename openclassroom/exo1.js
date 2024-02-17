const salaire1 = 1000;
const salaire2 = 2000;
const totalsalaire = salaire1 + salaire2;
console.log("résultat 1 = " + totalsalaire);

let placesvendues = 150;
placesvendues += 10;
console.log("résultat 2 = " + placesvendues);

let placesvendues2 = Number("150");
placesvendues2 += Number("10");
console.log("résultat 3 = " + placesvendues2);

let totalLivres = 500;
totalLivres += 50;
totalLivres -= 10;
totalLivres += 5;
console.log("résultat 4 = " + totalLivres);

const ticket = {
  nomFilm: "Interstellar",
  prix: 12,
  numeroSalle: 5,
};
let MonNom = "Loudo";
texteAffichage =
  "Bonjour " +
  MonNom +
  ", votre film " +
  ticket.nomFilm +
  " est en salle " +
  ticket.numeroSalle;
console.log("résultat 5 = " + texteAffichage);
