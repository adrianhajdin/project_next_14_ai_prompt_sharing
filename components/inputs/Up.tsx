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
      <ActionList action_id={JSON.stringify(action_id)} input_direction ={null}/>

      </div>

      <div className="ui-corners  square_contain">
        <div className='square_contain'>
            <Press />
        </div>
      </div>
    </div>




  )
}

export default Up