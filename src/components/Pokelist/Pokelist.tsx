import React from "react";
import "./Pokelist.css";
import Pokecard from "../Pokecard/Pokecard";
import { PokemonSchema } from "../Types/PokemonSchema";

interface PokelistProps {
    searchedPokemons: PokemonSchema[];
    onPokemonCLick: (pokemonName: string) => void;
}

const Pokelist = ({searchedPokemons, onPokemonCLick }: PokelistProps) => {
    return (
        <div className="pokelist">
            {searchedPokemons.map((pokemon) => {
                return (
                    pokemon.name && (
                        <Pokecard 
                            onPokemonClick={onPokemonCLick}
                            key={pokemon.id} 
                            name={pokemon.name} 
                            spriteUrl={pokemon.sprites.normal} 
                        />
                    )
                );  
            })}
        </div>
    )
};

export default Pokelist;