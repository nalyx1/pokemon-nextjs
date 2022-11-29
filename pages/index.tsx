import Card from '../components/Card';
import Image from 'next/image';

import type { IResultsPokeApi, Pokemon } from '../@types/pokemon';

import styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
    const maxPokemons = 200;
    const api = `https://pokeapi.co/api/v2/pokemon/`;

    const res = await fetch(`${api}?limit=${maxPokemons}`);
    const data = await res.json();

    data.results.forEach((item: IResultsPokeApi, index: number) => {
        item.id = index + 1;
    });

    return {
        props: {
            pokemons: data.results,
        },
    };
};

export default function Home({ pokemons }: Pokemon) {
    return pokemons ? (
        <>
            <div className={styles.title_container}>
                <h1 className={styles.title}>
                    Pokemon <span>NextJS</span>
                </h1>
                <Image
                    src="/images/pokeball.png"
                    width="50"
                    height="50"
                    alt="Pokemon NextJS"
                />
            </div>

            <div className={styles.pokemon_container}>
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </>
    ) : (
        <></>
    );
}
