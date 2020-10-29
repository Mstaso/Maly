import React from 'react'
import { NavLink, withRouter, Redirect } from 'react-router-dom'

class Login extends React.Component{
    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    loginHandler = (e) => {
      console.log("been hit")
        // e.preventDefault()
        // this.props.loginUser(this.state)
        // this.props.currentUser ? this.props.history.push('/posts') : alert('no user')
        fetch('http://localhost:3000/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({user: this.state})
        })
        .then(response => response.json())
        .then(response => {
          localStorage.setItem("token", response.jwt)
          this.props.setUser(response.user)
          this.props.user ? this.props.history.push('/posts') : alert('user not found')
          // this.props.fetchPosts()
        })
      }

    render(){
        return(
          <>
          <div class="container-logo">
            <div>
              <div class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
                </div>
                </div>
                <div class="form-container">
                <h1 class="title">Login</h1>
                <form onSubmit={this.loginUser}>
                    <div class="information-container">
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                    </div>
                    <div class="information-container"> 
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                    </div>
                    <input class="loginButton" type="submit" value="Login"/>
                </form>
            </div>
          </>
        )
    }
}

// export default withRouter(Login)

export default Login





    

