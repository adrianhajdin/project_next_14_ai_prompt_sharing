import React from 'react'
import DownIcon from 'public/assets/icons/actions/input_down.svg';
import ActionList from '@components/ActionList';
import LayerTag from 'components/generic/LayerTag.jsx';

const DownPress = ({layers, name}) => {

  return (

    <div className='input-down-press'>

      <div className="input-down  w-[222px]">
        <div className="ui-corners mt-2.5">
          <div className='square_contain'>
            <div className='w-40px h-40px '>
            <PressIcon />
            </div>
          </div>
        </div>
        <div className="input-label input-name mb-1">
          <div className="text-wrapper"> HAT PRESS </div>
        </div>
        <ActionList layers={layers} input_direction="press" />
      </div>

      <div className="input-press ">
        <div className="ui-corners mt-2.5">
          <div className='square_contain'>
            <div className='w-40px h-40px '>
            <DownIcon />
            </div>
          </div>
        </div>
        <div className="input-label input-name mb-1">
          <div className="text-wrapper">HAT DOWN</div>
        </div>
        <ActionList layers={layers} input_direction="press"/>

      </div>

    </div>


  )
}

export default DownPress