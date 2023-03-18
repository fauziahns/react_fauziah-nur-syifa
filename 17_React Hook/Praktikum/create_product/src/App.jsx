import Navbar from './components/Navbar/Navbar';
import Icon from './components/Icon/Icon';
import { useState, useEffect } from 'react';
import Input from './components/Forms/Input';
import Label from './components/Forms/Label';
import Textarea from './components/Forms/Tetxtarea';
import File from './components/Forms/File';
import Radio from './components/Forms/Radio';
import Button from './components/Button/Button';
import {v4} from 'uuid'
import Select from './components/Forms/Select';

function App() {
  const [list, setList] = useState ([])
  const [data, setData] = useState ("")
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

 // onChange form
  const handleInput = (e) => {
    setData(e.target.value)
    if (data.length >= 10) {
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
        data : data,
        selectProduct : selectProduct,
        fresh : fresh,
        price : price
    }
    setList([...list, objectData])
  }

  // useEffect : alert welcome
  useEffect(() => {
    setTimeout(() => {alert("Welcome!")}, 1000)
  },[])

  // delete row table
  const handleDelete = (i) => {
    const deleteRow=[...list]
    deleteRow.splice(i,1)
    setList(deleteRow)
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
            value={data}
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
                { list.map((item, i) => (
                    <tr className="m-1">    
                    <td>{i=v4()}</td>
                    <td>{item.data}</td>
                    <td>{item.selectProduct}</td>
                    <td>{item.fresh}</td>
                    <td>{item.price}</td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(i)}>Delete</button>
                        <button className="btn btn-success btn-sm ms-2">Edit</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
