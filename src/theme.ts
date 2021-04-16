import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
      blackBackground: string
      greyBackground: string
  }

  interface PaletteOptions {
      blackBackground: string
      greyBackground: string
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    blackBackground: '#00000094',
    greyBackground: '#0000006b',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#0071BC',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;