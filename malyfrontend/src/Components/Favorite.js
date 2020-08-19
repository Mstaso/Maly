import React from 'react'
import { NavLink } from 'react-router-dom'

class Favorite extends React.Component{

    favClickHandler = () => {
        this.props.appClickHandler(this.props.fav)
    }


    render(){
        return(
        <NavLink to={`/posts/${this.props.fav.id}`}>
            <div className="floatybox" onClick={this.favClickHandler} >
                <div id="columns" >
                <figure>
                    <img src={this.props.fav.image} />
                <figcaption>
                    <p>{this.props.fav.description}</p>
                </figcaption>
                </figure>
                </div>
            </div>
        </NavLink>
    
        )
    }
}

export default Favorite