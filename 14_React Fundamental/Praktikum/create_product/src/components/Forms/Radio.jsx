const Radio = (props) => {
  return (
    <div className="form-check">
      <input className={props.classNameInput} type={props.type} name={props.name} id={props.id} />
    </div>
  );
};

export default Radio;
