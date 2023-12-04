'use client'
import CloseButton from 'public/assets/icons/generic/button_close.svg'
import IconLegend from '@components/generic/IconLegend';
import React from 'react'
import ActionTable from '@app/editor/ActionTable'
import InputTable from '@app/editor/InputTable'
import { SelectContext } from '@components/Provider';
import LayerChip from '@components/generic/LayerChip';
import ModLayerSelector from '@components/actionSelector/ModLayerSelector.js';
import BindButton from '@app/editor/BindButton.jsx'
import { createContext, useContext, useState } from 'react';



const Editor = () => {
  const [selectedInput, setSelectedInput] = useState("CONTEXT INPUT: DEFAULT");
  const [selectedAction, setSelectedAction] = useState("CONTEXT ACTION: DEFAULT")
  const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)

  const renderBindButton = () => {

    return (
      <BindButton selectedAction={selectedAction} selectedInput={selectedInput} />
    );
  }

  // useEffect(() => {
  //   renderBindButton();


  // }, [selectedInput, selectedAction])

  return (


    <div className='panel-default'>
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
          <LayerChip layer="2" />
        </div>


      </div>

      <div className="panel-inset flex flex-col gap-[16px]">

        <InputTable
          onInputSelect={setSelectedInput}
        />

        <ModLayerSelector />

        <BindButton selectedAction={setSelectedAction} selectedInput={setSelectedAction} />
        {/* {renderBindButton()} */}
        {/* <ActionTable type="actions" /> */}
        <ActionTable onActionSelect={setSelectedAction} />

        {/* <BindTable /> */}
      </div>
    </div>


  )
}

export default Editor