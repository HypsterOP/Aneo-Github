const { reconDB } = require('reconlx')
const client = require('./index')
const db = new reconDB(client, {
    uri:
        "MONGO_URL"
});

module.exports = db;

// i use recondb as it is easy to use!