// 1. import `NextUIProvider` component
"use client";
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {}, // optional
    }
  })

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {}, // optional
    }
  })
  return (
    // 2. Use at the root of your app

    <NextUIProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}>
      <SessionProvider session={session}>

        <Component {...pageProps} />
      </SessionProvider>

    </NextUIProvider>
  );
}

export default MyApp;
