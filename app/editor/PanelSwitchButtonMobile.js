'use client';

import React from 'react'
import { Button } from 'primereact/button';
import { SelectedEditorActionContext, SelectedActionContext } from '@components/Provider';
import { useContext, useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import clsx from 'clsx';
import { ShowEditorPanelContext, ShowViewerPanelContext } from '@components/Provider';
import Editor from './InputEditor';

// import {fetchMappings} from '@app/editor/utils.js'
const PanelSwitchButtonMobile = ({ whatPanel }) => {
    const { selectedAction, setSelectedAction } = useContext(SelectedActionContext);
    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext);

    const { showViewerPanel, setshowViewerPanel } = useContext(ShowViewerPanelContext);
    const { showEditorPanel, setshowEditorPanel } = useContext(ShowEditorPanelContext);

    //   console.log(fetchMappings(session?.user));  

    const toUpperCase = (string) => {
        return (string.toUpperCase())
    }

    const switchPanels = () => {

        // if (document.getElementById("viewerPanel").style.display !== "none" ) {
        // document.getElementById("panelSwitchButtonViewer").style.display = "none";
        document.getElementById("viewerPanel").style.display = "none";
        // }

    }

    const getVisibility = (panel) => {
        switch (panel) {
            case "editor":
                return (false)
                break;

            case "viewer":
                return (true)
                break;
            default:
                break;
        }
    }

    const onClickViewerPanel = () => {

    }

    const getButtonText = (whatPanel) => {
        switch (whatPanel) {
            case "editor":
                return (" Editor ")
                break;

            case "viewer":
                return (" Viewer ")
                break;
            default:
                break;
        }
    }

    return (
        <div className="mobilePanelSwitchButton"        >
            <Button className='switchButton'
                onClick={() => {
                    if (whatPanel == "viewer") {
                        setshowEditorPanel(true);
                        setshowViewerPanel(false)
                    }
                    if (whatPanel == "editor") {
                        setshowEditorPanel(false);
                        setshowViewerPanel(true)
                    }


                    console.log("EDITOR SHOWING???? " + showEditorPanel);
                }}>
                {/* {JSON.stringify(fetcthed)} */}
                Switch to {getButtonText(whatPanel)} Panel
            </Button>
        </div>

    )
}

export default PanelSwitchButtonMobile