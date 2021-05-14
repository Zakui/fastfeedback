import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@/lib/auth'
import { css, Global } from '@emotion/react';

import customTheme from '@/styles/theme'

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};


function MyApp({ Component, pageProps }) {
  return <ChakraProvider resetCSS theme={customTheme}>
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  </ChakraProvider>
}

export default MyApp
