// initialisation de l'objet Map
const poll = new Map();

// function d'ajout de l'option de vote
function addOption(voteOption) {
  if (!voteOption) {
    return "Option cannot be empty.";
  }
  if (!poll.has(voteOption)) {
    const votersSet = new Set();
    poll.set(voteOption, votersSet);
    return `Option "${voteOption}" added to the poll.`;
  } else {
    return `Option "${voteOption}" already exists.`;
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

addOption('Jean Marie');
addOption('Jacques');
addOption('Michel');

vote('Jean Marie', 'julien');
vote('Jean Marie', 'julien');
vote('Jean Marie', 'julien');

function displayResults() {
  const resultarray="'resultat des votes: \n'";
  poll.forEach(option => {
  resultarray.push(`option ${} `)
})
}

displayResults();
