import React from 'react'
import Post from './Post'


class User extends React.Component {


    renderPosts = () => {
        this.props.foundUser.posts.map(post => <Post key={post.id} post={post} />)
    }

    render(){
        return(
            this.props.user ? 
            <div>
                <h4>
                    {this.props.user.username}
                </h4>
            </div>
            
            :
            
            <div>
        <h1 class="glow" style={{display: "flex", justifyContent: "center",alignItems: "center", color: "blue"}}> {this.props.foundUser.username[0].toUpperCase() + this.props.foundUser.username.slice(1)}'s Favorites </h1>
            {this.renderPosts()}
        </div>
        )
    }
}

export default User;