const poll = new Map();

function addOption(option) {
  if(!poll.has(option)) {
    const initSet = new Set();
    poll.add(option, initSet)
    return `Option "${option}" added to the poll.`
  }
  return `Option "${option}" already exists.`
}
