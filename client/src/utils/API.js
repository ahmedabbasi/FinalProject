import axios from "axios";

export default {
//get info
/*
{
  q:"PK"
}

*/

  //get Car Details
  carSearch: function(query){
    return axios.get("/api/carquery", {params: query})
  },
  // save car to mongo
  /*
  {
    q:"MY"
  }
  */
  carSave: function (carInfo) {
    return axios.post("api/cars" , carInfo)
  },
// retrieve saved cars from mongo
  carRetrieve: function (carInfo) {
    return axios.get("api/cars")
  }
}