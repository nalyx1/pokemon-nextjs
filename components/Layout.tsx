import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

import type { LayoutProps } from '../@types/pokemon';

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>Pokemon NextJS</title>
            </Head>
            <Navbar />
            <main className="main_container">{children}</main>
            <Footer />
        </>
    );
}
