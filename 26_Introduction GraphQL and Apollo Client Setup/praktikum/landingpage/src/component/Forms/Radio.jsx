const Radio = ({ classNameInput, type, name, value, onChange }) => {
  return (
    <div className="form-check">
      <input 
        className={classNameInput} 
        type={type} 
        name={name} 
        value={value}
        onChange={onChange} />
    </div>
  );
};

export default Radio;
