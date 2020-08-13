import React from 'react'
import Comment from './Comment'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

class Post extends React.Component{


    comments = () => {
        return this.props.post.comments.map(comment => {return <Comment key={comment.id} comment={comment} />})
    }

    postClickHandler = () => {
        this.props.appClickHandler(this.props.post)
    }

    render(){
        return(
            <NavLink to={`/posts/${this.props.post.id}`}>
            <div onClick={this.postClickHandler} >
                <figure>
                    <img src={this.props.post.image} />
                <figcaption>
                    <p>{this.props.post.description}</p>
                </figcaption>
                </figure>
            </div>
            </NavLink>
        ) 
    }
}

export default Post


/*
Content for the show page of post 

<h1>{this.props.post.name}</h1>
<h3>{this.props.post.category}</h3>
<p>{this.props.post.description}</p>
<h4>{this.props.post.brand}</h4>
<h4>{this.props.post.rating}</h4>
<h4>{this.props.post.likes}</h4>
<p>{this.comments()}</p>


*/