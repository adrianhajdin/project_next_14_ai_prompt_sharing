'use client'
import CloseButton from 'public/assets/icons/generic/button_close.svg'
import IconLegend from '@components/generic/IconLegend';
import React from 'react'
// import CircleSwitch from '@public/assets/VKB/input3.svg'
import CircleSwitch from 'components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/CircleSwitch.svg';
import { SelectContext, Context, SelectedEditorActionContext } from '@components/Provider.jsx';
import InputTableMobile from '@app/editor/InputTableMobile.jsx'
import LayerChip from '@components/generic/LayerChip';
import InputViewer from '@components/ui/inputViewer.jsx'
import { useContext, useState } from 'react';
import PanelSwitchButtonMobile from '@app/editor/PanelSwitchButtonMobile.js'

const Editor = ({show}) => {


  const {selectedViewerInput, setSelectedViewerInput} = useContext(SelectContext)
  const {selectedEditorInput, setSelectedEditorInput} = useContext(SelectedEditorActionContext)

  // setSelectedViewerInput("Circle Switch");
  console.log("selectedViewerInput: " + selectedViewerInput);
  // console.log("SelectContext: " + SelectContext);
  // const [isOpen, setIsOpen] = useState(false);
  return (


    <div  className='test '>
      <div className='flex space-between flex-row  w-full'>
        <button >
          <CloseButton className='button1' />
        </button>
        <div className='w-full flex flex-row justify-end mr-[10px]'>
          <IconLegend />
        </div>
      </div>


      <div className='text-input-title'>
      <p className='text-base ml-[0px]'></p>

        <p className='text-input-title corner-test '>BUTTON INPUTS{selectedViewerInput.button}</p>
      </div>
      <InputTableMobile onInputSelect={selectedViewerInput} />

      <div className='flex flex-col gap-[7px]'>
        <p className='text-base self-start'>// MODIFIER LAYERS</p>
        <div className='flex flex-row gap-[10px]'>
        <LayerChip layer="0" />

          <LayerChip layer="1" />
          <LayerChip layer="2" />
        </div>


      </div>

      {/* <div className="test2">
          <Up inputName_id={inputName} action_id={action}  > </Up>
          <Left />
          <Right />
          <DownPress inputName_id={inputName} action_id={action} />
          <div className="hat">
            <Hat />
          </div>
      </div> */}

      <InputViewer selectedButton={selectedViewerInput} />
      {/* <CircleSwitch /> */}


    </div>


  )
}

export default Editor