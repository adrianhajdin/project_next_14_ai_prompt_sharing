'use client';

import React from 'react'
import { Button } from 'primereact/button';
import { SelectedEditorActionContext, SelectedActionContext } from '@components/Provider';
import { useContext, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// import {fetchMappings} from '@app/editor/utils.js'
const BindButton = (props) => {
    const { selectedAction, setSelectedAction } = useContext(SelectedActionContext);
    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext);

    const [fetcthed, setfetcthed] = useState();
    const { data: session } = useSession();


    //   console.log(fetchMappings(session?.user));  

    const toUpperCase = (string) => {
        return (string.toUpperCase())
    }

    const fetchDeviceProfiles = async () => {
        console.log( selectedAction);

        const response = await fetch("/api/deviceProfiles/bindButton", {
            method: "PATCH",
            body: JSON.stringify({
                userId: session?.user.id,
                selectedInput: selectedEditorInput,
                selectedAction: selectedAction

            })
        });

        const data = await response.json();
        console.log(JSON.stringify(data));

        // setTop(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["top"]);
        // setbottom(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["bottom"]);
        // setLeft(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["left"]);
        // setRight(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["right"]);
        // setPress(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons[selectedButton]?.["press"]);
        // setfetcthed(data?.deviceProfiles?.deviceProfiles.saved["VKB_GLADIATOR_EVO"]?.buttons["circleSwitch"]?.["top"]);
      
        // setfetcthed(data?.deviceProfiles?.deviceProfiles.);

    };

    //rehydrate when another input is selected

    return (
        <Button
            id="bindButton"



            onClick={async () => {
                await fetchDeviceProfiles();
                // console.log(selectedEditorInput);
            }}>
            {/* {JSON.stringify(fetcthed)} */}
          {selectedEditorInput.name}  Bind to:  {selectedAction}
        </Button>)
}

export default BindButton