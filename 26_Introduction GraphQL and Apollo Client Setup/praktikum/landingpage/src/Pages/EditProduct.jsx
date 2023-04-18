import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Input from '../component/Forms/Input';
import Label from '../component/Forms/Label';
import Textarea from '../component/Forms/Tetxtarea';
import File from '../component/Forms/File';
import Radio from '../component/Forms/Radio';
import Button from '../component/Button/Button';
import Select from '../component/Forms/Select';
import { useState, useEffect} from 'react';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function EditProduct() {
    const [list, setList] = useState ([])
    const valueOption = [
      {value : "", label : ""},
      {value : "toyota", label : "Toyota"}, 
      {value : "lexus", label : "Lexus"}, 
      {value : "mazda", label : "Mazda"}]
    const [deleteId, setDeleteId] = useState("");
    const [show, setShow] = useState(false);
    const baseURL = 'https://642db251bf8cbecdb40cd2d5.mockapi.io/api/products/dataProducts'
    const navigate = useNavigate()
    const {i} = useParams
    const [product, setProduct] = useState({
        name: "",
        selectProduct: "",
        fresh: "",
        price: "",
        description: ""
    })
    const { name, selectProduct, fresh, price, description } = product
    

    useEffect(() => {
        loadData()
    },[])

    // onChange form
  const handleInput = (e) => {
    setProduct({...product, [e.target.name]: e.target.value})
  }

    // validation form
    const onSubmit = async (e) => {
        const res = await axios.put('/api/article/123', {
            title: 'Making PUT Requests with Axios',
            status: 'published'
        });
      //method POST axios
      const product = { name, selectProduct, fresh, price };
      axios.post(baseURL, data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }

    const loadData = async () => {
        const result = await axios.get(`https://642db251bf8cbecdb40cd2d5.mockapi.io/api/products/dataProducts/${i}`)
        setProduct(result.data)
    }

  return (
    <div>
      <Navbar/>
      <form action="" id="form_product" name="formdata" className='py-5'>
          {/* productName */}
          <Input 
            label={'Product Name'}
            type={'email'} 
            maxLength="10"
            value={name}
            className={'form-label mt-3'}
            onChangeText={handleInput}
             />
          {/* productCatageroy */}
        <div>
           <Label 
            htmlFor={'categoryProduct'} 
            className={'form-label mt-3'} 
            label={'Product Category'} />
          <Select 
            classNameSelect={'form-label mt-3'}
            nameSelect={'categoryProduct'}
            onChange={handleInput}
            valueSelect={selectProduct}
            valueOptions={valueOption}
          />
          </div>

          {/* productImage */}
          <div>
          <File 
            type={'file'} 
            id={'formFile'} 
            className={'form-label mt-3'} 
            onChangeFile={handleInput}
          />
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
                onChange={handleInput} />
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
                onChange={handleInput} />
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
                onChange={handleInput} />
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
              value={description}
              className={'form-label mt-3'} 
              onChange={handleInput}
              rows={'3'}  
            />
            </div>

            {/* productPrice */}
            <div>
            <Input 
              value={price}
              className={'form-label mt-3'}
              onChangeText={handleInput}
              label={'Price'} 
              placeholder={'$1'} />
            </div>
            <Button 
              className={'btn btn-primary w-75 my-3'} 
              value={'Submit'}
              onClick={onSubmit}
            />
          </form>
    </div>
  )
}

export default EditProduct