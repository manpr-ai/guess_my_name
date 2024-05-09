// Import de la fonction prompt depuis le fichier prompt.js
import { prompt } from "./prompt";
console.log(`
Bienvenue au jeu Guess My Name ! 🎮

Règles :
1. Devinez mon nom (accents autorisés)
2. Si votre supposition est incorrecte, vous pourrez deviner à nouveau.
3. Le jeu continue jusqu'à ce que vous deviniez le bon nom.

Commençons ! 🚀`);

const myName = "manon";
let totalAttempts = 0;

const isValidString = (string) => {
  return /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s\-']+$/u.test(
    string
  );
};

const guessMyName = () => {
  const guessName = String(prompt("Entrer un nom : "));
  totalAttempts++;

  if (!isValidString(guessName)) {
    console.log(
      "Vous devez saisir seulement des caractères alphabétiques ! (accents autorisés)"
    );
    guessMyName();
  }
  if (guessName.toLocaleLowerCase() !== myName) {
    console.log("Le nom n'est pas correct");
    guessMyName();
    return;
  }
  if (guessName.toLocaleLowerCase() === myName) {
    console.log("Bravo vous avez trouvé mon nom ! ");
    console.log(`Vous avez trouvé en ${totalAttempts} tentatives`);
    return;
  }
};
guessMyName();
