'use client';

import React from 'react'
import { Button } from 'primereact/button';
import { SelectedEditorActionContext, SelectedActionContext, SelectedLayerContext } from '@components/Provider';
import { useContext, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { ShowEditorPanelContext, ShowViewerPanelContext } from '@components/Provider';

// import {fetchMappings} from '@app/editor/utils.js'
const BindButton = (props) => {
    const { selectedAction, setSelectedAction } = useContext(SelectedActionContext);
    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext);
    const { selectedLayer, setSelectedLayer } = useContext(SelectedLayerContext)

    const [fetcthed, setfetcthed] = useState();
    const { data: session } = useSession();


    //   console.log(fetchMappings(session?.user));  

    const toUpperCase = (string) => {
        return (string.toUpperCase())
    }
    const selectedLayerNum = Number(selectedLayer) - 2;
    const fetchDeviceProfiles = async () => {
        console.log(selectedAction);

        const response = await fetch("/api/deviceProfiles/bindButton", {
            method: "PATCH",
            body: JSON.stringify({
                userId: session?.user.id,
                selectedInput: selectedEditorInput,
                selectedAction: selectedAction,
                selectedLayer: selectedLayerNum

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
        <div className='flex flex-col items-center justify-center self-center'>
            <div className='h-[27px] w-[27px] self-center'>
                <svg className='chevron' fill="#CEFCFF" viewBox="0 0 24 24" height="100%" width="100%" {...props}>
                    <path
                        fill="#CEFCFF"
                        d="M17.657 11.293l-1.414 1.414L12 8.464l-4.243 4.243-1.414-1.414L12 5.636l5.657 5.657z"
                    />
                    <path
                        fill="#CEFCFF"
                        d="M17.657 16.95l-1.414 1.414L12 14.12l-4.243 4.243-1.414-1.414L12 11.293l5.657 5.657z"
                    />
                </svg>
            </div>

            <Button
                id="bindButton"
                onClick={async () => {
                    await fetchDeviceProfiles();
                    // console.log(selectedEditorInput);
                }}>
                {/* {JSON.stringify(fetcthed)} */}
                <p className='bindBtn-input bind-text '>{" ' " + selectedAction + " ' "} </p>

                <p className=''> &nbsp;  Bind to: &nbsp; </p>
                <p className='bindBtn-input bind-text '>
                    {" ' " + selectedEditorInput.name + " ' "}  </p>
            </Button>
            <div className='h-[27px] w-[27px] rotate-180'>
                <svg className='chevron' fill="#CEFCFF" viewBox="0 0 24 24" height="100%" width="100%" {...props}>
                    <path
                        fill="#CEFCFF"
                        d="M17.657 11.293l-1.414 1.414L12 8.464l-4.243 4.243-1.414-1.414L12 5.636l5.657 5.657z"
                    />
                    <path
                        fill="#CEFCFF"
                        d="M17.657 16.95l-1.414 1.414L12 14.12l-4.243 4.243-1.414-1.414L12 11.293l5.657 5.657z"
                    />
                </svg>
            </div>
        </div>
    )
}

export default BindButton