import Layout from '../../components/Layout'
import Link from 'next/link'
import Head from 'next/head';

// Static Generation 
export default function Index({episodes}) {
    console.log({episodes})
    return (
        <Layout>
      <Head>
        <title>Episodes Page</title>
        <meta property="og:title" content="Episodes Page" key="title" />
      </Head>
            <h2>Episodes</h2>
            <section>
                    
                       {
                            episodes.map(({ name, id,  episode }) => (
                                <div key={id}>
                                    <Link href={`/episodes/${id}`} 
                                    
                                   >
                                        <a>
                                            <h1> Name: {name}</h1>
                                              <p>Episode: {episode}</p>
                                        </a>
                                    </Link>
                                </div>
                            ))
                        
                            }
                    

                </section>

        </Layout>
    )
}


export async function getStaticProps(context){
    const response = await fetch('https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8')
   const episodes = await response.json()

   return{
       props:{
           episodes
       }
   }
}