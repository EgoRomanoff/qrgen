import cl from '../QRCodeSettings.module.scss'

const InputNumber = ({ label, id, optionClass = undefined, option, qrCode }) => {
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
        type='number'
        min='0'
        max='2000'
        id={ id }
        className={ `${cl.settings__input} ${cl.input_number}` }
        defaultValue={ qrCode._options[option] }
        onChange={ e => onChangeHandler(optionClass, option, e) }
      />
    </div>
  )
}

export default InputNumber