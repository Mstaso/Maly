import React from 'react'

class SignUp extends React.Component{
    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        //double check 
        // this.props.submitHandler(this.state)
        this.signUpUser()
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

    render(){
        return(
            <form onSubmit={this.signUpUser}>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}

export default SignUp