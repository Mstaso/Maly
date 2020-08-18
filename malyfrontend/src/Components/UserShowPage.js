import React from 'react'
import Favorite from './Favorite.js'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class UserShowPage extends React.Component{
    render(){
        
        let favArray = this.props.favArray.map(fav => <Favorite key={fav.id} fav={fav} />)

        return(
            <>
                {this.props.user ? 

                    <div>
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