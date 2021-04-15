import React, { useContext } from 'react'
import { MovieContext } from "../context/context";
import MovieDetails from "./MovieDetails";
import "./MovieData.css";

const MovieData = () => {
    const value = useContext(MovieContext);
    console.log(value);
    return value ? <MovieDetails /> : <div> Search Some Movies! </div>;
}


export default MovieData
