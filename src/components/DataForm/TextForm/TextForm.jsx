import React, { useEffect } from 'react'
import cl from '../DataForm.module.scss'

const TextForm = ({ data, setData }) => {

  // TODO: Настроить кодирование кириллицы в qr коде

  return (
    <div className="textForm">
      <div className={cl.input__wrapper}>
        <label className={cl.input__label}>Введите текст</label>
        <textarea
          className={cl.input__textarea}
          rows="4"
          placeholder="Это текст, для которого я хочу сделать QR-код"
          onChange={ e => {
            setData(e.target.value)
          } }
          value={ data }
        />
      </div>
    </div>
  )
}

export default TextForm