import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div>
                <p>logo</p>
                <h1>Pokemon NextJS</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre nós</Link>
                </li>
            </ul>
        </nav>
    )
}