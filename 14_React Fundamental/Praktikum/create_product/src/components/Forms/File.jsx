import Label from './Label';

const File = ({ className, type, id }) => {
  return (
    <div className="mb-3 width-custom">
      <Label htmlFor={'formFile'} className={'form-label mt-4'} label={'Image of Product'} />
      <input className={className} type={type} id={id} />
    </div>
  );
};

export default File;
