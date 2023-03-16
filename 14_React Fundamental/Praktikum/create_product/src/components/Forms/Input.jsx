import Label from './Label';

const Input = ({ type, id, placeholder }) => {
  return (
    <div className="mt-4">
      <Label label={'Product Name'} htmlFor={'nameProduct'} className={'form-label'} />
      <input type={type} className="form-control w-25" id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
