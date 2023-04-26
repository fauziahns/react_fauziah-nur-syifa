import Label from './Label';

const Input = ({ type, id, placeholder, onChangeText, value, className, label, name}) => {
  return (
    <div className="mt-4">
      {label}
      <input 
        name={name}
        type={type} 
        className={className} 
        id={id} 
        value={value}
        placeholder={placeholder}
        onChange={onChangeText} 
      />
    </div>
  );
};

export default Input;
