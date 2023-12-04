import React from "react";
import "./Pokedex.css"; 
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBox from "../SearchBox/SearchBox";
import Pokelist from "../Pokelist/Pokelist";
import { PokemonSchema } from "../Types/PokemonSchema";

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    selectedPokemons: PokemonSchema | undefined;
    onInputCharge: (inputValue: string) => void;
    onPokemonClick: (inputValue: string) => void;
}

const Pokedex = ({
    searchedPokemons,
    onInputCharge,
    onPokemonClick,
    selectedPokemons
}: PokedexProps) => {
    
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox onInputCharge={onInputCharge}/>
                <Pokelist 
                    onPokemonCLick={onPokemonClick}
                    searchedPokemons={searchedPokemons}
                />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemons}/>
            </div>
        </div>
    );
};

export default Pokedex; 