import React from 'react'
import Comment from './Comment'
import { NavLink } from 'react-router-dom'


class Post extends React.Component{

state = {
    content: '',
    favorite: false
}

    componentDidMount(){
        this.favBool()
    }
    commentHandler = (e) => {
        e.preventDefault()
        let id = e.target.id
        this.props.commentUpdater(id, this.state.content)
        this.setState({ content: " " })
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    
    comments = () => {
        return this.props.foundPost.comments.map(comment => {return <Comment key={comment.id} comment={comment} />})
    }

    favHandler = (e) => {
        if(this.state.favorite === false){
            this.props.favHandler(this.props.post)
        } else {
            this.props.deleteFavorite(this.props.post)
        }
        this.setState({favorite: !this.state.favorite})
        // console.log(e.target.text)
        // if(e.target.text === "Fav ❤️"){
        //     // this.props.favHandler(this.props.post)
        //     this.setState({favorite: true})
        // } else {
        //     this.setState({favorite: false})
        // }
    }

    favBool = () => {
        if (this.props.foundUser){
            let isFavorited = this.props.foundUser.posts.find(post => post.id === this.props.post.id)
            if (isFavorited) {
                this.setState({favorite: true})
            } 
        }
      }

                            

    render(){
        console.log(this.props, 'from post')
        return(
            <>
            {this.props.post ? 
                
                <NavLink to={`/posts/${this.props.post.id}`}>
                <div onClick={this.postClickHandler} >
                    <figure>
                        <img src={this.props.post.image} />
                    <figcaption>
                        <p>{this.props.post.name}</p>
                    </figcaption>
                    </figure>
                </div>
                </NavLink>
                
                : 
                
                <div  class="float-container" className="modal_content">
                        <div class="float-child">
                            <img id="postImg" src={this.props.foundPost.image} />
                            <h4>Rating: {this.props.foundPost.rating}/5 </h4>
                            <div>
                                    <div class="wrapper">
                                    <div class="commentBoxfloat">
                                    <form id="cmnt" id={this.props.foundPost.id} onSubmit={this.commentHandler}>
                                        <fieldset id="commentFieldset">
                                        <div class="form_grp">
                                            <label>comment</label>
                                            <textarea id="userCmnt" placeholder="Write your comment here." name='content' value={this.state.content} onChange={this.changeHandler} ></textarea>        
                                        </div>
                                        <div class="form_grp">
                                        <button type="submit">Add Comment</button>
                                        </div>
                                        </fieldset>
                                    </form>  
                                    </div> 
                                    <div id="cmntContr">{this.comments()}</div> 
                                    </div>
                            </div>
                        </div>
                        <div class="float-child">
                            <h1 style={{display: 'flex', justifyContent: 'center'}}>
                                {this.props.foundPost.name}
                            </h1>
                            <br/>
                            <h3>Furniture Category: {this.props.foundPost.category}</h3>
                            <h4>Brand: {this.props.foundPost.brand}</h4>
                            <p>{this.props.foundPost.description}</p>
                            {this.state.favorite ? 
                            <button onClick={this.favHandler} > Unfav 💔 </button>
                            :
                            <button onClick={this.favHandler} > Fav ❤️  </button>
                            } 
                            
                            
                         
                        </div> 
                </div>


            }
            </>
        ) 
    }
}

export default Post


{/* <div class="wrapper">
<div class="commentBoxfloat">
  <form id="cmnt">
    <fieldset>
      <div class="form_grp">
        <label>comment</label>
        <textarea id="userCmnt" placeholder="Write your comment here. You can Edit and Delete options. Just Hover in Your comment, you see the both buttons"></textarea>        
      </div>
      <div class="form_grp">
      <button type="button" id="submit">Submit</button>
      </div>
    </fieldset>
  </form>  
</div> 
  <div id="cmntContr"></div>
 </div> */}
