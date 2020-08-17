import React from 'react'
import SignUp from './SignUp'
import Login from './Login'

function Welcome(props){

    return(
        <div>
            {/* <SignUp /> */}
            <Login submitHandler={props.submitHandler} />
        </div>
    )
}

export default Welcome