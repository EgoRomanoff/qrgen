import cl from '../QRCodeSettings.module.scss'

const InputColor = ({ label, id, optionClass = undefined, option, qrCode }) => {
  // console.log(qrCode._options.type);
  const onChangeHandler = (optionClass, option, e) => {
    if (optionClass) {
      qrCode.update({
        [optionClass]: {
          [option]: e.target.value
        }
      })
    } else {
      qrCode.update({ [option]: e.target.value })
    }
  }

  return (
    <div className={ cl.input__wrapper }>
      <label htmlFor={ id }>
        { label }
      </label>
      <input
        type='color'
        id={ id }
        className={ `${cl.settings__input} ${cl.input_color}` }
        defaultValue={ qrCode._options.dotsOptions[id] }
        onChange={ e => onChangeHandler(optionClass, option, e) }
      />
    </div>
  )
}

export default InputColor