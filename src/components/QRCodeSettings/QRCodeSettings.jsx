// import React, { useEffect, useState } from 'react'
import cl from './QRCodeSettings.module.scss'
import InputNumber from './InputGeneral/InputNumber'
// import QRCodeStyling from 'qr-code-styling'
import InputColor from './InputColor/InputColor'
import InputList from './InputList/InputList'

const QRCodeSettings = ({ qrCode }) => {

  return (
    <div className={ cl.settings }>
      <h3 className={ cl.settings__title }>Настройки</h3>

      <div className={ cl.settings__section }>
        <span className={ cl.section__title }>Общие</span>

        <div className={ cl.section__inputs }>

          <InputNumber
            label='Ширина'
            id='width'
            option='width'
            qrCode={ qrCode }
          />

          <InputNumber
            label='Высота'
            id='height'
            option='height'
            qrCode={ qrCode }
          />

          <InputNumber
            label='Отступ'
            id='margin'
            option='margin'
            qrCode={ qrCode }
          />

        </div>

      </div>

      <div className={ cl.settings__section }>
        <span className={ cl.section__title }>Точки</span>
        <div className={ cl.section__inputs }>

          <InputColor
            label='Цвет'
            id='color'
            optionClass='dotsOptions'
            option='color'
            qrCode={ qrCode }
          />

          <InputList
            label='Стиль'
            id='dots-type'
            optionClass='dotsOptions'
            option='type'
            qrCode={ qrCode }
          />

        </div>

      </div>

    </div>
  )
}

export default QRCodeSettings