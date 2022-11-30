import { GetStaticProps } from 'next';
import Image from 'next/image';

import type { IResultsPokeApi, PokemonDetails } from '../../@types/pokemon';

import styles from '../../styles/Pokemon.module.css';

export const getStaticPaths = async () => {
    const maxPokemons = 252;
    const api = `https://pokeapi.co/api/v2/pokemon/`;

    const res = await fetch(`${api}?limit=${maxPokemons}`);
    const data = await res.json();

    const paths = data.results.map((item: IResultsPokeApi, index: number) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{
    pokemonDetails: IResultsPokeApi;
}> = async (context) => {
    const id = context.params!.pokemonId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return {
        props: { pokemonDetails: data },
    };
};

export default function Pokemon({ pokemonDetails }: PokemonDetails) {
    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.pokemon_title}>{pokemonDetails.name}</h1>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemonDetails.id}.png`}
                width="200"
                height="200"
                alt={pokemonDetails.name}
            />
            <div>
                <h3>Número:</h3>
                <p>#{pokemonDetails.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemonDetails.types.map((item, index) => (
                        <span
                            key={index}
                            className={`${styles.type} ${
                                styles['type_' + item.type.name]
                            }`}
                        >
                            {item.type.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemonDetails.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemonDetails.weight / 10} kg</p>
                </div>
            </div>
        </div>
    );
}
