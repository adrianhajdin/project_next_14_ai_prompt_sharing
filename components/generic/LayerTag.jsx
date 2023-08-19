
import clsx from 'clsx';
import React from 'react'

const LayerTag = (layerNumber, input_direction) => {


    const number = layerNumber.layerNumber
    // console.log(number);

    var layerFill = "white";

    const textClassName = clsx({

        'text-modifier': true,
        'text-layer1': number == "1",
        'text-layer2': number == "2",
        'text-layer3': number == "3",
    });

    const directionClassName = clsx({

        'layer-tag-default flex self-start ': layerNumber.input_direction !== "left" || "right",
        'layer-tag-left flex self-start ': layerNumber.input_direction === "left",
        'layer-tag-right flex  ': layerNumber.input_direction === "right"

    });

    switch (number) {
        case "1":
            layerFill = "#00FFF0";
            break;

        case "2":
            layerFill = "#FFB800";
            break;

        case "3":
            layerFill = "#04ff00";
            break;

        default:
            break;
    }

    return (
        <div className={directionClassName}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={15}
                fill={layerFill}
            >
                <g fill={layerFill} clipPath="url(#a)">
                    <path d="M11.954 2.845 8.017 1.092c-.577-.256-1.45-.256-2.028 0L2.052 2.845C1.057 3.29.909 3.893.909 4.215c0 .323.148.928 1.143 1.371L5.989 7.34c.288.127.651.195 1.014.195s.726-.068 1.014-.195l3.937-1.754c.995-.443 1.143-1.048 1.143-1.37 0-.323-.142-.927-1.143-1.37Z" />
                    <path d="M7.003 11.007c-.255 0-.51-.054-.745-.154L1.729 8.837C1.037 8.528.5 7.702.5 6.943a.496.496 0 1 1 .994 0c0 .362.303.833.639.98L6.66 9.94a.851.851 0 0 0 .678 0l4.528-2.016c.336-.147.639-.61.639-.98a.496.496 0 1 1 .994 0c0 .752-.537 1.585-1.23 1.894l-4.528 2.016c-.228.1-.483.154-.739.154Z" />
                    <path d="M7.003 14.34a1.9 1.9 0 0 1-.745-.154L1.729 12.17A2.072 2.072 0 0 1 .5 10.275a.496.496 0 1 1 .994 0c0 .424.249.807.639.981l4.528 2.016a.852.852 0 0 0 .678 0l4.528-2.016c.383-.168.639-.557.639-.98a.496.496 0 1 1 .994 0 2.08 2.08 0 0 1-1.23 1.894l-4.528 2.016c-.228.1-.483.154-.739.154Z" />
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M.5.9h13v13.44H.5z" />
                    </clipPath>
                </defs>
            </svg>
            <p className={textClassName}> {number} </p>
        </div>



    )
}

export default LayerTag