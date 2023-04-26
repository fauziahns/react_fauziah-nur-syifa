import React from 'react'
import { Modal } from 'react-bootstrap'
import {v4} from 'uuid';
import { useState } from 'react';
import Button from './components/Button/Button';
import { useSelector } from 'react-redux';

function ShowProduct() {
    const [list, setList] = useState ([])
    const [deleteId, setDeleteId] = useState("");
    const [show, setShow] = useState(false);
    const { data, selectProduct, file, fresh, price } = useSelector(state=>state.product)

      // modal delete row table
    const handleClose = () => {
        setShow(false);
    };

    const handleClickDelete = (data) => {
        setDeleteId(data);
        setShow(true);
    };

        const handleDeleteItem = (data) => {
        const deleteRow=[...list]
        deleteRow.splice(data,1)
        setList(deleteRow)
    }
  return (
    <div>
       <div className='text-center '>
            <h3 className='mb-4 mt-5'>List Product</h3>
              <table className="table m-1 " id="dataProduct">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Product Name </th>
                    <th scope="col">Product Category</th>
                    <th scope="col">Product Freshness</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                    <tbody>
                            <tr className="m-1">    
                            <td>{v4()}</td>
                            <td>{data}</td>
                            <td>{selectProduct}</td>
                            <td>{fresh}</td>
                            <td>{price}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleClickDelete(data)}>Delete</button>
                                <button className="btn btn-success btn-sm ms-2">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this?</Modal.Body>
        <Modal.Footer>
          <Button className={"btn btn-danger"} value={"Delete"} onClick={handleDeleteItem}/>
          <Button className={"btn btn-secondary"} value={"Cancle"} onClick={handleClose}/>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default ShowProduct
