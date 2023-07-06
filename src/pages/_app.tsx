import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from "@chakra-ui/react"

import '@fontsource-variable/raleway';
import '@fontsource-variable/inter';
import '@fontsource-variable/nunito';



const theme = extendTheme({
  colors: {
    brand: {
      100: "#EDEDE9",
      200: "#D6CCC2",
      300: "#F5EBE0",
      400: "#E3D5CA",
      500: "#D5BDAF",
    },
  },

  fonts: {
    heading: `'Nunito Variable', sans-serif`,
    body: `'Nunito Variable', sans-serif`,
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>);
}
