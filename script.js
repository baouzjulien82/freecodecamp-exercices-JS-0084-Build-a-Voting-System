// initialisation de l'objet Map
const poll = new Map();

// function d'ajout d'une option de vote
function addOption(option) {
  if (!option) {
    return "Option cannot be empty.";
  }
  // vérifier que l'option n'existe pas déjà dans "poll"
  if (!poll.has(option)) {
    // Si vrai, ajout d'une option avec un set vide
    const votersSet = new Set();
    poll.set(option, votersSet);
    return `Option "${option}" added to the poll.`;
  } else {
    // sinon signaler que l'option est déjà présente
    return `Option "${option}" already exists.`;
  }
}

// function vote
function vote(option, voterId) {
  // vérifier si l'option n'existe pas
  if (!poll.has(option)) {
    // si vrai, return option n'existe pas
    return `Option "${option}" does not exist.`;
  }
  // On récupère l'objet 'option' si il existe dans la variable voterSet
  const votersSet = poll.get(option);
  // vérifier si le voterId est présent dans l'objet
  if (votersSet.has(voterId)) {
    // si vrai return a déjà voté
    return `Voter ${voterId} has already voted for "${option}".`;
  } else {
    // sinon ajout du voterId dans le set
    votersSet.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }
}

// ajout d’options
addOption('Jean Marie');
addOption('Jacques');
addOption('Michel');

// ajout de votes
vote('Jean Marie', 'julien');
vote('Jean Marie', 'julien');
vote('Jean Marie', 'julien');
vote('Jacques', 'didier');
vote('Michel', 'roger');
vote('Jean Marie', 'julien');
vote('Jean Marie', 'julien');

// foncton d’affichage des resultats
function displayResults() {
  let resultString = "Poll Results:\n";
  poll.forEach((votersSet, option) => {
    resultString += `${option}: ${votersSet.size} votes\n`;
  });
  return resultString.trim();
}

console.log(displayResults());
