import Label from './Label';

const Textarea = ({ className, id, rows }) => {
  return (
    <div className="mb-3 w-50">
      <Label htmlFor={'descriptionProduct'} className={'form-label mt-1'} label={'Additional Description'} />
      <textarea className={className} id={id} rows={rows} defaultvalue="{''}" />
    </div>
  );
};

export default Textarea;
