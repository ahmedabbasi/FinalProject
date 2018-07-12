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

      <div>
          <div className="jumbotron">
        </div>
     
      <div className="container-fluid">
        <div className="row">

            {/* Form for article search */}
            <div className="col-md-4 col-sm-12">
              <h2>Search for News</h2>
              <form>
                <div className="form-group">
                  <img style={{padding:10}} src="/assets/images/bloomberg-logo.png" bordered spaced rounded onClick={this.articlebloombergSearch}/>
                 
                </div>

                <div className="form-group">
                  <img style={{padding:10}} src="/assets/images/businessinsider-logo.png" bordered spaced rounded onClick={this.articlebusinessinsiderSearch} />
         
                </div>

                <div className="form-group">
                  <img style={{padding:10}} src="/assets/images/economist-logo.png" bordered spaced rounded  onClick={this.articleeconomistSearch} />
   
                </div>

                <div className="form-group">
                  <img style={{padding:10}} src="/assets/images/financialtimes-logo.png" bordered spaced rounded onClick={this.articlefinancialtimesSearch}/>

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
                  <li key={article._id} className="list-group-item d-flex justify-content-between align-items-left" style={{backgroundColor:'black', color:'white'}}>
                    <img src={article.urlToImage} style={{height:'100px', width:'100px',padding:'10px', float:'left'}}/>
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

export default Business;