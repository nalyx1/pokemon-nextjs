import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quam accusamus necessitatibus mollitia commodi adipisci? Reiciendis minus voluptatibus, corrupti quisquam ab vel ea autem dolores, quidem laudantium, repellendus ex facere.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
        </div>
    )
}