import React from 'react'
import RightIcon from 'public/assets/icons/actions/input_right.svg';
import ActionList from '@components/ActionList';

const Right = ({ action_id, inputName_id }) => {
  return (

    <div className="input-right-absolute ">
      <div className="ui-corners mt-2.5">
        <div className='square_contain'>
          <div className='w-40px h-40px '>
            <RightIcon />
          </div>
        </div>
      </div>
      <div className='flex flex-col w-[102px] '>
        <div className="input-label input-name mt-[4px]">
          <div className="text-wrapper text-left">HAT RIGHT</div>
        </div>
        <div className="action-list">
          <ActionList action_id="MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)" input_direction="right" />
        </div>
      </div>

    </div>



  )
}

export default Right