import React, { Component } from "react";
import API from "../utils/API";
import "./home.css";


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
      <div class="jumbotron" id="sports">
  <video id="bg-video" autoplay="true" loop="loop" preload="metadata" muted="muted">
    <source src="https://www.videvo.net/videvo_files/converted/2015_08/preview/Track_and_Field_2.mp478173.webm" type="video/webm" />
  </video>
        

      <div className="container-fluid">
        <div className="row">

            {/* Form for article search */}
            <div className="col-md-4 col-sm-12">
              <h2>Sports News</h2>
              <form>
                <div className="form-group">
                <a href="../../public/assets/images/bbcsports-logo.jpg">
                  <img id="rounded" style={{padding:10}} src="/assets/images/bbcsports-logo.jpg" bordered spaced rounded onClick={this.articlebbcsportsSearch}/>
                  </a>
                </div>

                <div className="form-group">
                <a href="../../public/assets/images/foxsports-logo.png">
                  <img id="rounded" style={{padding:10}} src="/assets/images/foxsports-logo.png" onClick={this.articlefoxsportsSearch}/>
                </a>
                </div>

                <div className="form-group">
                <a href="../../public/assets/images/espn-logo.png">
                  <img id="rounded" style={{padding:10}} src="/assets/images/espn-logo.png" onClick={this.articleespnSearch}/>
                </a>
                </div>

                <div className="form-group">
                <a href="../../public/assets/images/cricinfo-logo.png">
                  <img id="rounded" style={{padding:10}} src="/assets/images/cricinfo-logo.png" onClick={this.articlecricinfoSearch}/>
                </a>
                </div>
              </form>
            </div>



            {/* Article result container */}
            <div className="col-md-8 col-sm-12">
              <h2>{this.state.articles.length
                ? "Top Stories"
                : "Top Stories"}
              </h2>

              <ul className="list-group list-group-flush">
              {this
                .state
                .articles
                .map(article => (
                  <li key={article._id} className="list-group-item d-flex justify-content-between align-items-left" style={{backgroundColor:'black', color:'white',}}>
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

export default Sports;