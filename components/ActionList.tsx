import React from 'react'
import Action from './Action'
import { clsx } from 'clsx'

const ActionList = (action_id, input_direction) => {
  // action_id = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)";

  const classNames = clsx({
    "action-list-left": action_id.input_direction == "left",
    "action-list-right": action_id.input_direction == "right",
    "action-list": action_id.input_direction == undefined || null
  });

  return (
    <div className={classNames}>
      <Action action_id={action_id.action_id} layer={"1"} input_direction={action_id.input_direction}/>
      <Action action_id={action_id.action_id} layer={"2"} input_direction={action_id.input_direction}/>
      <Action action_id={action_id.action_id} layer={"3"} input_direction={action_id.input_direction}/>

    </div>
  )
}

export default ActionList