import React from 'react'
import LeftIcon from 'public/assets/icons/actions/input_left.svg';
import ActionList from '@components/ActionList';

const Left = ({layers, name}) => {
  return (

    <div className="input-left-absolute ">
      <div className="ui-corners ">
        <div className='square_contain'>
          <div className='w-40px h-40px '>
            <LeftIcon />
          </div>
        </div>
      </div>
      <div className='flex flex-col w-[102px] '>
        <div className="input-label input-name mt-[4px]">
          <div className="text-wrapper text-right">{name}</div>
        </div>
        <div className="action-list">
        <ActionList layers={layers} input_direction ={"left"}/>
        </div>
      </div>

    </div>




  )
}

export default Left