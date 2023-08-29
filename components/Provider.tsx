'use client';

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from '@nextui-org/react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact-sass-theme-9.6.2/themes/mytheme/theme.scss';
const Provider = ({ children, session }) => (

  <SessionProvider session={session}>
    <PrimeReactProvider >
        {children}
    </PrimeReactProvider>
  </SessionProvider>


)

export default Provider;
