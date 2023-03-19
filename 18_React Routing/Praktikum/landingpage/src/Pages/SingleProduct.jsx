import { useLocation } from "react-router-dom"

const SingleProduct = () => {
    const {state} = useLocation()
    const {data, selectProduct, fresh, price} = state.item
    return (
        <tabel>
            <thead>
                <tr>
                <th scope="col">Product Name </th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data}</td>
                    <td>{selectProduct}</td>
                    <td>{fresh}</td>
                    <td>{price}</td>
                </tr>
            </tbody>
        </tabel>
    )
}

export default SingleProduct