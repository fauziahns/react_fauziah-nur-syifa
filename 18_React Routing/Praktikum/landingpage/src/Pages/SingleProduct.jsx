import Navbar from "../component/Navbar/Navbar"
import { useLocation, useParams } from "react-router-dom"

const SingleProduct = () => {
    const { state } = useLocation()
    const {data, selectProduct, fresh, price} = state.item
    console.log(state)
    return (
        <>
        <Navbar/>
        <div className="p-5">
        <h2 className="text-center mb-5">Detail Product </h2>
        <table className="table m-1 ">
            <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Category</th>
                    <th scope="col">Product Freshness</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr className="m-1">
                    <td>{data}</td>
                    <td>{selectProduct}</td>
                    <td>{fresh}</td>
                    <td>{price}</td>
                </tr>
            </tbody>
            </table></div>
            </>
    )
}

export default SingleProduct