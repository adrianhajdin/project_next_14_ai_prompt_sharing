'use client';
import {toJson} from '@reis/mongoose-to-json'

import React from 'react'
import { Button } from 'primereact/button';
import { SelectedEditorActionContext, SelectedActionContext } from '@components/Provider';
import { useContext, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// import {fetchMappings} from '@app/editor/utils.js'
const BindButton = (props) => {
    const { selectedAction, setSelectedAction } = useContext(SelectedActionContext);
    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext);

    const [profile, setProfile] = useState();
    const { data: session } = useSession();

   
//   console.log(fetchMappings(session?.user));  


    const inputBindButton = () => {
        console.log(session?.user.id);

    }
    const fetchDeviceProfiles = async () => {
        console.log("FETCHED DEVICEPROFILES BEFORE: ");

        const response = await fetch("/api/deviceProfiles");

        const data = await response.json();
        // console.log("FETCHED RESPONSE: " + JSON.stringify(data));
        // console.log("PARSED & STRINGED RESPONSE: " + JSON.parse(JSON.stringify(data[0].deviceProfiles.deviceProfiles)));
        // console.log("RAW RESPONSE: " + JSON.stringify(data[0].deviceProfiles.deviceProfiles.saved["VKB_GLADIATOR_EVO"].buttons[selectedEditorInput]));


        // console.log("FETCHED DEVICEPROFILES: " + data);

        return setProfile(data[0].deviceProfiles.saved);
      };

    

    const toUpperCase = (string) => {
        return (string.toUpperCase())
    }


    return (
        <Button
            id="bindButton"



            onClick={async () => {
                await fetchDeviceProfiles();
                // console.log(selectedEditorInput);
            }}>
                {JSON.stringify(profile)}
            {/* {selectedEditorInput} Bind to:  {selectedAction} */}
        </Button>)
}

export default BindButton