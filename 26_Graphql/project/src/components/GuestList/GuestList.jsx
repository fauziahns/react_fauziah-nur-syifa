import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

const GetguestList = gql`
        query MyQuery {
            Guest {
            event_name
            date
            name
            }
        }
`
const guestList = () => {
     const {data, loading, error} = useQuery(GetguestList)
     const [guest, setguest] = useState([])
     useEffect(() => {
        console.log('loading', loading);
        console.log('data ', data);
        console.log('error = ', error);

        if(!loading && error !== undefined){
            setguest(data.guest)
        }
     })

     return(
        <>
            {
                loading ? <p>loading guys</p> : 
                data?.guest.map(item => 
                    <div>
                        <p>{item.event_name}</p>
                    </div>
                )
            }
        </>
     )
     
}
export default guestList