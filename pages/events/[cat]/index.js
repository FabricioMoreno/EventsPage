import Image from 'next/image'
import Link from 'next/link'

const Page = ({data, pageName})=>{
    return(
        <div>
            <h1>Events in {pageName}</h1>
            <div>
                {data.map(event=>{
                    return(
                        <Link href={`/events/${event.city}/${event.id}`} key={event.id} >
                            <Image src={event.image} width={300} height={300} alt=""/>
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default Page

export async function getStaticPaths(){
    const {events_categories}  = await import('/data/data.json');

    const paths = events_categories.map(country=>{
        return{
            params:{
                cat:country.id.toString()
            }
        }
    })

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const {allEvents} = await import("/data/data.json")
    const id = context?.params.cat
    const data = allEvents.filter(event=>event.city === id) 

    return{
        props:{
            data,
            pageName:id
        }
    }

}