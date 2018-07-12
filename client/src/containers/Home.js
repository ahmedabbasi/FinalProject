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
      <div className="jumbotron">
      </div>




      <div className="container-fluid">
        <div className="row">

          {/* Form for article search */}

          <div className="form-group">

        
            <div className="col-md-3 col-sm-12">
              <h2>Select your Channel</h2>
              <form>
                <div className="form-group" style={{ border: '10px' }}>
                <a href="../../public/assets/images/cnn-logo.png" onClick={this.articlecnnSearch}>
                <img id="rounded" src= {{ padding: 10 }} src="/assets/images/cnn-logo.png" onClick={this.articlecnnSearch} />
                  </a>
                </div>



                <div className="form-group" style={{ border: '10px' }}>
                <a href="../../public/assets/images/fox-logo.png" onClick={this.articlefoxSearch}>
                <img id="rounded" style={{ padding: 10 }} src="/assets/images/fox-logo.png" onClick={this.articlefoxSearch} />
                </a>
                </div>

                <div className="form-group" style={{ border: '10px' }}>
                <a href="../../public/assets/images/msnbc-logo.jpg" onClick={this.articlemsnbcSearch}>
                <img id="rounded" style={{ padding: 10 }} src="/assets/images/msnbc-logo.jpg" onClick={this.articlemsnbcSearch} />
                  </a>
                </div>

                <div className="form-group" style={{ border: '10px' }}>
                <a href="../../public/assets/images/newsweek-logo.jpg" onClick={this.articlenewsweekSearch}>
                <img id="rounded" style={{ padding: 10 }} src="/assets/images/newsweek-logo.jpg" onClick={this.articlenewsweekSearch} />
                  </a>
                </div>

              </form>
            </div>



            {/* Article result container */}
            <div className="col-md-8 col-sm-12" >
              <h2>{this.state.articles.length
                ? "Article Results"
                : "Search for some articles"}
              </h2>

              <ul className="list-group list-group-flush">
                {this
                  .state
                  .articles
                  .map(article => (
                    <li key={article._id} className="list-group-item d-flex justify-content-between align-items-left" style={{ backgroundColor: 'black', color: 'white', }}>
                      <img src={article.urlToImage} style={{ height: '100px', width: '100px', padding: '10px', float: 'left' }} />
                      <h4> {article.title} </h4>
                      {article.description}
                      <button type="submit" className="btn btn-block btn-success" onClick={() => this.saveArticle(article._id)}>
                        Save News
                    </button>
                    </li>
                  ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      </div>
                )
                
  }
}

export default Home;