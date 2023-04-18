import Label from './Label';

const File = ({ className, type, id, onChangeFile }) => {
  return (
    <div className="mb-3 width-custom">
      <Label 
        htmlFor={'formFile'} 
        className={'form-label mt-4'} 
        label={'Image of Product'} 
      />
      <input 
        className={className} 
        type={type} 
        id={id} 
        onChange={onChangeFile}
      />
    </div>
  );
};

export default File;
