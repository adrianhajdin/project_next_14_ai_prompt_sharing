import React from 'react'
import Press from 'public/assets/icons/actions/input_up.svg';
import ActionList from '@components/ActionList';

const Up = ({layers, name}) => {

  console.log("NAME:" + name);
  


  return (

    <div className="input-up-absolute ">

      <div className="input-label input-name ">
        <div className="text-wrapper">{name}</div>
      </div>
      <div className="action-list ">
      <ActionList layers={layers} input_direction ={null}/>

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