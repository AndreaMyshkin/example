
import { useRouter } from 'next/router'

export default function Episode(
    episode
) {
console.log(episode)
const router = useRouter()

// If the page is not yet generated, this will be displayed
// initially until getStaticProps() finishes running
if (router.isFallback) {
  return <div>Loading...</div>
}

   
    return (
        <div>
            <h2>Episode{episode.episode.id}</h2>
            <p>
                {episode.episode.name}
            </p>
            <p>{episode.episode.air_date}</p>
        </div>
    )
}


export async function getStaticPaths(){

    const response = await fetch(`https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8`)
    const episodes = await response.json()

   const paths = episodes.map(episode => {
       return {
           params:{id:`${episode.id}` }
       }
   })


  /* const paths = [{
       params: {id:`1`}
   }]*/
    return{

        // Qué paths debe prerenderizar ---> Arreglo de objetos 
       paths,

       // Si no existe regresa al page 404  // Si existe la posibilidad que se agreguen más episodios los renderice
       fallback:true
    }
}

export async function getStaticProps(context){

    // Para tener acceso al parámetro  le pasamos un parámetro que viene del contexto
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${context.params.id}`)
    const episode = await response.json()
 
    // En vez de devolver sólo los characters devolvemos un objeto con props

    return{
        props:{
           episode
            
        }
    }
 
 }