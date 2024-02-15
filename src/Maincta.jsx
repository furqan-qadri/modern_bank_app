import React from 'react'

function Maincta(props) {
  return (
    <button className='p-4 rounded-full bg-green-500' onClick={props.onClick}>
        {props.text}
    </button>
  )
}

export default Maincta