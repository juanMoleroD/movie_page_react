import React from "react";

const Movie = ({id, name, url}) => {
    return(
        <li id={id} ><a href={url}>{name}</a></li>
    )
} 

export default Movie;