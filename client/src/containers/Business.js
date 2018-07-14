import React, { Component } from "react";
import API from "../utils/API";
import "./home.css";


class Business extends Component {

  state = {
    articles: [],
    q: "",
    begin_date: "",
    end_date: ""
  }



  componentDidMount() {
    this.articlebloombergSearchDef();
  }



  articlebloombergSearchDef = event => {
    API.businessinsiderSearch({
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



  articlebloombergSearch = event => {
    event.preventDefault();
    API.bloombergSearch({
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
  articlebusinessinsiderSearch = event => {
    event.preventDefault();
    API.businessinsiderSearch({
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
  articleeconomistSearch = event => {
    event.preventDefault();
    API.economistSearch({
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

  articlefinancialtimesSearch = event => {
    event.preventDefault();
    API.financialtimesSearch({
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
            <img src={article.urlToImage} style={{maxHeight: '550px',minWidth:'1280px'}} />
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
                <a href="../../public/assets/images/bloomberg-logo.png">
                  <img id="rounded" style={{padding:10}} src="/assets/images/bloomberg-logo.png" onClick={this.articlebloombergSearch}/>
                </a>
                </div>

                <div className="form-group">
                <a href="../../public/assets/images/businessinsider-logo.png">
                  <img id="rounded" style={{padding:10}} src="/assets/images/businessinsider-logo.png" onClick={this.articlebusinessinsiderSearch} />
                </a>
                </div>

                <div className="form-group">
                <a href="../../public/assets/images/economist-logo.png">
                  <img id="rounded" style={{padding:10}} src="/assets/images/economist-logo.png" onClick={this.articleeconomistSearch} />
                </a>
                </div>

                <div className="form-group">
                <a href="../../public/assets/images/financialtimes-logo.png">
                  <img id="rounded" style={{padding:10}} src="/assets/images/financialtimes-logo.png" onClick={this.articlefinancialtimesSearch}/>
                </a>
                </div>
              </form>
            </div>
          

            {/* Article result container */}
            <div className="col-md-8 col-sm-12">
              <h2>{this.state.articles.length
                ? "Top News"
                : "Top News"}
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

export default Business;