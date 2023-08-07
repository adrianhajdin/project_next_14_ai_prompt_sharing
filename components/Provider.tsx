'use client';

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from '@nextui-org/react';


const Provider = ({ children, session }) => (

  <SessionProvider session={session}>

    <NextUIProvider session={session}>
      {children}
    </NextUIProvider>

  </SessionProvider>


)

export default Provider;
