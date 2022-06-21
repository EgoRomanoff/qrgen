import React, { useEffect } from 'react'
import cl from '../DataForm.module.scss'

const LinkForm = ({ data, setData }) => {
  return (
    <div className="linkForm">
      <div className={cl.input__wrapper}>
        <label className={cl.input__label}>Вставьте ссылку</label>
        <input
          className={cl.input__text}
          type="text"
          placeholder="https://example.com"
          onChange={ e => setData(e.target.value) }
          value={ data }
        />
      </div>
    </div>
  )
}

export default LinkForm