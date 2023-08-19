import React from 'react'
import Press from 'public/assets/icons/actions/input_up.svg';
import ActionList from '@components/ActionList';

const Up = ({action_id, inputName_id}) => {
  return (

    <div className="input-up-absolute ">

      <div className="input-label input-name ">
        <div className="text-wrapper">{inputName_id}</div>
      </div>
      <div className="action-list ">
      <ActionList action_id={action_id}/>

      </div>

      <div className="ui-corners mt-2.5">
        <div className='square_contain'>
          <div className='w-40px h-40px '>
            <Press />
          </div>
        </div>
      </div>
    </div>




  )
}

export default Up