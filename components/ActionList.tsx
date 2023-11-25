import React from 'react'
import Action from './GameAction'
import { clsx } from 'clsx'

const ActionList = ({action_id, input_direction}) => {
  // action_id = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)";

  const classNames = clsx({
    "action-list-left": input_direction == "left",
    "action-list-right": input_direction == "right",

    "action-list": input_direction == undefined || null || "up"
  });

  return (
    <div className={classNames}>
      <Action action_id={action_id} layer={"1"} input_direction={input_direction}/>
      <Action action_id={action_id} layer={"2"} input_direction={input_direction}/>
      <Action action_id={action_id} layer={"3"} input_direction={input_direction}/>

    </div>
  )
}

export default ActionList