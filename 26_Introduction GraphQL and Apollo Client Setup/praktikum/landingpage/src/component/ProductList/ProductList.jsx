import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

const Getproductlist = gql`
        query MyQuery {
            table_product {
            id
            name
            selectProduct
            fresh
            price
            }
        }  
`
const ProductList = () => {
     const {data, loading, error} = useQuery(Getproductlist)
     const [product, setProduct] = useState([])
     useEffect(() => {
        console.log('loading', loading);
        console.log('data ', data);
        console.log('error = ', error);

        if(!loading && error !== undefined){
            setProduct(data.table_product)
        }
     })

     return(
        <>
            {
                loading ? <p>LOADING</p> : 
                product?.map(item => 
                    <div>
                        <p>{item.name}</p>
                        <p>{item.selectProduct}</p>
                        <p>{item.fresh}</p>
                        <p>{item.price}</p>
                    </div>
                )
            }
        </>
     )
     
}
export default ProductList