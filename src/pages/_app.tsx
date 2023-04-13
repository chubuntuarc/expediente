import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
