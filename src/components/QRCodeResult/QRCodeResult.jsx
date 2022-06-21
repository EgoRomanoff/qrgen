import React, { useEffect, useRef, useState } from 'react'
import cl from './QRCodeResult.module.scss'
import QRCodeStyling from 'qr-code-styling'

const QRCodeResult = ({ data, qrCode }) => {

  const qrRef = useRef(null)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (data === '') {
      qrRef.current.innerText = 'Здесь появится Ваш QR-код'
      setIsDisabled(true)
    } else {
      qrCode.append(qrRef.current)
      setIsDisabled(false)
    }
  }, [data])

  const downloadQRCode = () => {
    qrCode.download({ name: "qr", extension: "svg" });
  }

  return (
    <div className={ cl.qrcode__result }>
      <div className={ cl.qrcode__wrapper }>
        <div
          className={ cl.qrcode__code }
          ref={ qrRef }
        ></div>
      </div>

      <button
        className={ cl.qrcode__btn }
        onClick={ downloadQRCode }
        disabled={ isDisabled }
      >
        Скачать
      </button>
    </div>
  )
}

export default QRCodeResult