import cl from '../QRCodeSettings.module.scss'

const InputList = ({ label, id, optionClass = undefined, option, qrCode }) => {
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
      <select
        id={ id }
        className={ `${cl.settings__input} ${cl.input_list}` }
        defaultValue={ qrCode._options.dotsOptions[option] }
        onChange={ e => onChangeHandler(optionClass, option, e) }
      >
        <option value='square' label='Квадратные' />
        <option value='rounded' label='Округлые' />
        <option value='extra-rounded' label='Сильно округлые' />
        <option value='dots' label='Точки' />
        <option value='classy' label='Стильные' />
        <option value='classy-rounded' label='Стильно-закругленные' />
      </select>
    </div>
  )
}

export default InputList