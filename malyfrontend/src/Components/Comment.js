import React from 'react'

function Comment(props){
    return(
        <div id="individualComment">
        {props.comment.content}
        </div>
    )
}

export default Comment


