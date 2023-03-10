import Label from './Label';

const File = (props) => {
  return (
    <div className="mb-3 width-custom">
      <Label htmlFor={'formFile'} className={'form-label mt-4'} label={'Image of Product'} />
      <input className={props.className} type={props.type} id={props.id} />
    </div>
  );
};

export default File;
