import Image from "next/image"

const Page = ({data}) =>{
    return (
        <div>
            <Image src={data.image} width={1000} height={500} alt=""/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default Page

export async function getStaticPaths(){
    const {allEvents} = await import("/data/data.json")
    const paths = allEvents.map(event=>{
        return{
            params:{
                cat: event.city.toString(),
                id:event.id.toString()
            }
        }
    })

    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const {allEvents} = await import("/data/data.json")
    const id = context?.params.id
    const data = allEvents.find(event=>event.id === id)

    return{
        props:{
            data
        }
    }
}