const Input = (props) => {
  return (
    <div className="mt-4">
      <label htmlFor={props.htmlFor} className="form-label">
        {props.label}
      </label>
      <input type={props.type} className="form-control w-25" id={props.id} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
