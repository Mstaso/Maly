import React from 'react'
import Post from '../Components/Post'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class PostContainer extends React.Component{


    posts = () => {
        return this.props.postArray.map(post => {return <Post key={post.id} post={post} appClickHandler={this.props.appClickHandler} individualPost={this.props.individualPost} favHandler={this.props.favHandler} user={this.props.user} />})
    }

    render(){
        
        return(
            <>
                {this.props.user ? 
                            <>
                            {this.props.postArray.length === 0 ? <h1>Loading</h1>:
                            <>
                                <BrowserRouter>
                                    <Switch>
                                        <Route exact path="/posts" render={() => {
                                            return(
                                                <div id="columns">
                                                    {this.posts()}
                                                </div>
                                            )
                                        }} />
                                    <Route path='/posts/:id' render={({match}) => {
                                        let id = parseInt(match.params.id)
                                        let foundPost = this.props.postArray.find(post => post.id === id)
                                        return <Post post={foundPost} appClickHandler={this.props.appClickHandler} commentUpdater={this.props.commentUpdater} favHandler={this.props.favHandler} user={this.props.user} />
                                    }}/>
            
                                    </Switch>
                                </BrowserRouter>
                            </>
                            }
                        </>
                    : 

                    <Redirect to="/welcome" />
                
                }
            </>

        )
    }
}


export default PostContainer



//{posts}


