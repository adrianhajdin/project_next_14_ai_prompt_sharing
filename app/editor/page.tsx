'use client'
import CloseButton from 'public/assets/icons/generic/button_close.svg'
import IconLegend from '@components/generic/IconLegend';
import React from 'react'

import InputEditor from './InputEditor';
import InputViewer from './InputViewer'
const page = () => {
  const action = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
  const inputName = "HAT UP"

  return (

<section className='flex flex-row'>
<InputViewer/>

<InputEditor/>

</section>


  )
}

export default page