'use client'
import CloseButton from 'public/assets/icons/generic/button_close.svg'
import IconLegend from '@components/generic/IconLegend';
import React from 'react'
import Device_VKB_SpaceEvo from '@components/Device_VKB_SpaceEvo';
import InputEditor from './InputEditor';
import InputViewer from './InputViewer'
const page = () => {
  const action = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
  const inputName = "HAT UP"

  return (

    <section className='editor-container'>
      <InputViewer />

      <div className= 'device-container' >
        <Device_VKB_SpaceEvo className="min-w-[330px]" />
      </div>
      <InputEditor />

    </section>


  )
}

export default page