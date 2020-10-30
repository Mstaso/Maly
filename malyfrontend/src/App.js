import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PostContainer from './Containers/PostContainer';
import UserContainer from './Containers/UserContainer';
import NewForm from './Components/NewForm'
import Navbar from './Components/Navbar'
import UserShowPage from './Components/UserShowPage'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import { Redirect, NavLink } from 'react-router'

const API = "http://localhost:3000/posts"


class App extends React.Component {

  state = {
    postArray: [],
    post: {},
    searchValue: "",
    user: null, 
    users: [],
    favorites: []
  }

  fetchPosts = () => {
    fetch(API)
    .then(response => response.json())
    .then(postData => {
      this.setState({ postArray: postData })
    })
  }

  componentDidMount(){
    this.fetchUsers()
    this.fetchPosts()
    const token = localStorage.getItem("token")
  if (token) {
    fetch('http://localhost:3000/profile', {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`},
    })
    .then(resp => resp.json())
    .then(data => {
      this.setUser(data.user)
      let setFavorites = []
      this.state.user.favorites.forEach(favorite => setFavorites.push(favorite))
      this.setState({favorites: setFavorites})        
    })
  } 
  }

  appClickHandler = (post_obj) => {
    this.setState({ post:post_obj })
  }

  commentUpdater = (id, content) => {

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
    console.log(obj)
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(newPostData => 
      {
        console.log(newPostData)
        this.setState({ postArray: [...this.state.postArray,newPostData] })
      })
  }

  changeHandler = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  filteredArray = () => {
    return this.state.postArray.filter(post => post.category.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }


  // User Post Login 

  fetchNewUser = (userObj) => {
    console.log(userObj)
    fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({ user:userObj })
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    this.setState({ user:data.user })
    this.fetchPosts()
  })
  }

  fetchUsers = () => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(response => {
      this.setState({users: response})
    })
  }

  

  signUpHandler = (userObj) => {
    this.fetchNewUser(userObj)
  }

  setUser = (user) => {
    this.setState({ user:user })
  }

  favHandler = (post) => {
    // console.log(post, this.state.user)
    // let updatedUser = this.state.user.posts.push(post)
    // console.log(updatedUser)
    // this.setState({user: updatedUser})

    let favObj = {
      post_id: post.id,
      user_id: this.state.user.id
    }
    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        },
        body: JSON.stringify({ favorite: favObj })
      })
        .then(response => response.json())
        .then(response => {
          let newFavorites = [...this.state.favorites, response]
          this.setState({favorites: newFavorites})
          // let updatedUser = this.state.user.posts.push(response)
          // console.log(updatedUser)
          // this.setState({user: updatedUser})
        })

    // let newFavArray = [...this.state.postArray]
    // let foundObj = newFavArray.find(post => post.id === id)
    // foundObj.favorite = !foundObj.favorite
    // this.setState({ postArray: newFavArray })
    
  }

  deleteFavorite = (post) => {
    console.log(post)
   let favObj = this.state.favorites.find(favorite => favorite.post_id === post.id)
   console.log(favObj)
    fetch(`http://localhost:3000/favorites/${favObj.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log('Removed from favoites')
          let filteredFavorites = this.state.favorites.filter(favorite => favorite.post_id !== post.id)
          this.setState({favorites: filteredFavorites})
          console.log(this.state.favorites)
        })
  }


  filteredPosts = () => {
    return this.state.postArray.filter(post => post.favorite)
  }


  render(){
    return (
      <>
          <BrowserRouter>
            <Navbar user={this.state.user} searchValue={this.state.searchValue} changeHandler={this.changeHandler} setUser={this.setUser}/>
            <Switch>
            <Route
                exact
                path="/"
                render={() => {
                    return (               
                      <Redirect to="/posts" /> 
                    )
                }}
              />
              {/* <Route path="/login" render={() => <Login setUser={this.setUser}  users={this.state.users} user={this.state.user} fetchPosts={this.fetchPosts} />} /> */}
              <Route path="/login" render={(RouterProps) => <Login {...RouterProps} setUser={this.setUser}  users={this.state.users} user={this.state.user} fetchPosts={this.fetchPosts} />} />
              <Route path="/signup" render={(RouterProps) => <SignUp {...RouterProps} submitHandler={this.signUpHandler} setUser={this.setUser} user={this.state.user} />} />
              {/* <Route path="/welcome" render={() => <Welcome submitHandler={this.loginHandler} />} /> */}
              <Route path="/newform" render={() => <NewForm user={this.state.user} fetchNewPost={this.fetchNewPost} />} />
              <Route path="/profile" render={() => <UserShowPage user={this.state.user} favArray={this.filteredPosts()} appClickHandler={this.appClickHandler} />} />
              <Route path="/posts" render={() => <PostContainer favHandler={this.favHandler} user={this.state.user} postArray={this.filteredArray()} appClickHandler={this.appClickHandler} individualPost= {this.state.post} deleteFavorite={this.deleteFavorite} commentUpdater={this.commentUpdater}/>} />
              <Route path="/users" render={() => <UserContainer user={this.state.user} fetchUsers={this.fetchUsers} users={this.state.users}/>} />
            </Switch>
          </BrowserRouter>
      </>
    )
  }
}


export default App;

