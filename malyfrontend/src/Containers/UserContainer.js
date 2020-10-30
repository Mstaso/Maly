import React from 'react'
import {Route, Switch} from 'react-router-dom'
import User from '../Components/User'

class UserContainer extends React.Component {

    componentDidMount(){
       
    }

    render() {
        let users = this.props.users.map(user => <User key={user.id} user={user}/>)
        return(
            this.props.users.length === 0 ? <h1>Loading </h1> :
            <div>
                 <Switch>
                <Route path='/users/:id' render={({ match }) => {
                    let id = parseInt(match.params.id)
                    // see if id is in state of users, will not be if user just signed up
                    let checkUser = this.props.users.find(user => user.id === id)
                    let foundUser = {}
                    // if unable to find user, use ID of the currently logged in User
                    checkUser === undefined ? foundUser = this.props.user : foundUser = checkUser
                    
                    return (
                        
                        <User foundUser={foundUser} favoritePosts={this.props.favoritePosts}/>
                       
                    )
                }}/>
                <Route path="/users" render={() => {

                    return (
                        <>
                            {
                                this.props.users.length === 0 ? <h1>Loading</h1> :
                                <>
                                {users}
                                </>
                            }
                        
                        
                        </>
                    )
                }} />
                </Switch>
            </div>
        )
    }
}

export default UserContainer;