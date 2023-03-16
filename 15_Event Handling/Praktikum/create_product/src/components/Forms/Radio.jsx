const Radio = ({ classNameInput, type, name, id }) => {
  return (
    <div className="form-check">
      <input className={classNameInput} type={type} name={name} id={id} />
    </div>
  );
};

export default Radio;
