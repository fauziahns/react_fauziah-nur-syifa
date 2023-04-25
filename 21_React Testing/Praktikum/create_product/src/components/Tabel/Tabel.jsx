const Tabel = ({ data }) => {
    return(
        <table className="table m-1 w-75" id="dataProduct">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name </th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Product Price</th>
          </tr>
          </thead>
            <tbody>
                { data?.map((item, key) => (
                    <tr className="m-1">
                        <td>{key}</td>
                        <td>{item.products}</td>
                        <td>{item.description}</td>
                        <td>{item.priceProduct}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default Tabel