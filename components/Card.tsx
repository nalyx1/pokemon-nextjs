import Image from 'next/image';
import Link from 'next/link';

import type { Pokemon } from '../@types/pokemon';

import styles from '../styles/Card.module.css';

export default function Card({ pokemon }: Pokemon) {
    return (
        <div className={styles.card}>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width="120"
                height="120"
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
                Detalhes
            </Link>
        </div>
    );
}
