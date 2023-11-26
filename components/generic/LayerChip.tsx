'use client'
import React from "react";

import clsx from "clsx";


export default function LayerChip(props) {


    // console.log(props);


    const layerNumber = props.layer;
    // console.log(layerNumber);


    const modifierKey = "// SHIFT + P";

    const isButton = props.isButton;

    const classNames = clsx({
        'modifier-chip-0 flex gap-[6px]': layerNumber === "0",
        'modifier-chip-2 flex gap-[6px]': layerNumber === "1",
        'modifier-chip-3 flex gap-[6px]': layerNumber === "2",
        'modifier-chip-2 button-chip flex gap-[6px]': (props.isButton === 'true') && (layerNumber === "1"),
        'modifier-chip-3 button-chip flex gap-[6px]': (props.isButton === 'true') && (layerNumber === "2"),
        'modifier-chip-0 button-chip flex gap-[6px]': (props.isButton === 'true') && (layerNumber === "0"),

    })

    const layerTagTextClassNames = clsx({
        'text-modifier-chip-layer-2  text-modifier-chip  self-center': true,
    })


    const selectModLayer = (selectedLayerNumber) => {
        // console.log("MOD LAYER SELECTED: " + selectedLayerNumber);
        // console.log("selectedModLayer" + layerNumber);

        // globally select the mod layer here
        return (() => {
            // console.log("MOD LAYER SELECTED: " + selectedLayerNumber);
            // console.log("selectedModLayer" + layerNumber);
            

        })
    }

    const chipTemplate =
        <div
            className={classNames}
        >
            <div className="flex flex-row gap-[4px]">
                <div className="self-center ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={15}
                    >
                        <g fill="var(--test)" clipPath="url(#a)">
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
                </div>
                <p className={layerTagTextClassNames}> {layerNumber} </p>

            </div>
            <p className="text-modifier-chip-layer-2"> {modifierKey}</p>

        </div>



    if (isButton === 'true') {
        return (
            <form action=" ">
                <div className="selectModLayerField" >
                    <label htmlFor={"selectedModLayer" + layerNumber}>
                        <input
                            id={"selectedModLayer" + layerNumber}
                            name="toggle"
                            // value="1"
                            type="checkbox"
                            onClick={() => selectModLayer(layerNumber)}
                        >
                        </input>
                        {chipTemplate}
                    </label>


                </div>
            </form>

        )
    } else {
        return (chipTemplate);
    }




    // return (
    //     <div
    //         className={classNames}
    //     >
    //         <div className="flex flex-row gap-[4px]">
    //             <div className="self-center ">
    //                 <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width={14}
    //                     height={15}
    //                 >
    //                     <g fill="var(--test)" clipPath="url(#a)">
    //                         <path d="M11.954 2.845 8.017 1.092c-.577-.256-1.45-.256-2.028 0L2.052 2.845C1.057 3.29.909 3.893.909 4.215c0 .323.148.928 1.143 1.371L5.989 7.34c.288.127.651.195 1.014.195s.726-.068 1.014-.195l3.937-1.754c.995-.443 1.143-1.048 1.143-1.37 0-.323-.142-.927-1.143-1.37Z" />
    //                         <path d="M7.003 11.007c-.255 0-.51-.054-.745-.154L1.729 8.837C1.037 8.528.5 7.702.5 6.943a.496.496 0 1 1 .994 0c0 .362.303.833.639.98L6.66 9.94a.851.851 0 0 0 .678 0l4.528-2.016c.336-.147.639-.61.639-.98a.496.496 0 1 1 .994 0c0 .752-.537 1.585-1.23 1.894l-4.528 2.016c-.228.1-.483.154-.739.154Z" />
    //                         <path d="M7.003 14.34a1.9 1.9 0 0 1-.745-.154L1.729 12.17A2.072 2.072 0 0 1 .5 10.275a.496.496 0 1 1 .994 0c0 .424.249.807.639.981l4.528 2.016a.852.852 0 0 0 .678 0l4.528-2.016c.383-.168.639-.557.639-.98a.496.496 0 1 1 .994 0 2.08 2.08 0 0 1-1.23 1.894l-4.528 2.016c-.228.1-.483.154-.739.154Z" />
    //                     </g>
    //                     <defs>
    //                         <clipPath id="a">
    //                             <path fill="#fff" d="M.5.9h13v13.44H.5z" />
    //                         </clipPath>
    //                     </defs>
    //                 </svg>
    //             </div>
    //             <p className={layerTagTextClassNames}> {layerNumber} </p>

    //         </div>
    //         <p className="text-modifier-chip-layer-2"> {modifierKey}</p>

    //     </div>
    // );
}

// return (
//     <div
//         className={classNames}
//     >
//         <div className="flex flex-row gap-[4px]">
//             <div className="self-center ">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={14}
//                     height={15}
//                 >
//                     <g fill="var(--test)" clipPath="url(#a)">
//                         <path d="M11.954 2.845 8.017 1.092c-.577-.256-1.45-.256-2.028 0L2.052 2.845C1.057 3.29.909 3.893.909 4.215c0 .323.148.928 1.143 1.371L5.989 7.34c.288.127.651.195 1.014.195s.726-.068 1.014-.195l3.937-1.754c.995-.443 1.143-1.048 1.143-1.37 0-.323-.142-.927-1.143-1.37Z" />
//                         <path d="M7.003 11.007c-.255 0-.51-.054-.745-.154L1.729 8.837C1.037 8.528.5 7.702.5 6.943a.496.496 0 1 1 .994 0c0 .362.303.833.639.98L6.66 9.94a.851.851 0 0 0 .678 0l4.528-2.016c.336-.147.639-.61.639-.98a.496.496 0 1 1 .994 0c0 .752-.537 1.585-1.23 1.894l-4.528 2.016c-.228.1-.483.154-.739.154Z" />
//                         <path d="M7.003 14.34a1.9 1.9 0 0 1-.745-.154L1.729 12.17A2.072 2.072 0 0 1 .5 10.275a.496.496 0 1 1 .994 0c0 .424.249.807.639.981l4.528 2.016a.852.852 0 0 0 .678 0l4.528-2.016c.383-.168.639-.557.639-.98a.496.496 0 1 1 .994 0 2.08 2.08 0 0 1-1.23 1.894l-4.528 2.016c-.228.1-.483.154-.739.154Z" />
//                     </g>
//                     <defs>
//                         <clipPath id="a">
//                             <path fill="#fff" d="M.5.9h13v13.44H.5z" />
//                         </clipPath>
//                     </defs>
//                 </svg>
//             </div>
//             <p className={layerTagTextClassNames}> {layerNumber} </p>

//         </div>
//         <p className="text-modifier-chip-layer-2"> {modifierKey}</p>

//     </div>

// );