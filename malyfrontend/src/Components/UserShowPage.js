import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class UserShowPage extends React.Component{
    render(){
        console.log("Fav Array from User Page: ", this.props.favArray)
        return(
            <>
                {this.props.user ? 

                    <div>
                    {/* <h1>Welcome {this.props.user.user.username}!!!</h1> */}
                    </div>
                : 
                <Redirect to="/welcome" />
                }
            </>
        )
    }
}

export default UserShowPage