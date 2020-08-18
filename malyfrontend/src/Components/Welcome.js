import React from 'react'
import SignUp from './SignUp'
import Login from './Login'

function Welcome(props){
    

    return(
        <>
            {/* <div id="app">
                <falling/>
            </div> */}
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
            <Login submitHandler={props.submitHandler} />
        </>
    )
}

export default Welcome