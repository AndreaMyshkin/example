
import React from "react"
import Layout from "../../components/Layout"

// Component para hacer transiciones entre ṕáginas

import Link from "next/link";
import Head from "next/head";


// Client side rendering
// Static side rendering
export default function Characters({characters}) {


React.useEffect(() =>{

  const getApi = async() =>{
      const response  = await fetch('/api/hello');
      const resApi  = await response.json()
      console.log({resApi})
  }
  getApi()
}, [])


  
console.log({characters})

    return (
        <Layout>
                 <Head>
        <title>Characters</title>
        <meta property="og:title" content="Characters Page" key="title" />
      </Head>
            <main>
                <h1 >  Characters</h1>
                <section>
                    {
                        characters && characters.length > 0 && (
                            characters.map(({ name, id,  image }) => (
                                <div key={id}>
                                    <Link href={`/characters/${id}`}>
                                        <a>
                                            <h1>{name}</h1>
                                            <img src={image} />
                                        </a>
                                    </Link>
                                </div>
                            ))
                        )

                    }

                </section>


            </main>

           
            <style jsx>{`
                main {
                  
                 
                    
                    padding: 2rem;
                }
               
            `}</style>
        </Layout>
    )
}


//Todo lo que hacemos en esta función va a correr del lado del server

export async function getServerSideProps(){
   const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4')
   const characters = await response.json()

   // En vez de devolver sólo los characters devolvemos un objeto con props

   return{
       props:{
           characters
           
       }
   }

}