import { GetStaticProps } from 'next'

type Pokemon = {
    pokemon: IResultsPokeApi
}
  
interface IResultsPokeApi {
    name: string,
    url: string,
    id: number
}

export const getStaticPaths = async () => {
    const maxPokemons = 252
    const api = `https://pokeapi.co/api/v2/pokemon/`

    const res = await fetch(`${api}?limit=${maxPokemons}`)
    const data = await res.json()

    const paths = data.results.map((item: IResultsPokeApi, index: number) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
    
}

export const getStaticProps : GetStaticProps<{pokemon: IResultsPokeApi}> = async (context) => {
    const id = context.params!.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
        props: { pokemon: data}
    }
}

export default function Pokemon({ pokemon }: Pokemon){
    return(
        <>
            <p>{pokemon.name}</p>
        </>
    )
}