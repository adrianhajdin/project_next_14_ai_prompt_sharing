'use client'
import Press from 'public/assets/icons/actions/input_up.svg';
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Hat from '@components/Hat';

const page = () => {
const action = "DECOY - LAUNCH BURST(TAP), SET & LAUNCH BURST (HOLD)"
const inputName = "HAT UP"

  return (

    <section>
      <div className='test'>
        <Press />

        <p className='text-test'>LAYERS</p>
        <div className="test2 w-full ">
          <div className="input-up ">

            <div className="input-label input-name mb-1">
              <div className="text-wrapper">{inputName}</div>
            </div>
            <div className="action-list ">

              <p className="action">{action}</p>
              <p className="action">{action}</p>
              <p className="action">{action}</p>

             
            </div>

            <div className="ui-corners mt-2.5">
              <div className='square_contain'>
                <div className='w-40px h-40px '>
                  <Press />
                </div>
              </div>
            </div>

          </div>
          <div className="hat">
            <Hat />
          </div>


        </div>
      </div>

    </section>
  )
}

export default page