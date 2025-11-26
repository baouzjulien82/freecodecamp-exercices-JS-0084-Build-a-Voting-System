const poll = new Map();

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
