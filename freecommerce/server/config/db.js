const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres', //process.env.USERNAME
  host: 'localhost',
  database: 'freecommerce',
  password: '123456789',
  port: 5432,
})

module.exports=pool;