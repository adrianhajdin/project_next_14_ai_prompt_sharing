"use client";
import { useContext, createContext, useState, useEffect } from "react";
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
  const [profileContext, setprofileContext] = useState(globalContext);


  useEffect(() => {
    const fetchDeviceProfiles = async () => {

      const response = await fetch("/api/deviceProfiles", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id
        })
      });

      const data = await response.json();
      // console.log("INPUT VIEWER !!!!!!!!!!!" + JSON.stringify(data[0].deviceProfiles.deviceProfiles.saved["VKB_GLADIATOR_EVO"].buttons["circleSwitch"]?.["top"]));
      // console.log("FETCHED RESPONSE: " + JSON.stringify(data));
      // console.log("!!!!!!!!!!!! FETCHED RESPONSE: " + JSON.stringify(data.deviceProfiles));

      // console.log("PARSED & STRINGED RESPONSE: " + JSON.parse(JSON.stringify(data[0].deviceProfiles.deviceProfiles)));
      // console.log("RAW RESPONSE: " + JSON.stringify(data[0].deviceProfiles.deviceProfiles.saved["VKB_GLADIATOR_EVO"].buttons[selectedButton]?.["top"]));
      // console.log("FETCHED DEVICEPROFILES: " + data);
      // setTop(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["top"]);
      // setbottom(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["bottom"]);
      // setLeft(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["left"]);
      // setRight(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["right"]);
      // setPress(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["press"]);
    };

    fetchDeviceProfiles();
    //rehydrate when another input is selected
  }, [])

  return (
    <SessionProvider session={session}>
      <PrimeReactProvider >
        <SelectContext.Provider value={{ selectedViewerInput, setSelectedViewerInput }}>
          <Context.Provider value={{ profileContext, setprofileContext}}>
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



