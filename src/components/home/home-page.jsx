import Link from "next/link"
import Image from "next/image"

const HomePage = ({data})=>{
    return(
    <main>
        {data.map(country=>{
          return(
          <Link href={`/events/${country.id}`} key={country.id}>
            <h2>{country.title}</h2>
          <Image src={country.image} alt="" width={100} height={100}/>
          <p>{country.description}</p>
        </Link>
        )
        })}
      </main>
    )
}

export default HomePage