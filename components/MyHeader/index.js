import React from 'react'

const MyHeader = ({title}) => {
  return (
    <div className='my_header'>
        <span>
        {title}
        </span>
        <span className='my_header_line'>

        </span>
    </div>
  )
}

export default MyHeader