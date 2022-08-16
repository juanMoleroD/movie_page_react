import React from "react";
import Movie from "./Movie";

const MovieList = ({movies}) => {

    const movieNodes = movies.map( (movie, index) => {
        return <Movie key={index} id={movie.id} name={movie.name} url={movie.url} />
    });

    return (
        <>
            {movieNodes}
        </>
    )
}

export default MovieList;