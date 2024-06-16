import './CustomInput.scss'

function CustomInput({title, placeholder}) {
  return (
    <label className="custom-input">
      <p>{title}</p>
      <input type="text" placeholder={placeholder}/>
    </label>
  )
}

function CustomRadio({title, radio, inputName}) {
  return (
    <label className="custom-radio">
      {title}
      <div className="custom-radio__container">
        {
          radio.map((item, key) => (
            <label key={key}>
              <input type="radio" name={inputName}/>
              {item}
            </label>
          ))
        }
      </div>
    </label>
  )
}

export {CustomInput, CustomRadio}