'use client';

import React from 'react'
import { Button } from 'primereact/button';
import ActionTable from 'app/editor/ActionTable.jsx'
const BindButton = ({ selectedAction, selectedInput }) => {
const action = selectedAction;
const input = selectedInput;

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
            {action} Bind to:  {input}
        </Button>)
}

export default BindButton