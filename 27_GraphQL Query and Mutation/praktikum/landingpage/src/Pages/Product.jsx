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
import { Link, Navigate, useNavigate } from "react-router-dom";
import {v4} from "uuid"
import { gql, useMutation } from "@apollo/client";
import { Getproductlist } from "../component/ProductList/ProductList";

const ADD_PRODUCT = gql `
  mutation MyQuery($object: table_product_insert_input!) {
    insert_table_product_one(object: $object){
        id
        name
        selectProduct
        fresh
        description
        price
    }
  }
`

const Product = () => {
  const [list, setList] = useState ([])
  const [name, setName] = useState ("")
  const [productNameClass, setProductNameClass] = useState ("")
  const [productNameError, setProductNameError] = useState ("")
  const [selectProduct, setSelectProduct] = useState ("")
  const [selectNameClass, setSelectNameClass] = useState ("form-select w-25")
  const [selectError, setSelectError] = useState ("")
  const valueOption = [
    {value : "", label : ""},
    {value : "toyota", label : "Toyota"}, 
    {value : "lexus", label : "Lexus"}, 
    {value : "mazda", label : "Mazda"}]
  const [file, setFile] = useState ("")
  const [fileNameClass, setFileNameClass] = useState ("form-control text-primary border-primary fontsize w-50")
  const [fileError, setFileError] = useState ("")
  const [description, setDescription] = useState ("")
  const [descriptionClassName, setDescriptionClassName] = useState ("form-control")
  const [descriptionError, setDescriptionError] = useState ("")
  const [price, setPrice] = useState ("")
  const [priceClassName, setPriceClassName] = useState ("")
  const [priceError, setPriceError] = useState ("")
  const [fresh, setFresh] = useState ("")
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(0)
  
  const [insertProduct] = useMutation(ADD_PRODUCT,{
    refetchQueries: [Getproductlist]
  })

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

 // onChange form
  const handleInput = (e) => {
    setName(e.target.value)
    if (name.length >= 10) {
      setProductNameClass("border border-danger")
      setProductNameError("The product name cannot be longer than 10 characters")
    } else {
      setProductNameClass("")
      setProductNameError("")
    } 
  }

  // validation form
  const onSubmit = () => {
      if (selectProduct === '') {
        setSelectNameClass("border border-danger form-select w-25")
        setSelectError("The Category Field Must be Filled In")
      }else {
        setSelectNameClass("form-select w-25")
        setSelectError("")
      }

      if (file === '') {
        setFileNameClass("form-control text-primary border-danger fontsize w-50 border border-danger ")
        setFileError("The Image Filed Must be Filled In")
      } else {
        setFileNameClass("form-control text-primary border-primary fontsize w-50")
        setFileError("")
      }

      if (description === '') {
        setDescriptionClassName("form-control border border-danger")
        setDescriptionError("The Description Filed Must be Filled In")
      } else {
        setDescriptionClassName("form-control")
        setDescriptionError("")
      }

      if (price === '') {
        setPriceClassName("form-control w-50 border border-danger")
        setPriceError("The Price Filed Must be Filled In")
      }else {
        setPriceClassName("form-control w-50")
        setPriceError("")
      }

      // add data to tabel
      const objectData= {
        name : name,
        selectProduct : selectProduct,
        fresh : fresh,
        price : price
    }
    setList([...list, objectData])
    insertProduct({
      variables: {
        object: {
          id: v4(),
          name: name,
          selectProduct: selectProduct,
          fresh: fresh,
          description: description,
          price: price
        }
      }
    })
  }

  const handleClickDelete = (id) => {
    const deleteRow=[...list]
    deleteRow.splice(id,1)
    setList(deleteRow)
  };

  // handle detail data
  const action = (data, i) => {
    navigate(`/SingleProduct/${id=v4()}`, {
      state: {data}
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
            value={name}
            className={productNameClass}
            onChangeText={handleInput}
             />
          <span className='fs-6 text-danger'>{productNameError}</span>

          {/* productCatageroy */}
        <div>
           <Label 
            htmlFor={'categoryProduct'} 
            className={'form-label mt-3'} 
            label={'Product Category'} />
          <Select 
            classNameSelect={selectNameClass}
            nameSelect={'categoryProduct'}
            onChange={(e) => {setSelectProduct(e.target.value)}}
            valueSelect={selectProduct}
            valueOptions={valueOption}
          />
            <span className='fs-6 text-danger'>{selectError}</span>
          </div>

          {/* productImage */}
          <div>
          <File 
            type={'file'} 
            id={'formFile'} 
            className={fileNameClass} 
            onChangeFile={(e) => {setFile(e.target.files[0])}}
          />
            <span className='fs-6 text-danger'>{fileError}</span>
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
                onChange={(e) => setFresh(e.target.value)} />
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
                onChange={(e) => setFresh(e.target.value)} />
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
                onChange={(e) => setFresh(e.target.value)} />
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
              className={descriptionClassName} 
              onChange={(e) => setDescription(e.target.value)}
              rows={'3'}  
            />
            <span className='fs-6 text-danger'>{descriptionError}</span>
            </div>

            {/* productPrice */}
            <div>
            <Input 
              value={price}
              className={priceClassName}
              onChangeText={(e) => setPrice(e.target.value)}
              label={'Price'} 
              placeholder={'$1'} />
              <span className='fs-6 text-danger'>{priceError}</span>
            </div>
            <Button 
              className={'btn btn-primary w-75 my-3'} 
              value={'Submit'}
              onClick={onSubmit}
            />
          </form>
      </div>
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
            <th scope="col">Product Price</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
            <tbody>
                { list.map((data, id) => (
                    <tr className="m-1" key={id}>    
                    <td exact
                      className={"nav-link text-primary pointer"}
                      onClick={()=> action(data, id)}>{id=v4()}</td>
                    <td>{data.name}</td>
                    <td>{data.selectProduct}</td>
                    <td>{data.fresh}</td>
                    <td>{data.price}</td>
                    <td>
                        <button 
                          className="btn btn-danger btn-sm" 
                          onClick={() => handleClickDelete(data.id)}>Delete</button>
                          <button 
                          className="btn btn-success ms-2 btn-sm" 
                          >Update</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      {/* Modal */}
      </div>
    </div>
  );
}

export default Product;
