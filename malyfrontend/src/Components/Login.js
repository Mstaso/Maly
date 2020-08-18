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

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        // this.props.history.push("/posts")
        return <Redirect to="/posts" />
    }

    render(){
        return(
            <div class="form-container">
                <h1 class="title">Login</h1>
                <form onSubmit={this.submitHandler}>
                    <div class="information-container">
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                    </div>
                    <div class="information-container"> 
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                    </div>
                    <input class="loginButton" type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

// export default withRouter(Login)

export default Login





    

