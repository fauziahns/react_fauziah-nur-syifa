import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

const Getprooductlist = gql`
        query MyQuery {
                table_product {
                    id
                    name
                    price
                    selectProduct
                }
        }
`
const prooductlist = () => {
     const {data, loading, error} = useQuery(Getprooductlist)
     const [product, setProduct] = useState([])
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
                loading ? <p>loading</p> : 
                data?.product.map(item => 
                    <div>
                        <p>{item.event_name}</p>
                    </div>
                )
            }
        </>
     )
     
}
export default prooductlist