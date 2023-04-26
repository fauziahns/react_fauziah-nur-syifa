const Label = ({ htmlfor, className, label }) => {
  return (
    <label htmlfor={htmlfor} className={className}>
      {label}
    </label>
  );
};

export default Label;
