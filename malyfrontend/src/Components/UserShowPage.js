import React from 'react'
import Favorite from './Favorite.js'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class UserShowPage extends React.Component{
    render(){
        console.log("Appclickhandler in usershowpage: ", this.props.appClickHandler)
        let favArray = this.props.favArray.map(fav => <Favorite key={fav.id} fav={fav} appClickHandler={this.props.appClickHandler} />)

        return(
            <>
                {this.props.user ? 

                    <div>
                        <h1 class="glow" style={{display: "flex", justifyContent: "center",alignItems: "center", color: "blue"}}>Favorites</h1>
                        {favArray}
                    </div>
                : 
                <Redirect to="/login" />
                }
            </>
        )
    }
}

export default UserShowPage
