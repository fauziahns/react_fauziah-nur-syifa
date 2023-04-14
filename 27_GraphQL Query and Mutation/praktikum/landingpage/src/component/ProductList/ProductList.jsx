import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import client from "../../apollo"

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
const DELETE_PRODUCT = gql `
    mutation MyMutation($id: Int!) {
        delete_table_product(where: {id: {_eq: $id}}) {
            affected_rows
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

    //  const deleteProduct = (e) => {
    //     e.preventDefault()
    //     client.mutate({
    //         mutation: DELETE_PRODUCT,
    //         variables: {name: table_product.name},
    //         optimisticResponse: {},
    //         update: (cache) => {
    //             const exsistingProduct = cache.readQuery({
    //                 query:Getproductlist
    //             })
    //             const newProduct = exsistingProduct.table_product.filter(t => (t.name =! name))
    //             cache.writeQuery({
    //                 query: Getproductlist,
    //                 data: { table_product: newProduct}
    //             })
    //         }
    //     })
    //  }

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
                                        {item.name} the description is {item.description} 
                                    </p>
                                    <p className="card-text fw-bold">Price : {item.price}</p>
                                    <a href="#" className="btn btn-outline-danger btn-sm">
                                    Delete 
                                    </a>
                                    <a href="#" className="btn btn-outline-success ms-2 btn-sm">
                                    Edit 
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