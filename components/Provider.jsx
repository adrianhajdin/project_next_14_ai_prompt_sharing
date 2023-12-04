"use client";
import { useContext, createContext, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact-sass-theme-9.6.2/themes/mytheme/theme.scss";

export const SelectContext = createContext();
export const SelectedEditorActionContext = createContext();
export const SelectedInputContext = createContext();
export const SelectedActionContext = createContext();

export const Context = createContext(null);

const globalContext = {
  "deviceProfiles":
  {
    "saved":
    {
      "VKB_GLADIATOR_EVO": {
        "profileName": "TEST PROFILE",
        "name": "circleSwitch",
        "buttonNum": 2,
        "buttons": {
          "circleSwitch": {
            "top": {
              "name": "CIRCLE SWITCH UP",
              "layers": [
                "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
              ]
            },
            "bottom": {
              "name": "CIRCLE SWITCH DOWN",
              "layers": [
                "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                "SECOND LAYER",
                "THIRD LAYER"
              ]
            },
            "press": {
              "name": "CIRCLE SWITCH PRESS",
              "layers": [
                "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                "SECOND LAYER",
                "THIRD LAYER"
              ]
            },
            "left": {
              "name": "CIRCLE SWITCH LEFT",
              "layers": [
                "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
              ]
            },
            "right": {
              "name": "CIRCLE SWITCH UP",
              "layers": [
                "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
                "SECOND LAYER",
                "THIRD LAYER"
              ]
            }

          }
        }
      }


    }

  }

};
const globalContex1t = {
  availableDeviceInputs: {

    "circleSwitch": {
      "name": "Circle Switch",
      "inputNum": 0,

      "mappings": {
        "top": {
          "name": "CIRCLE SWITCH UP",
          "layers": [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
          ]
        },



        "left": {
          "name": "CIRCLE SWITCH LEFT",
          "layers": [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
          ]
        },
        "right": {
          "name": "CIRCLE SWITCH UP",
          "layers": [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "SECOND LAYER",
            "THIRD LAYER"
          ]
        },
        "bottom": {

          "name": "CIRCLE SWITCH DOWN",
          "layers": [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "SECOND LAYER",
            "THIRD LAYER"
          ]
        },
        "press": {
          "name": "CIRCLE SWITCH PRESS",
          "layers": [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "SECOND LAYER",
            "THIRD LAYER"
          ]
        },
      },

    },
    "hatSwitch": {
      "name": "Hat Switch",
      "inputNum": 0,

      "mappings": {
        "top": {
          "name": "HAT SWITCH UP",
          "layers": [
            "HAT TEST",
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
          ]
        },



        "left": {
          "name": "HAT SWITCH LEFT",
          "layers": [
            "HAT TEST",
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)"
          ]
        },
        "right": {
          "name": "HAT SWITCH UP",
          "layers": [
            "HAT TEST",
            "SECOND LAYER",
            "THIRD LAYER"
          ]
        },
        "bottom": {

          "name": "HAT SWITCH DOWN",
          "layers": [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "SECOND LAYER",
            "HAT TEST"
          ]
        },
        "press": {

          "name": "HAT SWITCH PRESS",
          "layers": [
            "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)",
            "SECOND LAYER",
            "THIRD LAYER"
          ]
        },
      },

    },
  },
  "selectedInput": "circleSwitch",
  "defaultInput": "circleSwitch",

}
SelectedActionContext
const Provider = ({ children, session }) => {
  const [selectedViewerInput, setSelectedViewerInput] = useState("Circle Switch");
  const [selectedAction, setSelectedAction] = useState("No Action Selected");
  const [selectedEditorInput, setSelectedEditorInput] = useState("No Input Selected");
  return (
    <SessionProvider session={session}>
      <PrimeReactProvider >
        <SelectContext.Provider value={{ selectedViewerInput, setSelectedViewerInput }}>
          <Context.Provider value={globalContext}>
            <SelectedActionContext.Provider value={{ selectedAction, setSelectedAction }}>
              <SelectedEditorActionContext.Provider value={{ selectedEditorInput, setSelectedEditorInput }}>
                {children}

              </SelectedEditorActionContext.Provider>

            </SelectedActionContext.Provider>

          </Context.Provider>
        </SelectContext.Provider>

      </PrimeReactProvider>
    </SessionProvider>)
}

export default Provider



