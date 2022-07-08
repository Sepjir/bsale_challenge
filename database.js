const mysql =  require("mysql")
require('dotenv').config()

const connection = mysql.createPool({
    connectionLimit: 100,
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    database:process.env.DBNAME,
    password:process.env.DBPASSWORD
})


module.exports = connection
