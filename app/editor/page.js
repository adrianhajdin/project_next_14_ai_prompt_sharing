'use client'
import CloseButton from 'public/assets/icons/generic/button_close.svg'
import IconLegend from '@components/generic/IconLegend';
import React from 'react'
import Device_VKB_SpaceEvo from '@components/Device_VKB_SpaceEvo';
import InputEditor from './InputEditor';
import InputViewer from './InputViewer'
import { useState, useContext, useEffect } from 'react';
import { ShowEditorPanelContext, ShowViewerPanelContext } from '@components/Provider';
import clsx from 'clsx';

const page = () => {
  const action = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
  const inputName = "HAT UP"
  const { showViewerPanel, setshowViewerPanel } = useContext(ShowViewerPanelContext);
  const { showEditorPanel, setshowEditorPanel } = useContext(ShowEditorPanelContext);

  const [showInputEditor, setInputEditor] = useState(true);


  const editorPanelVisibility = clsx({
    'hidden': !showEditorPanel,
    'show': showEditorPanel,
  })
  const viewerPanelVisibility = clsx({
    'hidden': !showViewerPanel,
    'show': showViewerPanel
  })
  // useEffect(() => {

  //   const editorPanelVisibility = clsx({
  //     'hidden': showEditorPanel,
  //     'none': !showEditorPanel
  //   })
  //   const viewerPanelVisibility = clsx({
  //     'hidden': showViewerPanel,
  //     'none': !showViewerPanel
  //   })

  // }, [showEditorPanel, showEditorPanel])

  // const getEditor = () => {
  //   return (<Device_VKB_SpaceEvo className="min-w-[330px]" />
  //   )
  // }
  return (

    <section id="InputViewerPanel" className='editor-container' >
      <div  className={viewerPanelVisibility}>
        <InputViewer />


      </div>

      <div className='device-container' >
        <Device_VKB_SpaceEvo className="min-w-[330px]" />
      </div>
      <div id="InputEditorPanel" className={editorPanelVisibility}>
        <InputEditor />

      </div>

    </section>


  )
}

export default page