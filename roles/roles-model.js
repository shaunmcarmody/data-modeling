const db = require('../data/dbConfig.js');

const find = () => db('roles');

module.exports = {
  find
}