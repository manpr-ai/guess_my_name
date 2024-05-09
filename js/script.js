// Récupération de l'élément d'entrée et de l'élément de résultat
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");
const guessButton = document.getElementById("guessButton");

// Nom à deviner
const myName = "Manon";
let totalAttempts = 0;
let gameEnded = false;

// Fonction pour valider la devinette de l'utilisateur
const guessMyName = () => {
  if (gameEnded) return;

  const guessName = guessInput.value.trim().toLowerCase();
  totalAttempts++;

  if (!isValidString(guessName)) {
    result.textContent =
      "Vous devez saisir uniquement des caractères alphabétiques !";
    return;
  }

  if (guessName !== myName.toLowerCase()) {
    result.textContent = "Non, le nom est incorrect !";
  } else {
    result.textContent = `Bravo, vous avez trouvé mon nom en ${totalAttempts} tentatives.`;
    gameEnded = true;
    guessButton.removeEventListener("click", guessMyName); // Supprime l'écouteur d'événement sur le bouton
  }
};

// Fonction pour valider la chaîne de caractères
const isValidString = (string) => {
  return /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s\-']+$/u.test(
    string
  );
};

// Ajout de l'événement click sur le bouton
guessButton.addEventListener("click", guessMyName);
