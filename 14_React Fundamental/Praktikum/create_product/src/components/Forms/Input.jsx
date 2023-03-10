import Label from './Label';

const Input = (props) => {
  return (
    <div className="mt-4">
      <Label label={'Product Name'} htmlFor={'nameProduct'} className={'form-label'} />
      <input type={props.type} className="form-control w-25" id={props.id} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
