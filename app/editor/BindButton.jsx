'use client';

import React from 'react'
import { Button } from 'primereact/button';
import ActionTable from 'app/editor/ActionTable.jsx'
import { SelectedEditorActionContext, SelectedActionContext } from '@components/Provider';
import { useContext } from 'react';
const BindButton = (props) => {
    const { selectedAction, setSelectedAction } = useContext(SelectedActionContext);
    const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext);


    const getSelectedAction = () => {
        console.log(ActionTable.selectedCustomers)
        return (
            ActionTable.selectedCustomers
        );
    }
    const inputBindButton = () => {
        setSelectedInputs("NOT DEFAULT");
    }

    const toUpperCase = (string) => {
        return (string.toUpperCase())
    }


    return (
        <Button
            id="bindButton"



            onClick={() => {
                console.log("clicked");
                inputBindButton();
            }}>
            {selectedEditorInput} Bind to:  {selectedAction}
        </Button>)
}

export default BindButton