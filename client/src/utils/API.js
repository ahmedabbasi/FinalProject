import axios from "axios";

export default {
  // get NYT articles
  /* 
    {
      q: "yankees",
      begin_date: "2001"
    } 
  */
  cnnSearch: function(query) {
    return axios.get("/api/cnn", {params: query})
  },

  foxSearch: function(query) {
    return axios.get("/api/fox", {params: query})
  },

  msnbcSearch: function(query) {
    return axios.get("/api/msnbc", {params: query})
  },

  newsweekSearch: function(query) {
    return axios.get("/api/newsweek", {params: query})
  },

  bbcsportsSearch: function(query) {
    return axios.get("/api/sports/bbc-sports", {params: query})
  },

  espnSearch: function(query) {
    return axios.get("/api/sports/espn", {params: query})
  },
    
  foxsportsSearch: function(query) {
    return axios.get("/api/sports/fox-sports", {params: query})
  },

  cricinfoSearch: function(query) {
    return axios.get("/api/sports/cricinfo", {params: query})
  },

  bloombergSearch: function(query) {
    return axios.get("/api/business/bloomberg", {params: query})
  },

  businessinsiderSearch: function(query) {
    return axios.get("/api/business/business-insider", {params: query})
  },

  economistSearch: function(query) {
    return axios.get("/api/business/economist", {params: query})
  },

  financialtimesSearch: function(query) {
    return axios.get("/api/business/financial-times", {params: query})
  },

  buzzfeedSearch: function(query) {
    return axios.get("/api/entertainment/buzzfeed", {params: query})
  },
  dailymailSearch: function(query) {
    return axios.get("/api/entertainment/dailymail", {params: query})
  },
  mtvSearch: function(query) {
    return axios.get("/api/entertainment/mtv", {params: query})
  },
  
  polygonSearch: function(query) {
    return axios.get("/api/entertainment/polygon", {params: query})
  },



  // save article to mongo
  /* 
    {
      url: "path/to/nyt",
      title: "sports!",
      date: "20010808 date stuff"
    }
  */
  articleSave: function(articleInfo) {
    return axios.post("/api/articles", articleInfo)
  },

  // retrieve all saved articles from mongo
  articleRetrieve: function() {
    return axios.get("/api/articles")
  },

  // article delete
  articleDelete: function(id) {
    return axios.delete(`/api/articles/${id}`)
  }
}