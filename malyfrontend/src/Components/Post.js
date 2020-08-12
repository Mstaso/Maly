import React from 'react'
import Comment from './Components/Comment'

const API = "http://localhost:3000/comments"

class Post extends React.Component{
    
    state = {
        commentArray: []
    }

    fetchComments = () => {
        fetch(API)
        .then(response => response.json())
        .then(commentData => this.setState({ commentArray:commentData }))
    }

    componentDidMount(){
        this.fetchComments()
    }

    render(){
        return(
            <div className="post">
                <h1>{this.props.post.name}</h1>
                <h3>{this.props.post.category}</h3>
                <img src={this.props.post.image} />
                <p>{this.props.post.description}</p>
                <h4>{this.props.post.brand}</h4>
                <h4>{this.props.post.rating}</h4>
                <h4>{this.props.post.likes}</h4>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Post