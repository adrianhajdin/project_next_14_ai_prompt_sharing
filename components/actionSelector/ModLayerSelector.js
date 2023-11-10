import React from 'react'
import LayerChip from 'components/generic/LayerChip.tsx';
import { get } from 'mongoose';
import { useState } from 'react';

const ModLayerSelector = (props) => {
    const modLayersLength = 2;

    const [chips, setChips] = useState([])

    const getAllChips = (props) => {
        let arr = [];
        let i = 0;
        try {
            for (let i = 0; i < modLayersLength; i++) {
                arr.push(modChipTemplate(i));
            }
            return
        } catch (error) {
            console.log(error)
        }


        return aggregateChips;
    }






    return (
        <section>
            <p>// Select Modifier Layer</p>
            <div className='flex flex-row'>

                <LayerChip layer="1" isButton='false' />
                <LayerChip layer="2" isButton='true' />


            </div>
        </section>
    )
}

export default ModLayerSelector