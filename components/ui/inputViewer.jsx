
import React from 'react'
import Hat from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/Hat.jsx';
import Up from '@components/inputs/Up';
import Left from '@components/inputs/Left';
import Right from '@components/inputs/Right';
import { useContext } from 'react';
import { SelectContext } from '@components/Provider.tsx'
import CircleSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/CircleSwitch.jsx';
import Press from '@components/inputs/Press';
import Down from '@components/inputs/Down';
// import CircleSwitch from '@public/assets/VKB/input3.svg'
const InputViewer = ({ selectedButton }) => {
    const inputName = "HAT UP";
    const action = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)";
    const selectedContext = useContext(SelectContext);



    const ButtonName = selectedContext.availableDeviceInputs.circleSwitch.name;
    const top = selectedContext.availableDeviceInputs.circleSwitch.mappings['top'];
    const bottom = selectedContext.availableDeviceInputs.circleSwitch.mappings['bottom'];
    const left = selectedContext.availableDeviceInputs.circleSwitch.mappings['left'];
    const right = selectedContext.availableDeviceInputs.circleSwitch.mappings['right'];
    const press = selectedContext.availableDeviceInputs.circleSwitch.mappings['press'];

    // console.log(top);
    const getSelectedInput = (mappings) => {
        mappings.map((component, index) => {
            // console.log("CURRENT COMPONENT:/n" + Object.values(component));
            switch (component) {
                case ("Circle Switch"):

                    return (<CircleSwitch />
                    )

                    break;

                case ("hat"):
                    return (<Hat />

                    )
                    break;
                default:
                    return (<Hat></Hat>)
                    break;
            }
            // turn JSON into component
        })
    }

    const getSelectedInputIcon = (ButtonName) => {

        switch (ButtonName) {
            case ("Circle Switch"):

                return (<CircleSwitch />)

                break;

            case ('hat'):
                return (<Hat className="testCircle p-[10px]" />)
                break;

            default:
                return (<Hat></Hat>)
                break;
        }

    }

    const getInputTop = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            console.log("TOP SLOT: " + input.layers['base']);
            return (<Up layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("TOP SLOT: UNDEFINED");


        }
    }

    const getInputLeft = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            console.log("TOP SLOT: " + input.layers['base']);
            return (<Left layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("LEFT SLOT: UNDEFINED");
        }
    }

    const getInputRight = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            console.log("TOP SLOT: " + input.layers['base']);
            return (<Right layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("RIGHT SLOT: UNDEFINED");
        }
    }

    const getInputPress = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            console.log("TOP SLOT: " + input.layers['base']);
            return (<Press layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("PRESS SLOT: UNDEFINED");
        }
    }

    const getInputBottom = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            console.log("BOTTOM SLOT: " + input.layers['base']);
            return (<Down layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("PRESS SLOT: UNDEFINED");
        }
    }
    return (
        <div className="test2">
            {getInputTop(top)}
            {/* <Up inputName_id={inputName} action_id={action} /> */}
            {/* <Press inputName_id={inputName} action_id={action} /> */}
            <div className='input-down-press'>
            {getInputPress(press)}
            {getInputBottom(bottom)}

            </div>
            <div className=' left-center-right'>
                {/* <Left inputName_id={inputName} action_id={action} /> */}
                {getInputLeft(left)}

                {getSelectedInputIcon(selectedButton)}
                {/* <CircleSwitch className="" /> */}
                {/* <Hat></Hat> */}
                {getInputRight(right)}

                {/* <Right inputName_id={inputName} action_id={action} /> */}

            </div>





        </div>)
}

export default InputViewer