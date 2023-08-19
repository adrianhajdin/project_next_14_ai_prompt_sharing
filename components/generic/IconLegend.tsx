import React from 'react'
import AxisIcon from "public/assets/icons/generic/axis.svg"

import BindIcon from "public/assets/icons/generic/bind.svg"
import LayerIcon from "public/assets/icons/generic/layer.svg"


const IconLegend = (props) => {



    return (
        <div className='flex flex-row gap-[14px]'>
            <div className='flex flex-col gap-[2px]'>
                <p className='text-legend-heading'> LAYERS</p>
                <div className='flex flex-row gap-[3px] content-center'>
                    <LayerIcon className="self-center w-[17px] h-[17px]" />
                    <p className='text-legend self-center'>9</p>
                </div>
            </div>
            <div className='flex flex-col gap-[2px]'>
                <p className='text-legend-heading'> AXIS</p>
                <div className='flex flex-row gap-[3px] content-center'>
                    <AxisIcon className="self-center w-[17px] h-[17px]" />
                    <p className='text-legend self-center'>9</p>
                </div>
            </div>
            <div className='flex flex-col gap-[2px]'>
                <p className='text-legend-heading'> BINDS</p>
                <div className='flex flex-row gap-[3px] content-center'>
                    <BindIcon className="self-center w-[17px] h-[17px]" />
                    <p className='text-legend self-center'>9</p>
                </div>
            </div>
        </div>


    )
}

export default IconLegend