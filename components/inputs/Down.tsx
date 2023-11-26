import React from 'react'
import DownIcon from 'public/assets/icons/actions/input_down.svg';
import ActionList from '@components/ActionList';
import PressIcon from 'public/assets/icons/actions/input_press.svg';


const Down = ({ layers, name }) => {
  return (

    <div className="input-down ">
    <div className="ui-corners mt-2.5">
      <div className='square_contain'>
        <div className='w-40px h-40px '>
        <DownIcon />
        </div>
      </div>
    </div>
    <div className="input-label input-name mb-1">
      <div className="text-wrapper"> {name} </div>
    </div>
    <ActionList layers={layers} input_direction={"dasdas"} />
  </div>



  )
}

export default Down