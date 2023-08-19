'use client'
import CloseButton from 'public/assets/icons/generic/button_close.svg'
import IconLegend from '@components/generic/IconLegend';
import React from 'react'
import Hat from '@components/Hat';
import Up from '@components/inputs/Up';
import Left from '@components/inputs/Left';
import DownPress from '@components/inputs/DownPress';
import Right from '@components/inputs/Right';
import LayerChip from '@components/generic/LayerChip';

const Editor = () => {
  const action = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
  const inputName = "HAT UP"

  return (


    <div className='test'>
      <div className='flex space-between flex-row  w-full'>
        <button >
          <CloseButton className='button1' />
        </button>
        <div className='w-full flex flex-row justify-end mr-[10px]'>
          <IconLegend />
        </div>


      </div>


      <div className='text-input-title'>
        <p className='text-input-title corner-test '>HAT_1</p>
      </div>
      <div className='flex flex-col gap-[7px]'>
        <p className='text-base self-start'>// MODIFIER LAYERS</p>
        <div className='flex flex-row gap-[10px]'>
          <LayerChip layer="1" />
          <LayerChip layer ="2" />
        </div>


      </div>

      <div className="test2">
        <Up inputName_id={inputName} action_id={action}  > </Up>
        <Left />
        <Right />
        <DownPress inputName_id={inputName} action_id={action} />
        <div className="hat">
          <Hat />
        </div>


      </div>
    </div>


  )
}

export default Editor