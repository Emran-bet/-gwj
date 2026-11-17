const checklist = require("./security-checklist");

function securityScore() {
  const completed = checklist.filter(item => item.completed).length;
  const maximum = checklist.length;
  const score = maximum === 0
    ? 0
    : Math.round((completed / maximum) * 100);

  return {
    score,
    maximum: 100,
    completed,
    total: maximum
  };
}

module.exports = securityScore;
