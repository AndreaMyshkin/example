import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../../components/Layout'
export default function Character({character}) {
    console.log({character})
    const router = useRouter()
    const obj = router.query;

    return (
        <Layout>
            Character {obj.id}
            <h1>{character.id}</h1>
            <p>Species: {character.species}</p>
            <h3>Status {character.status}</h3>
            <img src ={character.image} />
        </Layout>
    )
}



export async function getServerSideProps(context){

    // Para tener acceso al parámetro  le pasamos un parámetro que viene del contexto
    const response = await fetch(`https://rickandmortyapi.com/api/character/${context.params.id}`)
    const character = await response.json()
 
    // En vez de devolver sólo los characters devolvemos un objeto con props

    return{
        props:{
            character
            
        }
    }
 
 }