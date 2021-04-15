import React, { useContext } from 'react'
import { SearchContext } from '../context/context'
import SearchList from "./SearchList"
import "./Search.css"


const Search = () => {
    // let fromAppComponent = useContext(SearchContext);
    // console.log(fromAppComponent);

    const { handleOnChange, movieSearchTitle, isSearching } = useContext(SearchContext);

    return (
        <div className="search">
            <input 
            type="search" 
            name="movie-search"
            value={movieSearchTitle}
            onChange={(e) => handleOnChange(e.target.value)}
            />
            {movieSearchTitle !== "" && isSearching && <SearchList />}
        </div>
    )
}

export default Search
