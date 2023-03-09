const File = (props) => {
  return (
    <div className="custom-file-button">
      <div className="mb-3 width-custom">
        <label htmlfor={props.htmlfor} className="form-label mt-4">
          {props.label}
        </label>
        <input className={props.className} type={props.type} id={props.id} />
      </div>
    </div>
  );
};

export default File;
