import React, { Component } from "react";
import API from "../utils/API";
import "./home.css";


class Entertainment extends Component {

  state = {
    articles: [],
    q: "",
    begin_date: "",
    end_date: ""
  }



  componentDidMount() {
    this.articlemtvSearchDef();
  }



  articlemtvSearchDef = event => {
    API.mtvSearch({
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

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }



  articlebuzzfeedSearch = event => {
    event.preventDefault();
    API.buzzfeedSearch({
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
  articledailymailSearch = event => {
    event.preventDefault();
    API.dailymailSearch({
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
  articlemtvSearch = event => {
    event.preventDefault();
    API.mtvSearch({
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

  articlepolygonSearch = event => {
    event.preventDefault();
    API.polygonSearch({
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
      {this
        .state
        .articles
        .map(article => (
          <li key={article._id} className="list-group-item d-flex justify-content-between align-items-left"
          id="mylist">
          <div id = 'container'>
            <img src={article.urlToImage} style={{maxHeight: '550px',minWidth:'1200px',
               padding: '10px', marginLeft:'10px'}} />
               <div className="centered"><h1> {article.title} </h1></div>
               </div>
          </li>
        ))}
      </div>

     
      <div className="container-fluid">
        <div className="row">

            {/* Form for article search */}
            <div className="col-md-3 col-sm-12">
              <h2>Search for News</h2>
              <form>
                <div className="form-group">
                <a href="../../public/assets/images/buzzfeed-logo.jpg">
                  <img id="rounded" style={{padding:10}} src="/assets/images/buzzfeed-logo.jpg" onClick={this.articlebuzzfeedSearch}/>
                </a>
                </div>

                <div className="form-group">
                <a href="../../public/assets/images/dailymail-logo.jpg">
                  <img id="rounded" style={{padding:10}} src="/assets/images/dailymail-logo.jpg" onClick={this.articledailymailSearch} />
                </a>
                </div>

                <div className="form-group">
                <a href="../../public/assets/images/mtv-logo.jpg">
                  <img id="rounded" style={{padding:10}} src="/assets/images/mtv-logo.jpg" onClick={this.articlemtvSearch} />
                </a>
                </div>

                <div className="form-group">
                <a href="../../public/assets/images/polygon-logo.png">
                  <img id="rounded" style={{padding:10}} src="/assets/images/polygon-logo.png" onClick={this.articlepolygonSearch}/>
                </a>
                </div>
              </form>
            </div>
          



            {/* Article result container */}
            <div className="col-md-8 col-sm-12">
              <h2>{this.state.articles.length
                ? "Article Results"
                : "Search for some articles"}
              </h2>

              <ul className="list-group list-group-flush">
               {this
                .state
                .articles
                .map(article => (
                  <li key={article._id} className="list-group-item d-flex justify-content-between align-items-left" style={{ backgroundColor: 'black', color: 'white' }}>
                  <img src={article.urlToImage} style={{ height: '120px', width: '160px', padding: '10px', float: 'left', marginBottom: '40px'}} />
                  <h3> {article.title} </h3>
                  <div>
                  <p>{article.description}</p>
                  </div>
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
      
    )
  }
}

export default Entertainment;