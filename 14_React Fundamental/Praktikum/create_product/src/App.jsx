import Navbar from './components/Navbar/Navbar';
import Icon from './components/Icon/Icon';
import Label form '.components/Forms/Label'
import Titels from './components/Titels/Titels';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Icon className={'fa-brands fa-bootstrap text-primary mt-5 mb-4 fa-4x d-flex justify-content-center'} />
      <Titels />
      <div className="container-fluid row">
        <div className="col"></div>
        <div className="col-6">
        <form action="" id="form_product" name="formdata">
      {/* productName */}
      <Input type={'email'} id={'products'} />

      {/* productCatageroy */}
      <div>
        <Label htmlFor={'categoryProduct'} className={'form-label mt-3'} label={'Product Category'} />
        <select className="form-select w-25" aria-label="Default select example" id="option">
          <option value={1}>Toyota</option>
          <option value={2}>Lexsus</option>
          <option value={3}>Mazda</option>
        </select>
      </div>

      {/* productImage */}
      <File type={'file'} id={'formFile'} className={'form-control text-primary border-primary fontsize w-50'} />

      {/* productOption */}
      <Label htmlFor={'formFile'} className={'form-label mt-3'} label={'Product Freshness'} />
      <div>
        <div className="d-flex">
          <Radio classNameInput={'form-check-input'} type={'radio'} id={'brandNew'} />
          <Label htmlFor={'flexRadioDefault1'} className={'form-check-label'} label={'Brand New'} />
        </div>
        <div className="d-flex">
          <Radio classNameInput={'form-check-input'} type={'radio'} id={'secondHank'} />
          <Label htmlFor={'flexRadioDefault1'} className={'form-check-label'} label={'Second Hank'} />
        </div>
        <div className="d-flex">
          <Radio classNameInput={'form-check-input'} type={'radio'} id={'refurbished'} />
          <Label htmlFor={'flexRadioDefault1'} className={'form-check-label'} label={'Refurbished'} />
        </div>
      </div>

      {/* productDescription */}
      <Textarea className={'form-control'} id={'description'} rows={'3'} />

      {/* productPrice */}
      <Input label={'Price'} htmlFor={'priceProduct'} id={'price'} placeholder={'$1'} />

      <Button className={'btn btn-primary w-75 my-5'} value={'Submit'} />
    </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
