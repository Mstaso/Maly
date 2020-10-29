import React from 'react'

class SignUp extends React.Component{
    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    signUpUser = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ user: this.state })
    })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem("token", response.jwt)
        this.props.setUser(response.user)
        this.props.user ? this.props.history.push('/posts') : alert('user not found')
      })
    }

    clickHandler = () => {
        this.props.history.push("/login")
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
                <h1 class="title">Sign Up</h1>
                <form onSubmit={this.signUpUser}>
                    <div class="information-container">
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                    </div>
                    <div class="information-container"> 
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                    </div>
                    <input class="loginButton" type="submit" value="Sign Up"/>
                </form>
                <p onClick={this.clickHandler}>
                    Already have an account?
                    </p>
            </div>
          </>
        )
    }
}

export default SignUp