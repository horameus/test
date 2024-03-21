// const MotApplication = "Mega Test";

// let MotUtilisateur = prompt("Entrez le mot : " + MotApplication);

///if (MotApplication === MotUtilisateur) {
///  console.log("Bien ouej !");
///} else {
///  console.log("Raté !");
///}

// switch (MotUtilisateur) {
//   case MotApplication:
//     console.log("Bien ouej !");
//     break;
//   case "fils de pute":
//     console.log("D'ou tu m'insultes sale batard ?!");
//     break;
//   case "enculé":
//     console.log("D'ou tu m'insultes sale batard ?!");
//     break;
//   case "connard":
//     console.log("D'ou tu m'insultes sale batard ?!");
//     break;
//   case "salope":
//     console.log("D'ou tu m'insultes sale batard ?!");
//     break;
//   default:
//     console.log("Raté !");
// }

let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let listePhrases = ["Hopla guys", "Je suis une jante", "Je mange des lavabos"];
let score = 0;

// let motUtilisateur = prompt("Entrez le premier mot : " + listeMots[0]);

// if (motUtilisateur === listeMots[0]) {
//   score++;
//   console.log("Bien joué ! votre score est de " + score);
// } else {
//   console.log("Raté ! votre score est de " + score);
// }

// motUtilisateur = prompt("Entrez le deuxième mot : " + listeMots[1]);

// if (motUtilisateur === listeMots[1]) {
//   score++;
//   console.log("Bien joué ! votre score est de " + score);
// } else {
//   console.log("Raté ! votre score est de " + score);
// }

// motUtilisateur = prompt("Entrez le dernier mot : " + listeMots[2]);

// if (motUtilisateur === listeMots[2]) {
//   score++;
//   console.log("Bien joué ! votre score est de " + score);
// } else {
//   console.log("Raté ! votre score est de " + score);
// }

let ChoixJeu = prompt("Tapez 'mot' ou 'phrase' pour choisir le mode de jeu");

while (ChoixJeu !== "mot" && ChoixJeu !== "phrase") {
  ChoixJeu = prompt("Tapez 'mot' ou 'phrase' pour choisir le mode de jeu");
}

switch (ChoixJeu) {
  case (ChoixJeu = "mot"):
    for (let i = 0; i < listeMots.length; i++) {
      let motUtilisateur = prompt("Entrez le mot : " + listeMots[i]);
      if (motUtilisateur === listeMots[i]) {
        score++;
        console.log("Bien joué ! votre score est de " + score);
      } else {
        console.log("Raté ! votre score est de " + score);
      }
    }
    console.log("Votre score final est de " + score + "/" + listeMots.length);
    break;
  case (ChoixJeu = "phrase"):
    for (let i = 0; i < listePhrases.length; i++) {
      let motUtilisateur = prompt("Entrez la phrase : " + listePhrases[i]);
      if (motUtilisateur === listePhrases[i]) {
        score++;
        console.log("Bien joué ! votre score est de " + score);
      } else {
        console.log("Raté ! votre score est de " + score);
      }
    }
    console.log(
      "Votre score final est de " + score + "/" + listePhrases.length
    );
    break;
  default:
    console.log("pas compris fréro");
}
