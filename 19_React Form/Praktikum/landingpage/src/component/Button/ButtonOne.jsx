const ButtonOne = ({label, classNameButton}) => {
    return (
        <div className={classNameButton}>
            <a href="#" className="button">
              {label}
            </a>
        </div>
    )
}

export default ButtonOne