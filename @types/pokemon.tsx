export type Pokemons = {
    pokemons: IResultsPokeApi[];
};

export type Pokemon = {
    pokemon: IResultsPokeApi;
};

export type PokemonDetails = {
    pokemonDetails: IPokemonDetails;
};
export interface IResultsPokeApi {
    name: string;
    url: string;
    id: number;
}

export interface IPokemonDetails {
    id: number;
    name: string;
    types: [{ type: { name: string } }];
    height: number;
    weight: number;
}

export interface LayoutProps {
    children: React.ReactNode;
}
