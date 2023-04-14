const Label = ({ htmlFor, className, label }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {label}
    </label>
  );
};

export default Label;
