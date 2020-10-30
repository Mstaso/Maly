import React from 'react'
import Post from '../Components/Post'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class PostContainer extends React.Component{


    posts = () => {
        return this.props.filteredArray.map(post => {return <Post key={post.id} post={post} user={this.props.user} />})
    }

    render(){
        return(
            <>
                
                            <>
                            {this.props.filteredArray.length === 0 ? <h1>Loading</h1>:
                            <>
                                <BrowserRouter>
                                    <Switch>
                                        <Route path='/posts/:id' render={({match}) => {
                                            let id = parseInt(match.params.id)
                                            let foundPost = this.props.filteredArray.find(post => post.id === id)
                                            return <Post foundPost={foundPost} deleteFavorite={this.props.deleteFavorite} commentUpdater={this.props.commentUpdater} favoritePosts={this.props.favoritePosts} favHandler={this.props.favHandler} user={this.props.user} />
                                        }}/>
                                        <Route exact path="/posts" render={() => {
                                            return(
                                                <div id="columns">
                                                    {this.posts()}
                                                </div>
                                            )
                                        }} />
            
                                    </Switch>
                                </BrowserRouter>
                            </>
                            }
                        </>
                    
                
                
            </>

        )
    }
}


export default PostContainer



//{posts}


