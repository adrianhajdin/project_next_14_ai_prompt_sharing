import React from 'react'
import PressIcon from 'public/assets/icons/actions/input_press.svg';
import ActionList from '@components/ActionList';

const Press = ({ layers, name }) => {
  console.log("HELLOOOOOOOOOOOOOOOOOOOOOO");
  
  return (

    <div className="input-press w-[222px] ">
      <div className="ui-corners mt-2.5">
        <div className='square_contain'>
          <div className='w-40px h-40px '>
            <PressIcon />
          </div>
        </div>
      </div>
      <div className="input-label input-name ">
        <div className="text-wrapper">{name}</div>
      </div>
      <ActionList layers={layers} input_direction={"press"}/>
    </div>




  )
}

export default Press