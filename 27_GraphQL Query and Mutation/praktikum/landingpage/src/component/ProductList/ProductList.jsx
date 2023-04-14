import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

export const Getproductlist = gql`
        query MyQuery {
            table_product {
            id
            name
            selectProduct
            fresh
            price
            description
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
        <div className="wrapper text-center pb-4 p-5">
            <div className="seacrh">
                <input type="text" placeholder="Cari Produk..." className=""/>
                <a href="" className="btn btn-primary btn-sm">Seacrh</a>
            </div>
            <div className="d-flex justify-content-center">
                {
                    loading ? <p>Loading</p> : 
                    data?.table_product.map(item => 
                        <div className="row p-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                        {item.name} the freshness is {item.fresh} 
                                    </p>
                                    <p className="card-text fw-bold">Price : {item.price}</p>
                                    <a href="#" className="btn btn-outline-primary">
                                    Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <a href="" className="btn btn-primary">
                Load More
            </a>
        </div>

     )
     
}
export default ProductList