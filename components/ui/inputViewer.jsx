"use client";

import React from 'react'
import Hat from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/Hat.jsx';
import Up from '@components/inputs/Up';
import Left from '@components/inputs/Left';
import Right from '@components/inputs/Right';
import { useContext, useState, useEffect } from 'react';
import { Context, SelectContext } from '@components/Provider.jsx'
import CircleSwitch from '@components/generic/Icons/VKB/GLADIATOR_SPACE_EVO/CircleSwitch.jsx';
import Press from '@components/inputs/Press';
import Down from '@components/inputs/Down';

import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const InputViewer = ({ selectedButton }) => {
    const { data: session } = useSession();
    const userId = {id: session?.user.id};
    console.log("USER ID: " + userId.id);
    const profileContext = useContext(Context);
    const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext);


    const [top, setTop] = useState();
    const [bottom, setbottom] = useState();
    const [left, setLeft] = useState();
    const [right, setRight] = useState();

    const [press, setPress] = useState();

    console.log("Selected BUTTON: " + selectedButton);
    useEffect(() => {
        const fetchDeviceProfiles = async () => {
            // console.log("FETCHED DEVICEPROFILES BEFORE: ");

            const response = await fetch("/api/deviceProfiles", {
                method: "POST",
                body: JSON.stringify({
                    userId: session?.user.id
                })
            } );

            const data = await response.json();
            // console.log("INPUT VIEWER !!!!!!!!!!!" + JSON.stringify(data[0].deviceProfiles.deviceProfiles.saved["VKB_GLADIATOR_EVO"].buttons["circleSwitch"]?.["top"]));
            // console.log("FETCHED RESPONSE: " + JSON.stringify(data));
            console.log("!!!!!!!!!!!! FETCHED RESPONSE: " + JSON.stringify(data.deviceProfiles));

            // console.log("PARSED & STRINGED RESPONSE: " + JSON.parse(JSON.stringify(data[0].deviceProfiles.deviceProfiles)));
            // console.log("RAW RESPONSE: " + JSON.stringify(data[0].deviceProfiles.deviceProfiles.saved["VKB_GLADIATOR_EVO"].buttons[selectedButton]?.["top"]));
            // console.log("FETCHED DEVICEPROFILES: " + data);
            setTop(data.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["top"]);
            setbottom(data.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["bottom"]);
            setLeft(data.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["left"]);
            setRight(data.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["right"]);
            setPress(data.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["press"]);

        };

        fetchDeviceProfiles();
        //rehydrate when another input is selected
    }, [selectedButton])


    const ButtonName = profileContext.deviceProfiles.saved["VKB_GLADIATOR_EVO"].profileName;

    // useEffect(async () => {
    //     const top = await fetchDeviceProfiles();
    //     setTop(top);

    // }, [selectContext])


    // const top = profileContext.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["top"];
    console.log("fetchDeviceProfiles: " + top);
    console.log("PARSED fetchDeviceProfiles: " + JSON.stringify(top));
    // const bottom = profileContext.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["bottom"];
    // const left = profileContext.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["left"];
    // const right = profileContext.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["right"];
    // const press = profileContext.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["press"];

    // console.log("CHILD SELECT: " + selectedButton);
    // setTop(fetchDeviceProfiles);

    const getSelectedInputIcon = (ButtonName) => {

        switch (ButtonName) {
            case ("circleSwitch"):

                return (<CircleSwitch />)
                break;

            case ('hatSwitch'):
                return (<Hat className="testCircle p-[10px]" />)
                break;

            default:
                return (<Hat></Hat>)
                break;
        }

    }

    const getInputTop = (input) => {
        //check if slot is undefined 
        console.log("getInputTop !!!!!!!!!!!" + JSON.stringify(input));
        console.log(" !!!!!!!!!!!" + input);

        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Up layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("TOP SLOT: UNDEFINED");
            return (<></>)

        }
    }

    const getInputLeft = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Left layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("LEFT SLOT: UNDEFINED");
            return (<></>)

        }
    }

    const getInputRight = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Right layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            console.log("RIGHT SLOT: UNDEFINED");
            return (<></>)

        }

    }

    const getInputPress = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("TOP SLOT: " + input.layers['base']);
            return (<Press layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            return (<></>)
            // console.log("PRESS SLOT: UNDEFINED");
        }
    }

    const getInputBottom = (input) => {
        //check if slot is undefined 
        if (input !== undefined) {
            // console.log("BOTTOM SLOT: " + input.layers['base']);
            return (<Down layers={input.layers} name={input.name} />);

            //else return the slot component
        } else {
            return (<></>)
            console.log("PRESS SLOT: UNDEFINED");
        }
    }
    return (
        <div className="test2">
            {getInputTop(top)
            }
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