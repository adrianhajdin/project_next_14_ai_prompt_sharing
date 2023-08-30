"use client";
import { useState, useEffect } from "react";
import React from 'react';

const GameVerDropdown = () => {
    // const [gameVersionOptions, setGameVersionOptions] = useState([{ key: 'defaultKey value', name: 'defaultname' }, { key: 'test2', name: 'test2' }]);
    const [gameVersionOptions, setGameVersionOptions] = useState([{ key: 'defaultKey value', name: 'defaultname' }, { key: 'test2', name: 'test2' }]);

    //const testt = [{ key: 'set', name: 'set' }];
    useEffect(() => {
        const fetchGameOptions = async () => {
            console.log("USE EFFECT START");
            const response = await fetch(`/api/games`);
            console.log("FETCHED RESPONSE ok?:" + response.ok + response);


            const data = await response.json();
            console.log("FETCHED DATA" + data);



            console.log("WILL THIS WORK?");
            //   const parsed = await data.map(function (d) { return d.toObject() })

            setGameVersionOptions(JSON.parse(JSON.stringify(data)));
        };

        console.log("USE EFFECT BEFORE: " + Array.isArray(gameVersionOptions) + gameVersionOptions);

        fetchGameOptions();

        console.log("USE EFFECT AFTER:" + Array.isArray(gameVersionOptions) + gameVersionOptions);

    }, []);

    const test = [
        { key: '3.19', name: '3-19', _id: false, versions: [] },
        { key: '3.18', name: '3-18', _id: false, versions: [] },
        { key: '3.17', name: '3-17', _id: false, versions: [] }
    ];

    return (
        <section>
            <h2> {"STRING: " + Array.isArray(gameVersionOptions) + JSON.stringify(gameVersionOptions)}</h2>
            <h2> {Array.isArray(gameVersionOptions.versions) + " test: " + gameVersionOptions.versions}</h2>
            {/* <Dropdown>
                <Dropdown.Button flat> wow</Dropdown.Button>
                <Dropdown.Menu aria-label="Dynamic Actions" items={gameVersionOptions.versions}>
                    {(ver) => (
                        <Dropdown.Item
                            key={ver.key}
                            color={ver.key === "delete" ? "error" : "default"}
                        >
                            {ver.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown> */}
        </section>
    )
}

export default GameVerDropdown;

// export default function GameVerDropdown() {

//     const [gameVersionOptions, setGameVersionOptions] = useState([{}]);

//     // useEffect(() => {
//     //     const fetchGameOptions = async () => {
//     //         const response = await fetch(`/api/games/`);
//     //         const data = await response.json();

//     //         setGameVersionOptions([{ key: 'test0', name: 'test0' }, { key: 'test2', name: 'test2' }]);
//     //     };

//     //     fetchGameOptions();

//     // }, []);
//     useEffect(() => {
//         (async () => {
//             const response = await fetch(`/api/games/`);
//             const data = await response.json();

//             setGameVersionOptions([{ key: 'test0', name: 'test0' }, { key: 'test2', name: 'test2' }]);
//         })();


//     }, []);


//     const menuItems = [
//         { key: '3.19', name: '3-19', _id: false, versions: [] },
//         { key: '3.18', name: '3-18', _id: false, versions: [] },
//         { key: '3.17', name: '3-17', _id: false, versions: [] }
//     ];

//     return (
//         <section>
//             <h2> {"TEST: " + Array.isArray(gameVersionOptions) + (gameVersionOptions)}</h2>
//             <Dropdown>
//                 <Dropdown.Button flat> {menuItems[0].key}</Dropdown.Button>
//                 <Dropdown.Menu aria-label="Dynamic Actions" items={gameVersionOptions}>
//                     {(ver) => (
//                         <Dropdown.Item
//                             key={ver.key}
//                         // color={gameVersionOptions.key === "delete" ? "error" : "default"}
//                         >
//                             {ver.name}
//                         </Dropdown.Item>
//                     )}
//                 </Dropdown.Menu>
//             </Dropdown>
//         </section>
//     );
// }
