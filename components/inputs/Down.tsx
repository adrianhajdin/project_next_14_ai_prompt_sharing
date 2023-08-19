import React from 'react'
import DownIcon from 'public/assets/icons/actions/input_down.svg';
import ActionList from '@components/ActionList';


const Down = ({ action_id, inputName_id }) => {
  return (

    <div className="input-down-absolute ">
      <div className="ui-corners mt-2.5">
        <div className='square_contain'>
          <div className='w-40px h-40px '>
            <DownIcon />
          </div>
        </div>
      </div>
      <div className="input-label input-name mb-1">
        <div className="text-wrapper">{inputName_id}</div>
      </div>
      <div className="action-list ">
      <ActionList action_id={action_id}/>

      </div>
    </div>




  )
}

export default Down