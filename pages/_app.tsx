import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import PlausibleProvider from 'next-plausible';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider
      domain='test-kikin.vercel.app'
      taggedEvents
      trackOutboundLinks
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </PlausibleProvider>
  );
}
