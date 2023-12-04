export interface UmpatchedPokemonSchema {
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;  
    is_default?: string;
    name?: string;
    sprites?: string; 
}

export interface PokemonSpritesSchema {
    normal?: string;
    animation?: string;
}

export interface PokemonSchema {
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;  
    is_default?: string;
    name?: string;
    sprites: PokemonSpritesSchema; 
}