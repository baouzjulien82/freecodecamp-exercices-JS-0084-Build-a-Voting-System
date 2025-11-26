// initialisation de l'objet Map
const poll = new Map();

// function d'ajout de l'option de vote
function addOption(option) {
  if(!option) {
    return "Option cannot be empty."
  };
  if(!poll.has(option)) {
    const initSet = new Set();
    poll.add(option, initSet)
    return `Option "${option}" added to the poll.`
  }else {
    return `Option "${option}" already exists.`
  };
};

// function vote
function vote(voteOption, voterId) {
  if(!poll.has(voteOption)) {
    return `Option "${voteOption}" does not exist.`
  }
};
