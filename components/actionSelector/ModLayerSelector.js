import React from 'react'
import LayerChip from 'components/generic/LayerChip.tsx';
import { get } from 'mongoose';
import { useState } from 'react';

const ModLayerSelector = (props) => {

    const layersToRender = [0, 1, 2]
    const getAllChips = (props) => {




        return layersToRender.map((index) => {

            return (
            <LayerChip layer={index.toString()} isButton='true' />
            )
        });
    }



    return (
        <section>
            <p>// Select Modifier Layer</p>
            <div className='flex flex-row'>

                {/* <LayerChip layer="1" isButton='true' />
                <LayerChip layer="2" isButton='true' /> */}
                {getAllChips()}

            </div>
        </section>
    )
}

export default ModLayerSelector