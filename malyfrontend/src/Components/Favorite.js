import React from 'react'

function Favorite(props){
    console.log(props)
    return(
       <>
       <h1 style={{display: "flex", justifyContent: "center",alignItems: "center"}}>Favorites</h1>
        <div id="columns" >
        <figure>
            <img src={props.fav.image} />
        <figcaption>
            <p>{props.fav.description}</p>
        </figcaption>
        </figure>
        </div>
        </>
   
    )
}

export default Favorite