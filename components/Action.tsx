import React from 'react'
import LayerTag from 'components/generic/LayerTag.jsx';
import clsx from 'clsx';
const Action = (action_id, layer, input_direction) => {
    // const [action, setAction] = useState(layer);

    const layerNumber = action_id.layer;
    // console.log("TTTTTTTTTTTTTTTTTT" + JSON.stringify(action_id));

    const actionTextClassNames = clsx({

        'text-modifier': true,

        'text-layer1': layerNumber == "1",
        'text-layer2': layerNumber == "2",
        'text-layer3': layerNumber == "3",

        'default': action_id.input_direction !== "left" || "right",
        'left': action_id.input_direction == "left",
        'right': action_id.input_direction == "right",


    });

    const actionDirectionClassNames = clsx({

        'text-modifier flex gap-[5px] place-content-between w-full self-start': input_direction !== "left" || "right",
        ' flex-row gap-[5px] place-content-between w-full': action_id.input_direction !== "left" || "right",
        'flex-col flex justify-end': action_id.input_direction == "left",
        'flex-col flex justify-start': action_id.input_direction == "right",

    });

    const layerTagClassNames = clsx({

        'text-modifier flex gap-[5px] place-content-between w-full self-start': input_direction !== "left" || "right",
        ' flex-row gap-[5px] place-content-between w-full': action_id.input_direction !== "left" || "right",
        // 'flex-col flex justify-end': action_id.input_direction == "left",
        // 'flex-col flex justify-end': action_id.input_direction == "right",

    });

 

    return (
        // <>{getLayer(action_id.layer)} </>
        <> 
        <div className={actionDirectionClassNames} >
            <div className='layer-tag'>
                <LayerTag layerNumber={layerNumber} input_direction={action_id.input_direction}/>
            </div>
            <p className={actionTextClassNames}> {action_id.action_id} </p>
        </div></>

    )
}

export default Action