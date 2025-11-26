// initialisation de l'objet Map
const poll = new Map();

// function d'ajout a l'objet Map "poll"
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
function vote() {

};
