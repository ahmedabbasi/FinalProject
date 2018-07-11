import React, { Component } from "react";
import API from "../utils/API";


class Sports extends Component {

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



  articlebbcsportsSearch = event => {
    event.preventDefault();
    API.bbcsportsSearch({
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
  articlefoxsportsSearch = event => {
    event.preventDefault();
    API.foxsportsSearch({
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
  articleespnSearch = event => {
    event.preventDefault();
    API.espnSearch({
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

  articlecricinfoSearch = event => {
    event.preventDefault();
    API.cricinfoSearch({
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
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="row align-items-center justify-content-center my-5">
            {/* <h1>News Explorer with React!</h1> */}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">

            {/* Form for article search */}
            <div className="col-4">
              <h2>Search for News</h2>
              <form>
                <div className="form-group">
                  <img style={{padding:10}} src="/assets/images/bbcsports-logo.jpg" bordered spaced rounded />
                  <button type="submit" className="btn btn-block btn-success" onClick={this.articlebbcsportsSearch}>
                    BBC SPORTS
                  </button>
                </div>

                <div className="form-group">
                  <img style={{padding:10}} src="/assets/images/foxsports-logo.png" bordered spaced rounded />
                  <button type="submit" className="btn btn-block btn-success"  onClick={this.articlefoxsportsSearch}>
                    FOX SPORTS
              </button>
                </div>

                <div className="form-group">
                  <img style={{padding:10}} src="/assets/images/espn-logo.png" bordered spaced rounded />
                  <button type="submit" className="btn btn-block btn-success" onClick={this.articleespnSearch}>
                    ESPN
          </button>
                </div>

                <div className="form-group">
                  <img style={{padding:10}} src="/assets/images/cricinfo-logo.png" bordered spaced rounded />
                  <button type="submit" className="btn btn-block btn-success" onClick={this.articlecricinfoSearch}>
                    CRICINFO
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

export default Sports;