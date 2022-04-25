const pg = require("pg")
const client = new pg.Client({
    user: 'postgres',
    password: 'postgres',
    database: 'nodejs',
    host: 'localhost',
    port: '5432'
})

client.connect()

module.exports = client