const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;

// ****************************Query to test if the pool is connecting properly***************************
// pool.query('SELECT * FROM generation', (error, response) => {
//     if (error) return console.log('error', error);

//     console.log('response.rows', response.rows);
// });