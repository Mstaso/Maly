import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PostContainer from './Containers/PostContainer';
import Welcome from './Components/Welcome'
import Navbar from './Components/Navbar'

const API = "http://localhost:3000/posts"


class App extends React.Component {

  state = {
    postArray: [],
    post: {}
  }

  fetchPosts = () => {
    fetch(API)
    .then(response => response.json())
    .then(postData => this.setState({ postArray: postData }))
  }

  componentDidMount(){
    this.fetchPosts()
  }

  appClickHandler = (post_obj) => {
    this.setState({ post:post_obj })
  }

  commentUpdater = (id, content) => {
    console.log(content, 'in app')

    let newComment = {
      content: content,
      post_id: id,
      user_id: 1
    }
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newComment)
    })
    .then(response => response.json())
    .then(response => this.addCommentToShowPage())
  }

  addCommentToShowPage = () => {
    this.setState({post: this.state.post})
  }

  render(){
    console.log(this.state.post)
    return (
      <>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/welcome" component ={Welcome} />
              <Route path="/posts" render={() => <PostContainer postArray={this.state.postArray} appClickHandler={this.appClickHandler} individualPost= {this.state.post} commentUpdater={this.commentUpdater}/>} />
            </Switch>
          </BrowserRouter>
      </>
    )
  }
}

export default App;
