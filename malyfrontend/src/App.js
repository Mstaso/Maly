import React from 'react';
import './App.css';
import './Containers/PostContainer'
import PostContainer from './Containers/PostContainer';

const API = "http://localhost:3000/posts"


class App extends React.Component {

  state = {
    postArray: []
  }

  fetchPosts = () => {
    fetch(API)
    .then(response => response.json())
    .then(postData => this.setState({ postArray: postData }))
  }

  componentDidMount(){
    this.fetchPosts()
  }

  render(){
    return (
      <div>
        <PostContainer postArray={this.state.postArray} />
      </div>
    )
  }
}

export default App;
