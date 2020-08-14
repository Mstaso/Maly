import React from 'react'

function Search(props){
    return(
        <div class="searchContainer">
            <form>
                <input id="searchInput" placeholder="Search an Item" value={props.searchValue} onChange={props.changeHandler}/>
            </form>
        </div>
    )
}


export default Search 



