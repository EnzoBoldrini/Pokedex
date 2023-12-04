import React from 'react';
import Pokedex from '../Pokedex/Pokedex';
import "./App.css";
import { pokemonData } from '../Data/PokemonData';
import { PokemonSchema, PokemonSpritesSchema, UmpatchedPokemonSchema } from '../Types/PokemonSchema';

interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemons: [],
        searchedPokemons: [],
        selectedPokemon: undefined,
    };

    patchPokemonData = (pokemons:UmpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animation: undefined,
            };
            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log("Exception while parsing the sprites:", e);
            }
            const patchedPokemon: PokemonSchema = { 
                ...pokemon,
                sprites: parsedSprites,
            };
            return patchedPokemon;
        });
        
        return patchedPokemons;
    };
    
    componentDidMount(): void {
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        );
          
        

        this.setState({
            allPokemons: patchedPokemons,
            searchedPokemons: patchedPokemons, 
        }); 
    }

    handleInputChange = (inputValue: string) => {
        const {allPokemons} = this.state;

        const searchedPokemons = allPokemons.filter(
            (pokemon: PokemonSchema) => {
                return (
                    pokemon.name &&
                    pokemon.name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                );
            }
        );

        this.setState({
            searchField: inputValue,
            searchedPokemons,
        }); 
    };
    
    handleClick = (pokemonName: string) => {
        const {allPokemons} = this.state;
    
        // Ache o Pokemon entre os outros Pokemons
    
        const selectedPokemon = allPokemons.find(
            (pokemon: PokemonSchema) => pokemon.name === pokemonName
        );

        // Atualizar o state 
        
        this.setState({selectedPokemon});
    
    }

    render() {
        return (
            <div className="App">
                <h1>Pokedex</h1>
                <Pokedex 
                    searchedPokemons={this.state.searchedPokemons}
                    selectedPokemons={this.state.selectedPokemon}
                    onInputCharge={this.handleInputChange}
                    onPokemonClick={this.handleClick}
                />
            </div>
        );
        
    }
}

export default App;