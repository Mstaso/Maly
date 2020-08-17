import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PostContainer from './Containers/PostContainer';
import Welcome from './Components/Welcome'
import NewForm from './Components/NewForm'
import Navbar from './Components/Navbar'
import UserShowPage from './Components/UserShowPage'
import SignUp from './Components/SignUp'
import Login from './Components/Login'

const API = "http://localhost:3000/posts"


class App extends React.Component {

  state = {
    postArray: [],
    post: {},
    searchValue: "",
    user: null, 
    favorites: []
  }

  fetchPosts = () => {
    fetch(API)
    .then(response => response.json())
    .then(postData => this.setState({ postArray: postData }))
  }

  componentDidMount(){
    if (this.state.user){
      this.fetchPosts()
    }
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
    .then(response => this.fetchPosts())
  }

  fetchNewPost=(obj)=>{
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(newPostData => this.setState({ postArray: [...this.state.postArray,newPostData] }))
  }

  changeHandler = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  filteredArray = () => {
    console.log(this.state.postArray)
    return this.state.postArray.filter(post => post.category.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }


  // User Post Login 

  fetchNewUser = (userObj) => {
    fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({ user:userObj })
})
  .then(response => response.json())
  .then(data => this.setState({ user:data.user }))
  .then(this.fetchPosts)
  }

  signUpHandler = (userObj) => {
    this.fetchNewUser(userObj)
  }

  loginHandler = (userInfo) => {
    fetch('http://localhost:3000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(response => response.json())
    .then(response => this.setState({user: response}))
    .then(this.fetchPosts)
  }

  favHandler = (favObj) => {
    fetch("http://localhost:3000/favorites", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        favorite: {
          user_id: this.state.user.id,
          post_id: favObj.id
        }
      })
    })
    .then(response => response.json())
    .then(favData => this.setState({ favorites:favData }))
  }


  render(){
    return (
      <>
          <BrowserRouter>
            <Navbar user={this.state.user} searchValue={this.state.searchValue} changeHandler={this.changeHandler} />
            <Switch>
              <Route path="/login" render={() => <Login submitHandler={this.loginHandler} />} />
              <Route path="/signup" render={() => <SignUp submitHandler={this.signUpHandler} />} />
              <Route path="/welcome" render={() => <Welcome submitHandler={this.loginHandler} />} />
              <Route path="/newform" render={() => <NewForm user={this.state.user} fetchNewPost={this.fetchNewPost} />} />
              <Route path="/profile" render={() => <UserShowPage user={this.state.user} />} />
              <Route path="/posts" render={() => <PostContainer favHandler={this.favHandler} user={this.state.user} postArray={this.filteredArray()} appClickHandler={this.appClickHandler} individualPost= {this.state.post} commentUpdater={this.commentUpdater}/>} />
            </Switch>
          </BrowserRouter>
      </>
    )
  }
}

export default App;

