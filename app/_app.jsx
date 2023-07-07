// 1. import `NextUIProvider` component
"use client";
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app

    <NextUIProvider>
      <SessionProvider session={session}>

        <Component {...pageProps} />
      </SessionProvider>

    </NextUIProvider>
  );
}

export default MyApp;
