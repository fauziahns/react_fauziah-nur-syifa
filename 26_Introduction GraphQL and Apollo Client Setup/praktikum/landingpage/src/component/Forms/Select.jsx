import Label from "./Label"

const Select = ({classNameSelect, nameSelect, onChange, valueSelect, valueOptions}) => {
    return (
    <>
        <select
        className={classNameSelect}
        name={nameSelect}
        onChange={onChange}
        value={valueSelect}
        >
        {valueOptions?.map((item, key) => (
        <option value={item.value}>{item.label}</option>
        ))}
        </select>        
    </>
    )
}

export default Select