const Label = (props) => {
  return (
    <label htmlfor={props.htmlfor} className={props.className}>
      {props.label}
    </label>
  );
};

export default Label;
