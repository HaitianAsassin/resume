const mongoose = require('mongoose')
var dotenv = require('dotenv')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('connected', function(){
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})