import React, { useState, useEffect } from 'react'
import './scss/App.scss'
import DataTypeList from './components/DataTypeList/DataTypeList'
import DataForm from './components/DataForm/DataForm'
import QRCodeSettings from './components/QRCodeSettings/QRCodeSettings'
import QRCodeResult from './components/QRCodeResult/QRCodeResult'
import QRCodeStyling from 'qr-code-styling'

function App() {

  // array of all data forms
  const formsArr = [
    { id: 'text', title: 'Текст', description: 'QR-код для любого текста' },
    { id: 'link', title: 'Ссылка', description: 'QR-код для URL-ссылки' },
    { id: 'wifi', title: 'Wi-Fi', description: 'QR-код для подключения к Wi-Fi сети' },
    { id: 'vcard', title: 'Контакт', description: 'QR-код для добавления нового контакта (vCard)' },
    { id: 'tel', title: 'Телефон', description: 'QR-код для набора номера телефона' },
    { id: 'sms', title: 'SMS', description: 'QR-код для отправки SMS' },
    { id: 'email', title: 'E-mail', description: 'QR-код для отправки email' },
    { id: 'event', title: 'Мероприятие', description: 'QR-код для добавления мероприятия в календарь' },
    { id: 'location', title: 'Местоположение', description: 'QR-код для отображения местоположения по координатам' },
    { id: 'zoom', title: 'Zoom', description: 'QR-код для подключения к Zoom-конференции' }
  ]

  // state for rendering certain form
  const [currentForm, setCurrentForm] = useState(formsArr[0])

  // data from form's inputs
  const [data, setData] = useState('')

  // Initialize new QR-code object
  const qrCode = new QRCodeStyling({
    width: 270,
    height: 270,
    margin: 15,
    type: "canvas",
    data: data,
    qrOptions: {
      typeNumber: 3,
      mode: 'Byte',
      errorCorrectionLevel: 'M',
    },
    dotsOptions: {
        color: "#000000",
        type: "squared"
        // type: "rounded"
        // type: "dots"
        // type: "rounded"
        // type: "classy-rounded"
    },
    backgroundOptions: {
        color: "#ffffff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 10
    }
  })

  useEffect(() => {
    qrCode.update({ data: data })
  }, [data])

  return (
    <main>
      <div className="container">
        <div className="generator">

          <DataTypeList
            formsArr={ formsArr }
            setFormType={ setCurrentForm }
          />

          <DataForm
            currentForm={ currentForm }
            data={ data }
            setData={ setData }
          />

          <QRCodeSettings
            qrCode={ qrCode }
          />

          <QRCodeResult
            data={ data }
            qrCode={ qrCode }
          />

        </div>
      </div>
    </main>
  );
}

export default App;
