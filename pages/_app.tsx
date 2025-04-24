import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { MantineProvider, createTheme, virtualColor } from '@mantine/core';

// Define LBG-inspired theme colors
const lbgGreen = '#00864F';
const lbgBlue = '#007ea3'; // Secondary accent
const lbgNearBlack = '#231F20';

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif', // Consistent clean font
  primaryColor: 'lbg-green',       // Set primary to LBG Green
  headings: {
    fontFamily: 'Arial, sans-serif', // Slightly bolder/different heading font
    fontWeight: '700',
    // Default heading color can be set here if needed
    // styles: {
    //   root: {
    //     color: lbgNearBlack, // Example
    //   }
    // }
  },
  colors: {
    'lbg-green': virtualColor({
      name: 'lbg-green',
      dark: lbgGreen, // Use the same green for dark mode for simplicity
      light: lbgGreen,
    }),
    'lbg-blue': virtualColor({
      name: 'lbg-blue',
      dark: lbgBlue,
      light: lbgBlue,
    }),
    // You can define full color arrays (0-9) if needed for shades
    // Example for green:
    // 'lbg-green': [
    //   '#e0f2eb', '#b3dfd1', '#80c9b3', '#4dbb95',
    //   '#26ad7d', lbgGreen, '#007a47', '#006b3f',
    //   '#005e37', '#00512f'
    // ],
  },
  components: {
    Button: {
      // Example: Default LBG green buttons
      defaultProps: {
        color: 'lbg-green',
      },
      // styles: (theme: MantineTheme) => ({ root: { } }),
    },
    Card: {
      styles: () => ({
        root: {
          // Add subtle border accent using primary color?
          // borderColor: theme.colors['lbg-green'][2], // Light green border
        }
      })
    },
    Title: {
       styles: () => ({
         root: {
           // Use near black for titles by default for readability
           color: lbgNearBlack,
         }
       })
    },
    Anchor: {
      defaultProps: {
        c: 'lbg-green', // Default link color to LBG green
      }
    },
    // Override chart colors if needed globally, though often done per-chart
    // RadarChart: { ... }
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Using light theme explicitly based on previous setup
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Component {...pageProps} />
    </MantineProvider>
  );
}
