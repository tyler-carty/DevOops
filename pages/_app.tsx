import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { MantineProvider, createTheme, virtualColor } from '@mantine/core';

// Define LBG-inspired theme colors
const lbgGreen = '#00864F';
const lbgBlue = '#007ea3'; // Secondary accent - Keep or remove?
const lbgNearBlack = '#231F20';
const lbgWhite = '#ffffff'; // Adding white

const theme = createTheme({
  fontFamily: 'Poppins, sans-serif', // Use Poppins as the base font
  primaryColor: 'lbg-green',       // Set primary to LBG Green
  white: lbgWhite,
  black: lbgNearBlack,
  headings: {
    fontFamily: 'Poppins, sans-serif', // Use Poppins for headings too
    fontWeight: '600', // Adjust weight as needed (Poppins has 300-700)
    // styles: {
    //   root: {
    //     color: lbgNearBlack, // Handled by default color scheme or Title override
    //   }
    // }
  },
  colors: {
    // Ensure names match primaryColor etc.
    'lbg-green': virtualColor({
      name: 'lbg-green',
      dark: lbgGreen,
      light: lbgGreen,
    }),
    'lbg-blue': virtualColor({
      name: 'lbg-blue',
      dark: lbgBlue,
      light: lbgBlue,
    }),
    // Mantine often expects shades 0-9. VirtualColor is simpler but less flexible.
    // If full palette needed, define arrays like the commented example.
  },
  components: {
    Button: {
      defaultProps: {
        color: 'lbg-green',
      },
      // styles: (theme) => ({ root: { fontWeight: 500 } }), // Example style override
    },
    Card: {
      styles: () => ({
        root: {
           // Keep default card styling for now
        }
      })
    },
    Title: {
       styles: () => ({
         root: {
           color: lbgNearBlack, // Keep titles black for readability
         }
       })
    },
    Anchor: {
      defaultProps: {
        c: 'lbg-green', // Keep links green
      }
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Set default scheme based on branding needs (usually light)
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Component {...pageProps} />
    </MantineProvider>
  );
}
