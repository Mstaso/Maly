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
                    let foundUser = this.props.users.find(user => user.id === id)
                    return (
                        
                        <User foundUser={foundUser} />
                       
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