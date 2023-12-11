import React from 'react'
import Images from "./images/Images";


const Content = ({selectType}) => {

  return (
    <div className='contents-container'>
        <Images selectType={selectType}/>
    </div>
  )
}

export default Content