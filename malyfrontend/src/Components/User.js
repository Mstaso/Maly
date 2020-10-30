import React from 'react'
import Post from './Post'


class User extends React.Component {


    renderPosts = () => {
        let checkFavs = []
        this.props.favorites.forEach(favorite => checkFavs.push(favorite.post_id))
        console.log(checkFavs)
        let favPostsToRender = []
        this.props.foundUser.posts.forEach(post => checkFavs.includes(post.id) ? favPostsToRender.push(post) : console.log('not in user favorites'))
        console.log(favPostsToRender)
        // console.log(this.props.favorites)
       let userFavorites = favPostsToRender.map(post => <Post key={post.id} post={post} />)
       return userFavorites
    }

    renderFavPosts = () => {
        let userFavorites = this.props.favoritePosts.map(post => <Post key={post.id} post={post} />)
        return userFavorites
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
        <div id="columns">
            {this.renderFavPosts()}
        </div>
        </div>
        )
    }
}

export default User;