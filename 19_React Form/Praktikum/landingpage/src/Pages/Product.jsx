import Navbar from "../component/Navbar/Navbar"
import Icon from '../component/Icon/Icon';
import { useState, useEffect} from 'react';
import Input from '../component/Forms/Input';
import Label from '../component/Forms/Label';
import Textarea from '../component/Forms/Tetxtarea';
import File from '../component/Forms/File';
import Radio from '../component/Forms/Radio';
import Button from '../component/Button/Button';
import Select from '../component/Forms/Select';
import { Modal } from 'react-bootstrap';
import { Navigate, useNavigate } from "react-router-dom";
import {v4} from "uuid"

const Product = () => {
  const valueOption = [
    {value : "", label : ""},
    {value : "toyota", label : "Toyota"}, 
    {value : "lexus", label : "Lexus"}, 
    {value : "mazda", label : "Mazda"}]
  const [deleteId, setDeleteId] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  // regex
  const regexRequired = /\$+/
  const [errorMessage, setErrorMessage] = useState("")
  const [dataTabel, setDataTabel] = useState([])
  const [dataProduct, setDataProduct] = useState({
    data: "",
    selectProduct: "",
    fresh: "",
    file:"",
    description: "",
    price:""
  })
  
  // onChange
  const handleChange=(e)=>{
    setDataProduct({
      ...dataProduct,[e.target.name]:e.target.value
    })
  }

  //onSubmit
  const onSubmit = (e) => {
    if (!regexRequired.test(dataProduct.data) && !regexRequired.test(dataProduct.fresh) && !regexRequired.test(dataProduct.description) && !regexRequired.test(dataProduct.price)){
      setErrorMessage("This Field Must be Filled In")
    }else {
      setDataTabel((prev)=>[...prev, dataProduct])
      setErrorMessage("")
      console.log(dataProduct)
    }
    e.preventDefault()
    const objectData= {
      data : dataProduct.data,
      selectProduct : dataProduct.selectProduct,
      file: dataProduct.file,
      fresh : dataProduct.fresh,
      price : dataProduct.price
  }
  setDataTabel([...dataTabel, objectData])
  }

  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account"
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstraps form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    }
  };
  
 
  const [language, setLanguage] = useState ("Indonesia")
  const [titles, setTitles] = useState (article.title.en)
  const [content, setContent] = useState (article.description.en)
  const changeLanguage = () => {
      if(language === "Indonesia"){
          setLanguage("English")
          setTitles(article.title.id)
          setContent(article.description.id)
    } else {
          setLanguage("Indonesia")
          setTitles(article.title.en)
          setContent(article.description.en)
  }
}

