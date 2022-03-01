const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 3001

app.listen(port,()=>{
  console.log("Port 3001 is running")
})

app.use(cors(
  {
      origin: "*",
  }
))

app.use(bodyParser.urlencoded({extended: true}) )

app.get('/search/:id',(req,res)=>{
  const url='https://www.pexels.com/api/v3/search/suggestions/'
  var id=req.params.id
  axios(url+id)
  .then(function (response) {
    res.json(response.data.data.attributes);
  }).catch(function (error) {
    res.json({respone:404})
  });
})

