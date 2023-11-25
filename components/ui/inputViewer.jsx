
import React from 'react'
import Hat from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/Hat.jsx';
import Up from '@components/inputs/Up';
import Left from '@components/inputs/Left';
import DownPress from '@components/inputs/DownPress';
import Right from '@components/inputs/Right';
import CircleSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/CircleSwitch.jsx';
import { ReactSVG } from 'react-svg'
import { SVGInjector } from '@tanem/svg-injector'
// import CircleSwitch from '@public/assets/VKB/input3.svg'
const InputViewer = (props) => {

    const inputName = "HAT UP";
    const action = "MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)";

    return (
        <div className="test2">

            <Up inputName_id={inputName} action_id={action} />

            <DownPress inputName_id={inputName} action_id={action} />
            <div className=' left-center-right'>
                <Left inputName_id={inputName} action_id={action} />


                <div className="testCircle p-[5px]  ">
                    <CircleSwitch className="" />
                    {/* <Hat></Hat> */}

                </div>
                <Right inputName_id={inputName} action_id={action} />

            </div>





        </div>)
}

export default InputViewer