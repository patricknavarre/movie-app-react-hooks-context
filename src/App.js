import { useState } from "react";
import Search from "./Search/Search";
import { SearchContext, MovieContext } from "./context/context"
import MovieData from "./MovieData/MovieData";
import './App.css';

let OMDB_API = "81710a43"

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [movieArray, setMovieArray] = useState([])
  const [isSearching, setIsSearching] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);

  async function handleOnChange(value) {
    setSearchValue(value);

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${OMDB_API}&s=${value}`
      )

    const data = await response.json();
    console.log(data);
    setMovieArray(data.Search || [] );
    setIsSearching(true);
  }
  
  const searchContextValueObj = {
    movieSearchTitle: searchValue, 
    handleOnChange,
    OMDB_API,
    movieArray,
    isSearching,
    handleMovieSelected,
  }

  function handleMovieSelected(movieSelected) {
    console.log(movieSelected);
    setMovieSelected(movieSelected);
    setIsSearching(false);
  }
  
  
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>

    <SearchContext.Provider value={searchContextValueObj}>
    <Search />
    </SearchContext.Provider>

    <MovieContext.Provider value={movieSelected}>
    <MovieData />
    </MovieContext.Provider>
    
    </div>
  );
}

export default App;
