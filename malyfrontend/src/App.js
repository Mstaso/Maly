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

  render(){
    return (
      <>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/welcome" component ={Welcome} />
              <Route path="/posts" render={() => <PostContainer postArray={this.state.postArray} appClickHandler={this.appClickHandler} individualPost= {this.state.post} />} />
            </Switch>
          </BrowserRouter>
      </>
    )
  }
}

export default App;
