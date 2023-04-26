import { gql, useMutation, useQuery } from "@apollo/client"
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
        delete_table_product_by_pk(where: {id: $id}) {
                 id
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

     const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        refetchQueries: [Getproductlist]
     })

     const onDelete = (id) => {
        deleteProduct({variables : {
            id: id
        }})
     }
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
                                    <a href="#" className="btn btn-outline-danger btn-sm" onClick={onDelete}>
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