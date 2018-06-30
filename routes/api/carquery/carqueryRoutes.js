const router = require("express").Router();
const axios = require("axios");

require("dotenv").config();
// Matches with /api/cars
router.route("/").get(function(req,res){

  axios.get(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&[params]`).then(function(carData) {
     console.log(carData.data)
    // res.send("hit route")
    res.json(carData.data) 
  })
  .catch(function(err){
    console.log(err);
    res.json(err);
  })
})

module.exports = router;

