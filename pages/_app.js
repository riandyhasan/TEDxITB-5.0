import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { FONTS } from "../constant";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  colors: {
    brand: {
      tedred: "#E62B1E",
      tedsemired: "#FF3333",
      tedorange: "#F0592B",
      tedpink: "rgba(230, 43, 30, 0.81)",
      tedsemipink: "rgba(255, 51, 51, 0.81)",
      tedlightpink: "rgba(240, 89, 43, 0.74)",
      gradientRed: "linear-gradient(193.42deg, #F0592B -2.69%, #FF3333 104.89%)",
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={FONTS} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
