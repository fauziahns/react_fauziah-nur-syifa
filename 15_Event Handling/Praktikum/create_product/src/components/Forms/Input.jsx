import Label from './Label';

const Input = ({ type, id, placeholder, onChangeText, value, className}) => {
  return (
    <div className="mt-4">
      <Label 
        label={'Product Name'} 
        className={'form-label'} 
      />

      <input 
        type={type} 
        className={`form-control w-50 ${className && className}`} 
        id={id} 
        value={value}
        placeholder={placeholder}
        onChange={onChangeText} 
      />
    </div>
  );
};

export default Input;
