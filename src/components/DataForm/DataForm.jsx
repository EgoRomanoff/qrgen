import React, { useState, useEffect } from 'react'
import cl from './DataForm.module.scss'
import TextForm from './TextForm/TextForm'
import LinkForm from './LinkForm/LinkForm'

const DataForm = ({ currentForm, data, setData }) => {

  // clear data when form has changed
  useEffect(() => {
    setData('')
  }, [currentForm.id])

  // render certain form when DataTypeList's item has clicked
  const renderForm = () => {
    switch(currentForm.id) {
      case 'text':
        return <TextForm data={ data } setData={ setData }/>
        break
      case 'link':
        return <LinkForm data={ data } setData={ setData }/>
        break
    }
  }

  return (
    <div className={cl.dataForm}>

      <h3 className={cl.dataForm__title}>
         { currentForm.title }
      </h3>

      <p className={cl.dataForm__description}>
        { currentForm.description }
      </p>

      { renderForm() }

    </div>
  )
}

export default DataForm