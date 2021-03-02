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
        e.preventDefault()
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
          console.log(response)
          localStorage.setItem("token", response.jwt)
          this.props.setUser(response.user)
          this.props.user ? this.props.history.push('/posts') : alert('user not found')
          // this.props.fetchPosts()
        })
      }

      clickHandler = () => {
        this.props.history.push("/signup")
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
                <form onSubmit={this.loginHandler}>
                    <div class="information-container">
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                    </div>
                    <div class="information-container"> 
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                    </div>
                    <input class="loginButton" type="submit" value="Login"/>
                </form>
                <p class="switch" onClick={this.clickHandler}> Don't have an account?</p>
                    
            </div>
          </>
        )
    }
}

// export default withRouter(Login)

export default Login





    

