import React, { Component } from "react";
import API from "../utils/API";
import "./home.css";


class Home extends Component {

  state = {
    articles: [],
    q: "",
    begin_date: "",
    end_date: ""
  }


  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }



  articlecnnSearch = event => {
    event.preventDefault();
    API.cnnSearch({
      q: this.state.q
    }).then(res => {
      console.log(res);
      this.setState({
        articles: res.data.articles,
        q: ""
      })
    })
      .catch(err => console.log(err))
  }
  articlefoxSearch = event => {
    event.preventDefault();
    API.foxSearch({
      q: this.state.q
    }).then(res => {
      console.log(res.data);
      this.setState({
        articles: res.data.articles,
        q: ""
      })
    })
      .catch(err => console.log(err))
  }
  articlemsnbcSearch = event => {
    event.preventDefault();
    API.msnbcSearch({
      q: this.state.q
    }).then(res => {
      console.log(res.data);
      this.setState({
        articles: res.data.articles,
        q: ""
      })
    })
      .catch(err => console.log(err))
  }

  articlenewsweekSearch = event => {
    event.preventDefault();
    API.newsweekSearch({
      q: this.state.q
    }).then(res => {
      console.log(res.data);
      this.setState({
        articles: res.data.articles,
        q: ""
      })
    })
      .catch(err => console.log(err))
  }

  saveArticle = id => {
    const savedArticle = this.state.articles.find(article => (article._id === id));

    console.log(savedArticle);
    API.articleSave({
      title: savedArticle.title,
      url: savedArticle.url,
      date: savedArticle.pub_date || ""
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {

    return (
      <div>
      <div className="homepage-hero-module">
        <div className="video-container">
          <div className="filter"></div>
          <video autoPlay loop className="fillWidth">
            <source src="./assets/videos/Ferris-wheel.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src="/assets/videos/Ferris-wheel.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
          <div className="poster hidden">
            <img src="./assets/videos/Ferris-wheel.jpg" alt="" />
          </div>
        </div>
      </div>
      
  
      <div className="jumbotron">
        <div className="row align-items-center justify-content-center my-5">
          {/* <h1>News Explorer with React!</h1>     */}
          
        </div>
      </div>
    


      <div className="container-fluid">
        <div className="row">

          {/* Form for article search */}
          <div className="col-4">
            <h2>Search for News</h2>
            <form>
              <div className="form-group">
                <img style={{ padding: 10 }} src="/assets/images/cnn-logo.png" bordered spaced rounded />
                <button type="submit" className="btn btn-block btn-success" onClick={this.articlecnnSearch}>
                  CNN
                  </button>
              </div>

              <div className="form-group">
                <img style={{ padding: 10 }} src="/assets/images/fox-logo.png" bordered spaced rounded />
                <button type="submit" className="btn btn-block btn-success" onClick={this.articlefoxSearch}>
                  FOX
              </button>
              </div>

              <div className="form-group">
                <img style={{ padding: 10 }} src="/assets/images/msnbc-logo.jpg" bordered spaced rounded />
                <button type="submit" className="btn btn-block btn-success" onClick={this.articlemsnbcSearch}>
                  MSNBC
          </button>
              </div>

              <div className="form-group">
                <img style={{ padding: 10 }} src="/assets/images/newsweek-logo.jpg" bordered spaced rounded />
                <button type="submit" className="btn btn-block btn-success" onClick={this.articlenewsweekSearch}>
                  NEWSWEEK
      </button>
              </div>
            </form>
          </div>



          {/* Article result container */}
          <div className="col-8">
            <h2>{this.state.articles.length
              ? "Article Results"
              : "Search for some articles"}
            </h2>

            <ul className="list-group list-group-flush">
              {this
                .state
                .articles
                .map(article => (
                  <li key={article._id} className="list-group-item d-flex justify-content-between align-items-center">
                    <b> {article.title}</b>
                    {article.description}
                    <span
                      className="badge badge-primary badge-pill"
                      onClick={() => this.saveArticle(article._id)}>Save News</span>
                  </li>
                ))}
            </ul>
          </div>

        </div>
      </div>
      </div>
        )
  }
}

export default Home;