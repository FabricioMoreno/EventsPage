import Image from 'next/image';
import Link from 'next/link'

const Page = ({data}) => {
  return (
    <div>
      <h1>Events</h1>
      <div>
        {
          data.map(country =>{
            return(
            <Link href={`/events/${country.id}`} key={country.id}>
            <Image src={country.image} width={100} height={100} alt=""/>
            <h2>{country.title}</h2>
            <p>{country.description}</p>
            
          </Link>)
          })
        }
        
      </div>
    </div>
  );
};

export default Page;


export async function getStaticProps(){
  const {events_categories}  = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}