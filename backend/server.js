var express = require('express')
var session = require('express-session')
var cors = require('cors')
var dotenv = require('dotenv')
var createError = require('http-errors')
var methodOverride = require('method-override')
const bodyParser = require('body-parser')
var app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(methodOverride('_method'))

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))

app.get('/');
app.use(function(req,res,next){'/'})

app.use(function(req,res,next){
    next(createError(404))
})

app.use(function(err,req,res,next){
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
    next()
})

module.exports = app