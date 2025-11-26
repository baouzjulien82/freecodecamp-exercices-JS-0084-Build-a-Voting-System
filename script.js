// initialisation de l'objet Map
const poll = new Map();

// function d'ajout de l'option de vote
function addOption(option) {
  if (!option) {
    return "Option cannot be empty.";
  }
  if (!poll.has(option)) {
    const votersSet = new Set();
    poll.set(option, votersSet);
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`;
  }
}

// function vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const votersSet = poll.get(option);
  if (votersSet.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  } else {
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
