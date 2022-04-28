import React from "react";
import SearchBar from "./SearchBar";
import '../css/styles.css'

const NoResultsFound = ({ message }) => {
  return (
    <>
      <div className="SearchBarArea">
        <SearchBar />
      </div>
      <h4 className="noresultsfound">
        {message }
      </h4>
    </>
  );
};

export default NoResultsFound;