// Random Number
const getRandomNumber = (e) => {
  e.preventDefault()
  const randomNumber = Math.floor(Math.random() * 20)
  console.log({randomNumber})
};


  // modal delete row table
  const handleClose = () => {
    setShow(false);
  };

  const handleClickDelete = (i) => {
    setDeleteId(i);
    setShow(true);
  };

  const handleDeleteItem = (i) => {
    const deleteRow=[...dataTabel]
    deleteRow.splice(i,1)
    setDataTabel(deleteRow)
  }

  // handle detail data
  const action = (item, i) => {
    navigate(`/SingleProduct/${i=v4()}`, {
      state: {item}
    })
  }


  return ( 
  <div className="App">
    <Navbar />
    <Icon />
    <div className="row">
      <div className="col"></div>
      <div className="col-9 text-center">
        <h2>{titles}</h2>
        <p>{content}</p>
      </div>
      <div className="col"></div>
    </div>
    <div className="container row">
      <div className="col"></div>
      <div className="col-6">
        <button 
          className='btn btn-outline-primary btn-sm me-2'
          onClick={getRandomNumber}>
              Get Random Number
        </button>
        <button 
          className='btn btn-outline-primary btn-sm' 
          onClick={changeLanguage}>
          {language}
        </button>      

        <form action="" id="form_product" name="formdata">
          {/* productName */}
          <Input 
            label={'Product Name'}
            type={'email'} 
            maxLength="10"
            name={'data'}
            value={dataProduct.data}
            className={"form-control w-50"}
            onChangeText={handleChange}
             />
          <span className='fs-6 text-danger'>{errorMessage}</span>

          {/* productCatageroy */}
        <div>
           <Label 
            htmlFor={'categoryProduct'} 
            className={'form-label mt-3'} 
            label={'Product Category'} />
          <Select 
            classNameSelect={'form-select'}
            nameSelect={'selectProduct'}
            onChange={handleChange}
            valueSelect={dataProduct.selectProduct}
            valueOptions={valueOption}
          />
            <span className='fs-6 text-danger'>{errorMessage}</span>
          </div>

          {/* productImage */}
          <div>
          <File 
            type={'file'} 
            name={'file'}
            value={dataProduct.file}
            id={'formFile'} 
            className={'form-control'} 
            onChangeFile={handleChange}
          />
            <span className='fs-6 text-danger'>{errorMessage}</span>
          </div>

          {/* productOption */}
          <Label  
            className={'form-label mt-3'} 
            label={'Product Freshness'}/>
          <div>
            <div className="d-flex">
              <Radio 
                classNameInput={'form-check-input'} 
                name="fresh"
                type={'radio'} 
                value={'Brand New'}
                onChange={handleChange} />
              <Label 
                className={'form-check-label'} 
                htmlFor={'brandnew'}
                label={'Brand New'}/>
            </div>
            <div className="d-flex">
              <Radio 
                classNameInput={'form-check-input'} 
                name="fresh"
                type={'radio'} 
                value={'Second Hank'}
                onChange={handleChange} />
              <Label 
                className={'form-check-label'} 
                htmlFor={'secondhank'}
                label={'Second Hank'} />
            </div>
            <div className="d-flex">
              <Radio 
                classNameInput={'form-check-input'} 
                name="fresh"
                type={'radio'} 
                value={'Refurbished'}
                onChange={handleChange} />
              <Label 
                className={'form-check-label'}
                htmlFor={'refurbished'}
                label={'Refurbished'} 
                />
              </div>
            </div>

            {/* productDescription */}
            <div>
            <Textarea 
              value={dataProduct.description}
              name={"description"}
              className={'form-control'} 
              onChange={handleChange}
              rows={'3'}  
            />
            <span className='fs-6 text-danger'>{errorMessage}</span>
            </div>

            {/* productPrice */}
            <div>
            <Input 
              value={dataProduct.price}
              name={"price"}
              className={'form-control w-50'}
              onChangeText={handleChange}
              label={'Price'} 
              placeholder={'$1'} />
              <span className='fs-6 text-danger'>{errorMessage}</span>
            </div>
            <Button 
              className={'btn btn-primary w-75 my-3'} 
              value={'Submit'}
              onClick={onSubmit}
            />
          </form>
      </div>
      {/* tabel */}
      <div className="col"></div>
    </div>
      <div className='text-center '>
        <h3 className='mb-4 mt-5'>List Product</h3>
        <table className="table m-1 " id="dataProduct">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name </th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Product Image</th>
            <th scope="col">Product Price</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
            <tbody>
                { dataTabel.map((item, i) => (
                    <tr className="m-1" key={i}>    
                    <td exact
                      className={"nav-link text-primary pointer"}
                      onClick={()=> action(item, i)}>{i=v4()}</td>
                    <td>{item.data}</td>
                    <td>{item.selectProduct}</td>
                    <td>{item.fresh}</td>
                    <td>{item.file}</td>
                    <td>{item.price}</td>
                    <td>
                        <button 
                          className="btn btn-danger btn-sm" 
                          onClick={() => handleClickDelete(i)}>Delete</button>
                        <button className="btn btn-success btn-sm ms-2">Edit</button>
                    </td>
                </tr>
                ))}
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
  );
}

export default Product;
