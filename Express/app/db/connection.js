const { Client } = require("pg")
const CREDENTIALS = require('../config/pg')

function connection() {
  return new Client(CREDENTIALS);
}

module.exports = {
  connection,
}