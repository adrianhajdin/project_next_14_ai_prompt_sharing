'use client';
import { useContext, createContext, useState } from 'react';
import { SessionProvider } from "next-auth/react";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact-sass-theme-9.6.2/themes/mytheme/theme.scss';

export const SelectContext = createContext();
export const Context = createContext(null);


const globalContext = {
  currentButtonSelection: "Circle Switch",
  availableDeviceInputs: {

    'circleSwitch': {
      'name': 'Circle Switch',
      'inputNum': 0,

      'mappings': {
        'top': {
          'name': 'CIRCLE SWITCH UP',
          'layers': [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
          ]
        },



        'left': {
          'name': 'CIRCLE SWITCH LEFT',
          'layers': [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
            'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
          ]
        },
        'right': {
          'name': 'CIRCLE SWITCH UP',
          'layers': [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            'SECOND LAYER',
            'THIRD LAYER'
          ]
        },
        'bottom': {

          'name': 'CIRCLE SWITCH DOWN',
          'layers': [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            'SECOND LAYER',
            'THIRD LAYER'
          ]
        },
        'press': {

          'name': 'CIRCLE SWITCH PRESS',
          'layers': [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            'SECOND LAYER',
            'THIRD LAYER'
          ]
        },
      },

    },
  },
  'selectedInput': 'circleSwitch',
  'defaultInput': 'circleSwitch',

}

const Provider = ({ children, session }) => {
  const [selectedViewerInput, setSelectedViewerInput] = useState("Circle Switch");

  return (
    <SessionProvider session={session}>
      <PrimeReactProvider >
        <SelectContext.Provider value={{selectedViewerInput, setSelectedViewerInput}}>
          <Context.Provider value={globalContext}>

            {children}


          </Context.Provider>
        </SelectContext.Provider>

      </PrimeReactProvider>
    </SessionProvider>)
}

export default Provider



