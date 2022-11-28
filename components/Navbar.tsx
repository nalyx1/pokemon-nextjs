import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" width="30" height="30" alt="Pokemon NextJS" />
                <h1>Pokemon NextJS</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/"><span>Home</span></Link>
                </li>
                <li>
                    <Link href="/about"><span>Sobre nós</span></Link>
                </li>
            </ul>
        </nav>
    )
}