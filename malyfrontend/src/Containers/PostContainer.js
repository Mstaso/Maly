import React from 'react'
import Post from '../Components/Post'

function PostContainer(props){

    let posts = props.postArray.map(post => {return <Post key={post.id} post={post} />})

    return(
        <div>
            
            {posts}
           
        </div>
    )
}

export default PostContainer