import React from "react";
import "./SearchBox.css";

interface SearchBoxProps {
    onInputCharge: (inputValue: string) => void;
}

const SearchBox = ({onInputCharge}: SearchBoxProps) => {   
    return (
        <input 
            onChange={(e) => {
                console.log(e.target.value);
                onInputCharge(e.target.value);
            }}
            className="search"
            type="search"
            placeholder="Search Pokemons"
        />
    );
};

export default SearchBox;
