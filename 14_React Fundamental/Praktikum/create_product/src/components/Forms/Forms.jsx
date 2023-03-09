import Button from '../Button/Button';
import Input from './Input';
import File from './File';

const Forms = () => {
  return (
    <div className="container-fluid row">
      <div className="col"></div>
      <div className="col-6">
        <form action="" id="form_product" name="formdata">
          {/* productName */}
          <Input label={'Product Name'} htmlFor={'nameProduct'} type={'email'} id={'products'} />

          {/* productCatageroy */}
          <div>
            <label htmlFor="categoryProduct" className="form-label mt-3">
              Product Category
            </label>
            <select className="form-select w-25" aria-label="Default select example" id="option">
              <option value={1}>Toyota</option>
              <option value={2}>Lexsus</option>
              <option value={3}>Mazda</option>
            </select>
          </div>

          {/* productImage */}
          <File label={'Image of Product'} htmlFor={'formFile'} type={'file'} id={'formFile'} className={'form-control text-primary border-primary fontsize w-50'} />

          {/* productOption */}
          <div>
            <label htmlFor="formFile" className="form-label mt-3">
              Product Freshness
            </label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="product_freshness" id="brandNew" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="product_freshness" id="secondHank" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="product_freshness" id="Refurbished" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Refufbished
              </label>
            </div>
          </div>
          {/* productDescription */}
          <div className="mb-3 w-50">
            <label htmlFor="descriptionProduct" className="form-label mt-1">
              Additional Description
            </label>
            <textarea className="form-control" id="description" rows={3} defaultValue={''} />
          </div>

          {/* productPrice */}
          <Input label={'Price'} htmlFor={'priceProduct'} id={'price'} placeholder={'$1'} />

          <Button />
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Forms;
