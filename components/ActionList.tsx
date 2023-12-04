"use client";

import React from 'react'
import Action from './GameAction'
import { clsx } from 'clsx'
import { useContext , useEffect } from 'react';

import { SelectContext } from '@components/Provider';
const ActionList = ({ layers, input_direction }) => {
  // action_id = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)";
  const data = useContext(SelectContext);
  const classNames = clsx({
    "action-list-left": input_direction == "left",
    "action-list-right": input_direction == "right",

    "action-list": input_direction !== "left" || "right" 
  });

 

  const getSelectedInput = (array) => {
    return (
      array?.map((component, index) => {
        // console.log("INDEX:  " + index + " |   CURRENT COMPONENT: " + component);

        return (
          <Action action_id={component} layer={index} input_direction={input_direction} />
        )

      })
    )

  }


  return (
    <div className={classNames}>
      {/* <Action action_id={action_id} layer={"1"} input_direction={input_direction}/>
      <Action action_id={action_id} layer={"2"} input_direction={input_direction}/>
      <Action action_id={action_id} layer={"3"} input_direction={input_direction}/> */}
      {getSelectedInput(layers)}
    </div>
  )
}

export default ActionList