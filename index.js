const express = require('express');
const app = express();
const members = require('./Members')
const fs = require('fs')
const path = require('path')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/calls' , require('./api/Calls'))




app.listen(5000, ()=> console.log('Express JS running'))