const express = require('express')
const app = express()
const api = require('./api/api')
const config = require('./config/config')
const appMiddleware = require('./middleware/appMiddleware')


appMiddleware(app)
app.use('/api', api)


app.use((err, req, res)=>{
  if(err){
    console.log(err.stack)
  }
})


module.exports = app 


