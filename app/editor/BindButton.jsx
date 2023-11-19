'use client';
import React from 'react'
import { Button } from 'primereact/button';
import ActionTable from 'app/editor/ActionTable.jsx'
const BindButton = (props, selectedModLayer, selectedGameBind) => {


    const getSelectedAction = () => {
        console.log(ActionTable.selectedCustomers)
        return (
            ActionTable.selectedCustomers
        );
    }

    return (
        <butto id="BindButton" onClick={getSelectedAction()}>  BindButton</Button>
    )
}

export default BindButton