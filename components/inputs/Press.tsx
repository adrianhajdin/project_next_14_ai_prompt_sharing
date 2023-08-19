import React from 'react'
import PressIcon from 'public/assets/icons/actions/input_press.svg';

import ActionList from '@components/ActionList';

const Press = ({ action_id, inputName_id }) => {
  return (

    <div className="input-press-absolute ">
      <div className="ui-corners mt-2.5">
        <div className='square_contain'>
          <div className='w-40px h-40px '>
            <PressIcon />
          </div>
        </div>
      </div>
      <div className="input-label input-name ">
        <div className="text-wrapper">{inputName_id}</div>
      </div>
      <ActionList action_id="xxxx"/>
    </div>




  )
}

export default Press