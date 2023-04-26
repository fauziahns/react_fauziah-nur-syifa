import Label from './Label';

const Textarea = ({ className, id, rows, onChange, value }) => {
  return (
    <div className="mb-3 w-50">
      <Label 
        htmlFor={'descriptionProduct'} 
        className={'form-label mt-1'} 
        label={'Additional Description'} 
      />
      <textarea 
        className={className} 
        id={id} 
        rows={rows} 
        value={value} 
        onChange={onChange} />
    </div>
  );
};

export default Textarea;
