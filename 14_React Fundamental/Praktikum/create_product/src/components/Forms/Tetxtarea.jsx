import Label from './Label';

const Textarea = (props) => {
  return (
    <div className="mb-3 w-50">
      <Label htmlFor={'descriptionProduct'} className={'form-label mt-1'} label={'Additional Description'} />
      <textarea className={props.className} id={props.id} rows={props.rows} defaultvalue="{''}" />
    </div>
  );
};

export default Textarea;
