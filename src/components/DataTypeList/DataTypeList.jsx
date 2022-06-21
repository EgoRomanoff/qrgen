import React from 'react'
import cl from './DataTypeList.module.scss'

const DataTypeList = ({ formsArr, setFormType }) => {

  const openForm = e => setFormType(formsArr.find(item => item.id === e.target.id))
  
  return (
    <aside className={ cl.dataType }>
  
      <ul className={ cl.dataType__list }>

        { formsArr.map(item =>
          <li
            className={ cl.dataType__item }
            id={ item.id }
            key={ item.id }
            onClick={ openForm }
          >
            { item.title }
          </li>
        ) }
    
      </ul>
      
    </aside>
  )
}

export default DataTypeList

