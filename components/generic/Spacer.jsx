import React from 'react'

const Spacer = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={81}
            fill="none"
            // {...props}
        >
            <g filter="url(#a)">
                <path
                    stroke="url(#b)"
                    strokeLinecap="round"
                    d="M24 15v44"
                    shapeRendering="crispEdges"
                />
            </g>
            <defs>
                <radialGradient
                    id="b"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="rotate(-132.384 20.052 12.955) scale(69.7227 744.651)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0.12} stopColor="#00F0FF" />
                    <stop offset={1} stopOpacity={0} />
                </radialGradient>
                <filter
                    id="a"
                    width={47}
                    height={91}
                    x={0.5}
                    y={-7.5}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={1} />
                    <feGaussianBlur stdDeviation={11.5} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.94 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_561_263" />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_561_263"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
        // <svg xmlns="http://www.w3.org/2000/svg" width="48" height="81" viewBox="0 0 48 81" fill="none">
        //     <g filter="url(#filter0_d_561_263)">
        //         <path d="M24 15L24 59" stroke="url(#paint0_radial_561_263)" stroke-linecap="round" shape-rendering="crispEdges" />
        //     </g>
        //     <defs>
        //         <filter id="filter0_d_561_263" x="0.5" y="-7.5" width="47" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        //             <feFlood flood-opacity="0" result="BackgroundImageFix" />
        //             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        //             <feOffset dy="1" />
        //             <feGaussianBlur stdDeviation="11.5" />
        //             <feComposite in2="hardAlpha" operator="out" />
        //             <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.94 0 0 0 0 1 0 0 0 1 0" />
        //             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_561_263" />
        //             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_561_263" result="shape" />
        //         </filter>
        //         <radialGradient id="paint0_radial_561_263" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.0001 36.5) rotate(-132.384) scale(69.7227 744.651)">
        //             <stop offset="0.119792" stop-color="#00F0FF" />
        //             <stop offset="1" stop-opacity="0" />
        //         </radialGradient>
        //     </defs>
        // </svg>)
)}

export default Spacer