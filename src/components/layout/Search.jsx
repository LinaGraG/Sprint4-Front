import React from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBar, SearchBarButton, SearchBarInput } from "./ArtelakNavbarStyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Search = () => {
  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();

    if(keyword.trim()){
        navigate(`/search/${keyword}`)
    }
    else{
        navigate("/")
    }
  }

  return (
    <>
      <SearchBar onSubmit={searchHandler}>
        <SearchBarInput
          type="text"
          placeholder="Buscar productos (e.j. queso)"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <SearchBarButton type="submit" onClick={searchHandler}>
          <FaSearch size={25} />
        </SearchBarButton>
      </SearchBar>
    </>
  );
};

export default Search;
