const fs = require('fs');
const path = require('path');

const problems = require('../../problems');

const baseUrl = path.join(__dirname, '../../problems/');

const getRandomItemFromArray = array => array[Math.floor(Math.random()*array.length)];

module.exports = {
  currentProblem: undefined,
  getRandomProblem: function () {
    this.currentProblem = JSON.parse(fs.readFileSync(baseUrl + getRandomItemFromArray(problems), 'utf8'));
    return this.currentProblem;
  },
}