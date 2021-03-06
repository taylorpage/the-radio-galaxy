import React from 'react';
import axios from 'axios';

const path = 'http://127.0.0.1:3000';

export default class Articles extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      description: '',
      title: '',
      articles: [],
      pages: [[]],
      errors: [],
      articlePage: 0
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  handleChange() {
    this.setState({
      url: document.getElementById('article-url').value,
      title: document.getElementById('article-title').value,
      description: document.getElementById('article-description').value,
    });
  }

  getArticles() {
    const context = this;
    axios.get('/articles/all', data => {
      return data;
    }).then(function(data) {
      context.setState({
        articles: data.data.reverse()
      })
    }).then(() => {
      this.getPages();
    })
  }

  getPages() {
    const context = this;
    let results = [];
    context.state.articles.reduce((memo, item, i) => {
      memo.push(item);
      if ( (i + 1) % 10 === 0 || i === context.state.articles.length - 1 ) {
        results.push(memo);
        memo = [];
      }
      return memo;
    }, []);
    context.setState({
      pages: results
    })
  }

  changeArticlePage(page) {
    this.setState({
      articlePage: page
    })
  }

  uploadArticle() {
    let req = {
      url: this.state.url,
      description: this.state.description,
      title: this.state.title
    }
    if (!sessionStorage.getItem('user_email')) {
      window.location = `${path}/login`;
    }

    if ( req.url && req.description ) {
      if ( req.url.substring(0, 4) === 'http') {
        axios.post('/articles/create', req, data => {
        }).then(this.getArticles.bind(this));

        document.getElementById('article-url').value = '';
        document.getElementById('article-description').value = '';
        document.getElementById('article-title').value = '';

        this.setState({
          errors: [],
          url: '',
          description: '',
          title: ''
        })
      } else {
        this.setState({
          errors: [{ text: 'Please use valid url' }]
        })
      }
    } else {
      this.setState({
        errors: [{ text: 'Please fill out all fields' }]
      })
    }
  }

  thumbs(status, url) {
    let email = sessionStorage.getItem('user_email')
    if (email) {
      let firstRequest = {
        status: status,
        url: url
      }

      axios.post('/user/getUser', { email: email }, data => {
        return data.data
      }).then(data => {
        let foundLink = false;
        data.data.votes.forEach(link => {
          if (link === url) {
            foundLink = true;
          }
        })
        if (!foundLink) {
          let secondRequest = {
            email: email,
            update: data.data.votes.concat(url)
          }
          axios.post('/user/updateVotes', secondRequest, (data) => {
          }).then(() => {
            axios.post('/articles/thumbs', firstRequest, data => {
            }).then(() => {
              this.getArticles();
            })
          })
        } else {
          this.setState({
            errors: [{ text: 'Already voted'}]
          })
          setTimeout(() => {
            this.setState({
              errors: []
            })
          }, 2000)
        }
      })
    } else {
      window.location = `${path}/login`;
    }
  }

  myFunction() {
    document.getElementById("myArticleDropdown").classList.toggle("show");
  }

  render() {
    return (
      <div className="container-fluid">
        <div> {
          this.state.errors.map(error => {
            return ( <div className="error"> { error.text } </div> )
          })
        } </div>
        <div className="row dropdown dropelem">
          <button onClick={this.myFunction.bind(this) } className="dropbtn dropelem">Submit Article</button>
          <div id="myArticleDropdown" className="dropdown-content dropelem text-lg-center">
          <div className="col-lg-12 upload dropelem">
            <input onChange={ this.handleChange.bind(this) }
                   id="article-title"
                   type="text"
                   className="dropelem"
                   placeholder="Headline">
            </input>
          </div>
          <div className="col-lg-12 upload dropelem">
            <input onChange={ this.handleChange.bind(this) }
                   id="article-description"
                   type="text"
                   className="dropelem"
                   placeholder="Description">
            </input>
          </div>
          <div className="col-lg-12 upload dropelem">
            <input onChange={ this.handleChange.bind(this) }
                   id="article-url"
                   type="text"
                   className="dropelem"
                   placeholder="Article Url">
            </input>
          </div>
          <div className="col-lg-12 upload dropelem">
            <button onClick={ this.uploadArticle.bind(this) }>Upload</button>
          </div>
          </div>
        </div>
        <h1 className="space">ARTICLES</h1>
        <div> {
          this.state.pages[this.state.articlePage].map(article => {
            return(
              <div className="col-lg-12">
                <div className="row submission">
                  <div className="col-xs-1 text-xs-center thumbs">
                    <div onClick={ this.thumbs.bind(this, 'up', article.url) }
                         className="arrow">▲
                    </div>
                    <div>{ article.thumbs }</div>
                    <div onClick={ this.thumbs.bind(this, 'down', article.url) }
                         className="arrow">▼
                    </div>
                  </div>
                  <div className="col-lg-11">
                    <a href={ article.url }><h5>{ article.title }</h5></a>
                    <p className="article-description">{ article.description }</p>
                  </div>
                </div>
              </div>
            )
          })
        } </div>
        <div className="col-lg-12"> {
          this.state.pages.map((item, i) => {
            return (
              <button className="article-pages"
                      onClick={ this.changeArticlePage.bind(this, i) }>{ i + 1 }
              </button>
            )
          })
        } </div>
      </div>
    )
  }
}