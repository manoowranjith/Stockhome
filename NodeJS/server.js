const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()


app.listen(3001,()=>{
  console.log("Port 3001 is running")
})

app.use(cors(
  {
      origin: "*",
  }
))

app.use(bodyParser.urlencoded({extended: true}) )

app.get('/search/:id',(req,res)=>{
  axios('https://www.pexels.com/api/v3/search/suggestions/'+req.params.id)
  .then(function (response) {
    res.json(response.data.data.attributes);
  }).catch(function (error) {
    res.json({respone:404})
  });
  // console.log(req.params.id)
  // res.send("resolved"+req.params.id)
})

