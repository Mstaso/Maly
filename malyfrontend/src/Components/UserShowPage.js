import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

function UserShowPage(props){
    return(
        <>
            {props.user ? 

                <div>
                <h1>User Show Page hahaha</h1>
                </div>
            : 
            <Redirect to="/welcome" />
            }
        </>
    )
}

export default UserShowPage